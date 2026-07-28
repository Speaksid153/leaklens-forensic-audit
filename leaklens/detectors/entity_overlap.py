"""Repeated-entity leakage checks."""

from __future__ import annotations

import pandas as pd
from sklearn.model_selection import train_test_split

from leaklens.contracts import AuditFinding, AuditSeverity, DatasetConfig


def detect_entity_overlap(df: pd.DataFrame, config: DatasetConfig) -> list[AuditFinding]:
    if not config.entity_column:
        return []
    train, test = train_test_split(
        df,
        test_size=config.test_size,
        random_state=config.random_state,
        stratify=df[config.target],
    )
    train_entities = set(train[config.entity_column].dropna())
    test_entities = set(test[config.entity_column].dropna())
    overlap = train_entities & test_entities
    overlap_fraction = len(overlap) / max(1, len(test_entities))
    if not overlap:
        return []
    severity = AuditSeverity.CRITICAL if overlap_fraction >= 0.2 else AuditSeverity.HIGH
    return [
        AuditFinding(
            detector="entity_overlap",
            severity=severity,
            title="The same entities appear in training and testing",
            explanation=(
                "A random row split lets entity-specific patterns leak into the test set and can "
                "substantially inflate generalization performance."
            ),
            recommendation=(
                "Use a group-aware split so each entity belongs to exactly one partition."
            ),
            evidence={
                "overlapping_entities": len(overlap),
                "test_entities": len(test_entities),
                "test_entity_overlap_fraction": round(overlap_fraction, 6),
            },
            affected_columns=(config.entity_column,),
            remediable=True,
        )
    ]
