"""Time-aware evaluation mismatch checks."""

from __future__ import annotations

import pandas as pd

from leaklens.contracts import AuditFinding, AuditSeverity, DatasetConfig


def detect_temporal_mismatch(df: pd.DataFrame, config: DatasetConfig) -> list[AuditFinding]:
    if not config.time_column:
        return []
    parsed = pd.to_datetime(df[config.time_column], errors="coerce")
    invalid_fraction = float(parsed.isna().mean())
    if parsed.nunique() < 2:
        severity = AuditSeverity.HIGH
        title = "The supplied time column cannot define a chronological split"
        recommendation = "Provide a parseable timestamp with at least two distinct values."
    else:
        severity = AuditSeverity.HIGH
        title = "A random split would allow future observations into training"
        recommendation = "Sort by time and reserve the latest observations as the test set."
    return [
        AuditFinding(
            detector="temporal_mismatch",
            severity=severity,
            title=title,
            explanation=(
                "When deployment predicts future outcomes, random splitting evaluates a different "
                "and usually easier problem than real-world forward generalization."
            ),
            recommendation=recommendation,
            evidence={
                "parse_failure_fraction": round(invalid_fraction, 6),
                "distinct_timestamps": int(parsed.nunique()),
                "earliest": str(parsed.min()),
                "latest": str(parsed.max()),
            },
            affected_columns=(config.time_column,),
            remediable=True,
        )
    ]
