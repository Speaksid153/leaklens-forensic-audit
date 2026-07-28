"""Typed contracts shared by detectors, evaluation, and the future UI."""

from __future__ import annotations

from dataclasses import dataclass, field
from enum import IntEnum
from typing import Any


class AuditSeverity(IntEnum):
    """Severity ordering is numeric so findings can be sorted consistently."""

    INFO = 0
    LOW = 1
    MEDIUM = 2
    HIGH = 3
    CRITICAL = 4


@dataclass(frozen=True)
class DatasetConfig:
    """User-provided dataset semantics required for a defensible audit."""

    target: str
    entity_column: str | None = None
    time_column: str | None = None
    positive_label: Any = 1
    random_state: int = 42
    test_size: float = 0.25


@dataclass(frozen=True)
class AuditFinding:
    """Evidence-first output from one detector."""

    detector: str
    severity: AuditSeverity
    title: str
    explanation: str
    recommendation: str
    evidence: dict[str, Any] = field(default_factory=dict)
    affected_columns: tuple[str, ...] = ()
    remediable: bool = False


@dataclass(frozen=True)
class EvaluationResult:
    """Comparable output from one evaluation strategy."""

    strategy: str
    metrics: dict[str, float]
    train_rows: int
    test_rows: int
    train_positive_rate: float
    test_positive_rate: float
    excluded_columns: tuple[str, ...] = ()

