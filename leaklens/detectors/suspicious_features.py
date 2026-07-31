"""Univariate detectors for features suspiciously predictive of the target."""

from __future__ import annotations

import numpy as np
import pandas as pd
from sklearn.metrics import roc_auc_score

from leaklens.contracts import AuditFinding, AuditSeverity, DatasetConfig


def _univariate_auc(series: pd.Series, target: pd.Series) -> float | None:
    valid = series.notna() & target.notna()
    x = series.loc[valid]
    y = target.loc[valid]
    if y.nunique() != 2 or x.nunique() < 2:
        return None
    if pd.api.types.is_numeric_dtype(x):
        encoded = x.astype(float)
    else:
        # High-cardinality identifiers are handled by the identifier detector. For other
        # categoricals, leave-one-out encoding prevents a row's own target from creating
        # artificial predictive power.
        if x.nunique() > min(100, max(10, int(len(x) * 0.2))):
            return None
        frame = pd.DataFrame({"feature": x, "target": y})
        grouped = frame.groupby("feature", observed=True)["target"].agg(["sum", "count"])
        sums = x.map(grouped["sum"]).astype(float)
        counts = x.map(grouped["count"]).astype(float)
        global_rate = float(y.mean())
        encoded = ((sums - y) / (counts - 1)).where(counts > 1, global_rate)
    try:
        auc = float(roc_auc_score(y, encoded))
    except ValueError:
        return None
    return max(auc, 1 - auc)


def detect_suspicious_features(df: pd.DataFrame, config: DatasetConfig) -> list[AuditFinding]:
    findings: list[AuditFinding] = []
    ignored = {config.target, config.entity_column, config.time_column, None}
    binary_target = (df[config.target] == config.positive_label).astype(int)
    for column in df.columns:
        if column in ignored:
            continue
        auc = _univariate_auc(df[column], binary_target)
        if auc is None or np.isnan(auc) or auc < 0.97:
            continue
        severity = AuditSeverity.CRITICAL if auc >= 0.995 else AuditSeverity.HIGH
        findings.append(
            AuditFinding(
                detector="suspicious_feature",
                severity=severity,
                title=f"'{column}' predicts the target almost perfectly by itself",
                explanation=(
                    "Near-perfect univariate performance is statistical evidence of possible "
                    "target leakage. It is not semantic proof; the feature's availability at "
                    "prediction time must be reviewed by a human."
                ),
                recommendation=(
                    "Verify when this feature is created and exclude it if it is post-outcome."
                ),
                evidence={"univariate_auc": round(auc, 6), "threshold": 0.97},
                affected_columns=(str(column),),
                remediable=True,
            )
        )
    return findings
