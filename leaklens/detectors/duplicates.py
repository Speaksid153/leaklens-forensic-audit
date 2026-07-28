"""Duplicate and conflicting-record contamination checks."""

from __future__ import annotations

import pandas as pd

from leaklens.contracts import AuditFinding, AuditSeverity, DatasetConfig


def detect_duplicates(df: pd.DataFrame, config: DatasetConfig) -> list[AuditFinding]:
    feature_columns = [column for column in df.columns if column != config.target]
    exact_mask = df.duplicated(keep=False)
    feature_mask = df.duplicated(subset=feature_columns, keep=False)
    conflicting = (
        df.loc[feature_mask]
        .groupby(feature_columns, dropna=False, observed=True)[config.target]
        .nunique()
        .gt(1)
        .sum()
        if feature_mask.any()
        else 0
    )
    findings: list[AuditFinding] = []
    if feature_mask.any():
        fraction = float(feature_mask.mean())
        severity = AuditSeverity.HIGH if fraction >= 0.05 else AuditSeverity.MEDIUM
        findings.append(
            AuditFinding(
                detector="duplicate_contamination",
                severity=severity,
                title="Repeated feature rows can contaminate evaluation",
                explanation=(
                    "Rows with identical predictor values can cross a random train/test split, "
                    "allowing the model to be evaluated on records it has effectively seen."
                ),
                recommendation="Deduplicate before splitting and investigate conflicting labels.",
                evidence={
                    "feature_duplicate_rows": int(feature_mask.sum()),
                    "feature_duplicate_fraction": round(fraction, 6),
                    "exact_duplicate_rows": int(exact_mask.sum()),
                    "conflicting_feature_groups": int(conflicting),
                },
                remediable=True,
            )
        )
    return findings

