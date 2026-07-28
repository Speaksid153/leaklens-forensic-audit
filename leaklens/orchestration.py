"""Public audit entry point independent of any web framework."""

from __future__ import annotations

from dataclasses import asdict
from typing import Any

import pandas as pd

from leaklens.contracts import AuditFinding, AuditSeverity, DatasetConfig
from leaklens.detectors import DETECTORS
from leaklens.evaluation import evaluate, recommended_strategy


def validate_dataset(df: pd.DataFrame, config: DatasetConfig) -> None:
    if config.target not in df.columns:
        raise ValueError(f"target column '{config.target}' was not found")
    for label, column in (("entity", config.entity_column), ("time", config.time_column)):
        if column and column not in df.columns:
            raise ValueError(f"{label} column '{column}' was not found")
    if not 0.1 <= config.test_size <= 0.5:
        raise ValueError("test_size must be between 0.1 and 0.5")
    if len(df) < 80:
        raise ValueError("at least 80 rows are required for a meaningful audit")
    if df[config.target].nunique(dropna=True) != 2:
        raise ValueError("Day 1 supports binary classification targets only")


def run_detectors(df: pd.DataFrame, config: DatasetConfig) -> list[AuditFinding]:
    findings = [finding for detector in DETECTORS for finding in detector(df, config)]
    return sorted(findings, key=lambda finding: (-int(finding.severity), finding.detector))


def reliability_score(findings: list[AuditFinding]) -> dict[str, Any]:
    category_caps = {
        "entity_overlap": 30,
        "temporal_mismatch": 30,
        "suspicious_feature": 25,
        "identifier_memorization": 15,
        "duplicate_contamination": 15,
    }
    severity_fraction = {
        AuditSeverity.INFO: 0.0,
        AuditSeverity.LOW: 0.25,
        AuditSeverity.MEDIUM: 0.5,
        AuditSeverity.HIGH: 0.75,
        AuditSeverity.CRITICAL: 1.0,
    }
    deductions: dict[str, int] = {}
    for finding in findings:
        cap = category_caps.get(finding.detector, 10)
        deduction = round(cap * severity_fraction[finding.severity])
        deductions[finding.detector] = max(deductions.get(finding.detector, 0), deduction)
    return {"score": max(0, 100 - sum(deductions.values())), "deductions": deductions}


def audit(df: pd.DataFrame, config: DatasetConfig) -> dict[str, Any]:
    validate_dataset(df, config)
    findings = run_detectors(df, config)
    naive = evaluate(df, config, "stratified_random")
    suspect_columns = {
        column
        for finding in findings
        if finding.remediable
        and finding.detector in {"suspicious_feature", "identifier_memorization"}
        for column in finding.affected_columns
    }
    corrected_exclusions = suspect_columns | {
        column for column in (config.entity_column, config.time_column) if column
    }
    trustworthy = evaluate(
        df,
        config,
        recommended_strategy(config),
        excluded_columns=corrected_exclusions,
    )
    return {
        "dataset": {
            "rows": len(df),
            "columns": len(df.columns),
            "target": config.target,
            "positive_rate": round(float((df[config.target] == config.positive_label).mean()), 6),
        },
        "findings": [asdict(finding) for finding in findings],
        "reliability": reliability_score(findings),
        "naive_evaluation": asdict(naive),
        "trustworthy_evaluation": asdict(trustworthy),
        "metric_inflation": {
            metric: round(naive.metrics[metric] - trustworthy.metrics[metric], 6)
            for metric in naive.metrics
        },
    }

