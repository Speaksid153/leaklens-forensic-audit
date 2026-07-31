"""Public audit entry point independent of any web framework."""

from __future__ import annotations

from dataclasses import asdict
from typing import Any

import numpy as np
import pandas as pd

from leaklens.contracts import AuditFinding, AuditSeverity, DatasetConfig
from leaklens.detectors import DETECTORS
from leaklens.evaluation import (
    evaluate,
    evaluate_prevalence_baseline,
    recommended_strategy,
    split_indices,
)


def validate_dataset(df: pd.DataFrame, config: DatasetConfig) -> None:
    if config.target not in df.columns:
        raise ValueError(f"target column '{config.target}' was not found")
    for label, column in (("entity", config.entity_column), ("time", config.time_column)):
        if column and column not in df.columns:
            raise ValueError(f"{label} column '{column}' was not found")
    semantic_columns = [
        column for column in (config.target, config.entity_column, config.time_column) if column
    ]
    if len(semantic_columns) != len(set(semantic_columns)):
        raise ValueError("target, entity, and time columns must be different columns")
    if not 0.1 <= config.test_size <= 0.5:
        raise ValueError("test_size must be between 0.1 and 0.5")
    if len(df) < 80:
        raise ValueError("at least 80 rows are required for a meaningful audit")
    if df[config.target].isna().any():
        raise ValueError(
            "target column contains missing values; remove or label them before auditing"
        )
    if df[config.target].nunique(dropna=True) != 2:
        raise ValueError("Day 1 supports binary classification targets only")
    if config.positive_label not in set(df[config.target].unique()):
        raise ValueError("positive_label is not present in the target column")
    class_counts = df[config.target].value_counts(dropna=False)
    if int(class_counts.min()) < 2:
        raise ValueError(
            "each target class must contain at least two rows for train/test evaluation"
        )
    try:
        train_idx, test_idx = split_indices(df, config, "stratified_random")
    except ValueError as error:
        raise ValueError(
            "target class distribution cannot produce a valid stratified holdout"
        ) from error
    if (
        df.iloc[train_idx][config.target].nunique() != 2
        or df.iloc[test_idx][config.target].nunique() != 2
    ):
        raise ValueError(
            "target class distribution cannot produce train and test partitions containing "
            "both classes; add more minority-class rows"
        )
    if config.entity_column and df[config.entity_column].isna().any():
        raise ValueError("entity column contains missing values")
    if config.time_column:
        parsed_time = pd.to_datetime(
            df[config.time_column], errors="coerce", format="mixed"
        )
        if parsed_time.isna().any():
            raise ValueError("time column contains missing or unparseable values")
    semantic_columns = {
        column
        for column in (config.target, config.entity_column, config.time_column)
        if column is not None
    }
    feature_columns = [column for column in df.columns if column not in semantic_columns]
    usable_features = [column for column in feature_columns if df[column].notna().any()]
    if not usable_features:
        raise ValueError("at least one non-empty model feature column is required")
    for column in df[usable_features].select_dtypes(include=["number"]).columns:
        if np.isinf(df[column].to_numpy(dtype=float, na_value=np.nan)).any():
            raise ValueError(
                f"numeric feature column '{column}' contains infinite values; replace them with "
                "missing or finite values"
            )


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
        "evaluation_infeasible": 50,
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


def corrected_duplicate_finding(
    df: pd.DataFrame, config: DatasetConfig, feature_columns: list[str]
) -> AuditFinding | None:
    """Detect duplicates that appear after unsafe or semantic columns are excluded."""

    duplicate_mask = df.duplicated(subset=feature_columns, keep=False)
    if not duplicate_mask.any():
        return None
    conflicting = (
        df.loc[duplicate_mask]
        .groupby(feature_columns, dropna=False, observed=True)[config.target]
        .nunique()
        .gt(1)
        .sum()
    )
    fraction = float(duplicate_mask.mean())
    severity = AuditSeverity.HIGH if fraction >= 0.05 else AuditSeverity.MEDIUM
    return AuditFinding(
        detector="duplicate_contamination",
        severity=severity,
        title="Rows become duplicates after leakage-risk columns are removed",
        explanation=(
            "Unique identifiers or unsafe fields masked repeated predictor patterns. A random "
            "split would place corrected-space duplicates in both train and test partitions."
        ),
        recommendation=(
            "Group identical corrected feature rows into one partition and investigate "
            "conflicting labels."
        ),
        evidence={
            "corrected_duplicate_rows": int(duplicate_mask.sum()),
            "corrected_duplicate_fraction": round(fraction, 6),
            "conflicting_corrected_groups": int(conflicting),
        },
        affected_columns=tuple(map(str, feature_columns)),
        remediable=True,
    )


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
    corrected_features = [
        column
        for column in df.columns
        if column not in corrected_exclusions | {config.target} and df[column].notna().any()
    ]
    if not corrected_features:
        excluded = ", ".join(sorted(map(str, corrected_exclusions))) or "configured columns"
        raise ValueError(
            "no trustworthy model features remain after excluding leakage-risk and semantic "
            f"columns ({excluded}); add at least one valid predictor"
        )
    corrected_duplicate = corrected_duplicate_finding(df, config, corrected_features)
    if corrected_duplicate and not any(
        finding.detector == "duplicate_contamination" for finding in findings
    ):
        findings.append(corrected_duplicate)
    trustworthy_strategy = recommended_strategy(config)
    if trustworthy_strategy == "stratified_random" and corrected_duplicate:
        trustworthy_strategy = "duplicate_aware"
    feature_corrected = evaluate(
        df,
        config,
        "stratified_random",
        excluded_columns=corrected_exclusions,
    )
    trustworthy_note: str | None = None
    try:
        trustworthy = evaluate(
            df,
            config,
            trustworthy_strategy,
            excluded_columns=corrected_exclusions,
        )
    except ValueError as error:
        if trustworthy_strategy != "duplicate_aware" or "duplicate-aware splitting" not in str(
            error
        ):
            raise
        trustworthy_note = (
            "A duplicate-safe holdout is mathematically infeasible for these corrected feature "
            "groups. LeakLens reports a non-memorizing prevalence baseline instead of claiming "
            "a trustworthy model score."
        )
        findings.append(
            AuditFinding(
                detector="evaluation_infeasible",
                severity=AuditSeverity.CRITICAL,
                title="A duplicate-safe holdout cannot be formed",
                explanation=trustworthy_note,
                recommendation=(
                    "Collect more distinct predictor patterns per class or redefine the "
                    "evaluation unit before training a model."
                ),
                evidence={"fallback_strategy": "prevalence_baseline", "reason": str(error)},
                affected_columns=tuple(map(str, corrected_features)),
                remediable=False,
            )
        )
        trustworthy = evaluate_prevalence_baseline(
            df,
            config,
            excluded_columns=corrected_exclusions,
        )
    findings = sorted(
        findings, key=lambda finding: (-int(finding.severity), finding.detector)
    )
    evaluation_stages = [
        {"label": "Naive random split", **asdict(naive)},
        {"label": "Leaky features removed", **asdict(feature_corrected)},
        {
            "label": (
                "Conservative prevalence baseline"
                if trustworthy_note
                else "Trustworthy split"
            ),
            **asdict(trustworthy),
        },
    ]
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
        "trustworthy_note": trustworthy_note,
        "evaluation_stages": evaluation_stages,
        "metric_inflation_valid": trustworthy_note is None,
        "metric_inflation": {
            metric: round(naive.metrics[metric] - trustworthy.metrics[metric], 6)
            for metric in naive.metrics
        },
    }
