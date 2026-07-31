"""Leakage-safe preprocessing, splitting, and binary-classification evaluation."""

from __future__ import annotations

from collections.abc import Iterable

import numpy as np
import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (
    accuracy_score,
    average_precision_score,
    balanced_accuracy_score,
    f1_score,
    precision_score,
    recall_score,
    roc_auc_score,
)
from sklearn.model_selection import GroupShuffleSplit, train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler

from leaklens.contracts import DatasetConfig, EvaluationResult


def _group_split_indices(
    df: pd.DataFrame, config: DatasetConfig, groups: pd.Series, strategy: str
) -> tuple[np.ndarray, np.ndarray]:
    """Choose a reproducible group-disjoint split that retains both target classes."""

    target = df[config.target]
    groups_per_class = groups.groupby(target, observed=True).nunique()
    if (groups_per_class < 2).any():
        raise ValueError(
            f"{strategy} splitting is infeasible because each target class must appear in at "
            "least two distinct groups"
        )

    splitter = GroupShuffleSplit(
        n_splits=128, test_size=config.test_size, random_state=config.random_state
    )
    overall_positive_rate = float((target == config.positive_label).mean())
    candidates: list[tuple[float, np.ndarray, np.ndarray]] = []
    for train, test in splitter.split(df, target, groups=groups):
        train = np.asarray(train)
        test = np.asarray(test)
        train_target = target.iloc[train]
        test_target = target.iloc[test]
        if train_target.nunique() != 2 or test_target.nunique() != 2:
            continue
        size_error = abs(len(test) / len(df) - config.test_size)
        test_positive_rate = float((test_target == config.positive_label).mean())
        prevalence_error = abs(test_positive_rate - overall_positive_rate)
        candidates.append((size_error + prevalence_error, train, test))

    if not candidates:
        raise ValueError(
            f"{strategy} splitting could not produce train and test partitions containing both "
            "target classes; add more groups per class or choose different semantics"
        )
    _, train, test = min(candidates, key=lambda candidate: candidate[0])
    return train, test


def split_indices(
    df: pd.DataFrame,
    config: DatasetConfig,
    strategy: str,
    excluded_columns: Iterable[str] = (),
) -> tuple[np.ndarray, np.ndarray]:
    indices = np.arange(len(df))
    if strategy == "stratified_random":
        train, test = train_test_split(
            indices,
            test_size=config.test_size,
            random_state=config.random_state,
            stratify=df[config.target],
        )
        return np.asarray(train), np.asarray(test)
    if strategy == "group_aware":
        if not config.entity_column:
            raise ValueError("group_aware strategy requires an entity column")
        return _group_split_indices(
            df, config, df[config.entity_column], strategy="group-aware"
        )
    if strategy == "duplicate_aware":
        excluded = set(excluded_columns) | {config.target}
        signature_columns = [column for column in df.columns if column not in excluded]
        if not signature_columns:
            raise ValueError("duplicate-aware splitting requires at least one model feature")
        signatures = pd.util.hash_pandas_object(
            df[signature_columns], index=False, categorize=True
        )
        return _group_split_indices(df, config, signatures, strategy="duplicate-aware")
    if strategy == "chronological":
        if not config.time_column:
            raise ValueError("chronological strategy requires a time column")
        timestamps = pd.to_datetime(
            df[config.time_column], errors="coerce", format="mixed"
        )
        if timestamps.isna().any():
            raise ValueError("time column contains missing or unparseable values")
        ordered = np.argsort(timestamps.to_numpy(), kind="stable")
        cut = int(round(len(ordered) * (1 - config.test_size)))
        return ordered[:cut], ordered[cut:]
    if strategy == "grouped_chronological":
        if not config.entity_column or not config.time_column:
            raise ValueError(
                "grouped_chronological strategy requires entity and time columns"
            )
        timestamps = pd.to_datetime(
            df[config.time_column], errors="coerce", format="mixed"
        )
        entities = df[config.entity_column]
        if timestamps.isna().any() or entities.isna().any():
            raise ValueError(
                "grouped chronological splitting requires complete entity and time columns"
            )
        group_start = timestamps.groupby(entities, observed=True).min().sort_values()
        target_test_rows = max(1, int(round(len(df) * config.test_size)))
        selected: list[object] = []
        selected_rows = 0
        group_sizes = entities.value_counts()
        for entity in reversed(group_start.index.tolist()):
            selected.append(entity)
            selected_rows += int(group_sizes.loc[entity])
            if selected_rows >= target_test_rows:
                break
        test_mask = entities.isin(selected)
        train_idx = indices[~test_mask.to_numpy()]
        test_idx = indices[test_mask.to_numpy()]
        if len(train_idx) == 0 or len(test_idx) == 0:
            raise ValueError("grouped chronological split produced an empty partition")
        train_latest = timestamps.iloc[train_idx].max()
        test_earliest = timestamps.iloc[test_idx].min()
        if train_latest >= test_earliest:
            raise ValueError(
                "strict grouped chronological splitting is infeasible because entity time ranges "
                "overlap; choose whether deployment prioritizes unseen entities or future periods"
            )
        return train_idx, test_idx
    raise ValueError(f"unknown evaluation strategy: {strategy}")


def _pipeline(x_train: pd.DataFrame, random_state: int) -> Pipeline:
    numeric = x_train.select_dtypes(include=["number", "bool"]).columns.tolist()
    categorical = [column for column in x_train.columns if column not in numeric]
    preprocessing = ColumnTransformer(
        transformers=[
            (
                "numeric",
                Pipeline(
                    [
                        ("imputer", SimpleImputer(strategy="median")),
                        ("scale", StandardScaler()),
                    ]
                ),
                numeric,
            ),
            (
                "categorical",
                Pipeline(
                    [
                        ("imputer", SimpleImputer(strategy="most_frequent")),
                        ("onehot", OneHotEncoder(handle_unknown="ignore", min_frequency=2)),
                    ]
                ),
                categorical,
            ),
        ],
        remainder="drop",
    )
    return Pipeline(
        [
            ("preprocess", preprocessing),
            (
                "model",
                LogisticRegression(
                    max_iter=1500,
                    class_weight="balanced",
                    random_state=random_state,
                ),
            ),
        ]
    )


def _metric_values(y_test: pd.Series, probability: np.ndarray) -> dict[str, float]:
    prediction = (probability >= 0.5).astype(int)
    values = {
        "accuracy": accuracy_score(y_test, prediction),
        "balanced_accuracy": balanced_accuracy_score(y_test, prediction),
        "precision": precision_score(y_test, prediction, zero_division=0),
        "recall": recall_score(y_test, prediction, zero_division=0),
        "f1": f1_score(y_test, prediction, zero_division=0),
        "roc_auc": roc_auc_score(y_test, probability),
        "pr_auc": average_precision_score(y_test, probability),
    }
    return {key: round(float(value), 6) for key, value in values.items()}


def evaluate(
    df: pd.DataFrame,
    config: DatasetConfig,
    strategy: str,
    excluded_columns: Iterable[str] = (),
) -> EvaluationResult:
    excluded = set(excluded_columns) | {config.target}
    feature_columns = [
        column
        for column in df.columns
        if column not in excluded and df[column].notna().any()
    ]
    if not feature_columns:
        raise ValueError("no model features remain after exclusions")
    x = df[feature_columns].copy()
    numeric_columns = x.select_dtypes(include=["number"]).columns
    for column in numeric_columns:
        if np.isinf(x[column].to_numpy(dtype=float, na_value=np.nan)).any():
            raise ValueError(
                f"numeric feature column '{column}' contains infinite values; replace them with "
                "missing or finite values"
            )
    train_idx, test_idx = split_indices(
        df, config, strategy, excluded_columns=excluded_columns
    )
    for column in x.select_dtypes(include=["datetime", "datetimetz"]).columns:
        x[column] = x[column].astype("string")
    y = (df[config.target] == config.positive_label).astype(int)
    x_train, x_test = x.iloc[train_idx], x.iloc[test_idx]
    y_train, y_test = y.iloc[train_idx], y.iloc[test_idx]
    if y_train.nunique() != 2 or y_test.nunique() != 2:
        raise ValueError("both train and test partitions must contain both target classes")
    model = _pipeline(x_train, config.random_state)
    model.fit(x_train, y_train)
    probability = model.predict_proba(x_test)[:, 1]
    return EvaluationResult(
        strategy=strategy,
        metrics=_metric_values(y_test, probability),
        train_rows=len(train_idx),
        test_rows=len(test_idx),
        train_positive_rate=round(float(y_train.mean()), 6),
        test_positive_rate=round(float(y_test.mean()), 6),
        excluded_columns=tuple(sorted(set(excluded_columns))),
    )


def evaluate_prevalence_baseline(
    df: pd.DataFrame,
    config: DatasetConfig,
    excluded_columns: Iterable[str] = (),
) -> EvaluationResult:
    """Return a non-memorizing reference when a duplicate-safe holdout is infeasible."""

    train_idx, test_idx = split_indices(df, config, "stratified_random")
    y = (df[config.target] == config.positive_label).astype(int)
    y_train, y_test = y.iloc[train_idx], y.iloc[test_idx]
    if y_train.nunique() != 2 or y_test.nunique() != 2:
        raise ValueError("both train and test partitions must contain both target classes")
    probability = np.full(len(test_idx), float(y_train.mean()))
    return EvaluationResult(
        strategy="prevalence_baseline",
        metrics=_metric_values(y_test, probability),
        train_rows=len(train_idx),
        test_rows=len(test_idx),
        train_positive_rate=round(float(y_train.mean()), 6),
        test_positive_rate=round(float(y_test.mean()), 6),
        excluded_columns=tuple(sorted(set(excluded_columns))),
    )


def recommended_strategy(config: DatasetConfig) -> str:
    if config.time_column and config.entity_column:
        return "grouped_chronological"
    if config.time_column:
        return "chronological"
    if config.entity_column:
        return "group_aware"
    return "stratified_random"
