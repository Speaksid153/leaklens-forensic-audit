"""High-cardinality identifier and memorization-risk checks."""

from __future__ import annotations

import re

import pandas as pd

from leaklens.contracts import AuditFinding, AuditSeverity, DatasetConfig

_ID_NAME = re.compile(r"(^id$|_id$|^id_|uuid|guid|identifier|_key$|number$)", re.IGNORECASE)


def detect_identifiers(df: pd.DataFrame, config: DatasetConfig) -> list[AuditFinding]:
    findings: list[AuditFinding] = []
    ignored = {config.target, config.entity_column, config.time_column, None}
    for column in df.columns:
        if column in ignored:
            continue
        uniqueness = df[column].nunique(dropna=True) / max(1, df[column].notna().sum())
        name_signal = bool(_ID_NAME.search(str(column)))
        if uniqueness >= 0.95 and (name_signal or not pd.api.types.is_float_dtype(df[column])):
            findings.append(
                AuditFinding(
                    detector="identifier_memorization",
                    severity=AuditSeverity.HIGH,
                    title=f"'{column}' behaves like a row identifier",
                    explanation=(
                        "Near-unique identifiers can let flexible models memorize records without "
                        "learning patterns that generalize to unseen examples."
                    ),
                    recommendation=(
                        "Exclude the identifier from model features and retain it only for "
                        "traceability."
                    ),
                    evidence={
                        "uniqueness_ratio": round(float(uniqueness), 6),
                        "name_signal": name_signal,
                    },
                    affected_columns=(str(column),),
                    remediable=True,
                )
            )
    return findings
