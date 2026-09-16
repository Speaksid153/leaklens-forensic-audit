"""Candidate dataset export after applying the audit's automatic controls."""

from __future__ import annotations

from typing import Any

import pandas as pd


def build_candidate_dataset(frame: pd.DataFrame, result: dict[str, Any]) -> pd.DataFrame:
    """Remove automatically excluded fields while retaining the target column."""

    target = str(result["dataset"]["target"])
    excluded = {
        column
        for column in result["trustworthy_evaluation"]["excluded_columns"]
        if column in frame.columns and column != target
    }
    return frame.drop(columns=sorted(excluded)).copy()
