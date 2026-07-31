import numpy as np
import pandas as pd
import pytest

from leaklens.contracts import DatasetConfig
from leaklens.demo_data import clean_control, loan_default_trap, readmission_entity_trap
from leaklens.evaluation import evaluate, split_indices


def test_group_split_has_no_entity_overlap() -> None:
    frame = readmission_entity_trap()
    config = DatasetConfig(target="readmitted", entity_column="patient_id")
    train_idx, test_idx = split_indices(frame, config, "group_aware")
    train_entities = set(frame.iloc[train_idx]["patient_id"])
    test_entities = set(frame.iloc[test_idx]["patient_id"])
    assert train_entities.isdisjoint(test_entities)


def test_chronological_split_keeps_future_in_test() -> None:
    frame = loan_default_trap()
    config = DatasetConfig(target="defaulted", time_column="application_date")
    train_idx, test_idx = split_indices(frame, config, "chronological")
    train_latest = frame.iloc[train_idx]["application_date"].max()
    test_earliest = frame.iloc[test_idx]["application_date"].min()
    assert train_latest < test_earliest


def test_grouped_chronological_split_is_entity_disjoint_and_forward_only() -> None:
    frame = loan_default_trap()
    config = DatasetConfig(
        target="defaulted",
        entity_column="customer_id",
        time_column="application_date",
    )
    train_idx, test_idx = split_indices(frame, config, "grouped_chronological")
    train = frame.iloc[train_idx]
    test = frame.iloc[test_idx]
    assert set(train["customer_id"]).isdisjoint(set(test["customer_id"]))
    assert train["application_date"].max() < test["application_date"].min()


def test_grouped_chronological_split_rejects_overlapping_entity_histories() -> None:
    frame = pd.DataFrame(
        {
            "entity": ["a", "b"] * 50,
            "timestamp": pd.date_range("2025-01-01", periods=100, freq="D"),
            "target": [0, 1] * 50,
        }
    )
    config = DatasetConfig(target="target", entity_column="entity", time_column="timestamp")
    with pytest.raises(ValueError, match="entity time ranges overlap"):
        split_indices(frame, config, "grouped_chronological")


def test_evaluation_is_reproducible() -> None:
    frame = clean_control()
    config = DatasetConfig(target="target")
    first = evaluate(frame, config, "stratified_random")
    second = evaluate(frame, config, "stratified_random")
    assert first == second
    assert 0 <= first.metrics["roc_auc"] <= 1


def test_group_split_searches_for_class_valid_partitions() -> None:
    rows = []
    for group in range(20):
        target = int(group < 2)
        rows.extend(
            {"entity": f"entity-{group}", "feature": row, "target": target}
            for row in range(10)
        )
    frame = pd.DataFrame(rows)
    config = DatasetConfig(target="target", entity_column="entity")
    train_idx, test_idx = split_indices(frame, config, "group_aware")
    assert frame.iloc[train_idx]["target"].nunique() == 2
    assert frame.iloc[test_idx]["target"].nunique() == 2
    assert set(frame.iloc[train_idx]["entity"]).isdisjoint(
        frame.iloc[test_idx]["entity"]
    )


def test_group_split_reports_when_class_valid_partition_is_infeasible() -> None:
    rows = []
    for group in range(20):
        target = int(group == 0)
        rows.extend(
            {"entity": f"entity-{group}", "feature": row, "target": target}
            for row in range(10)
        )
    frame = pd.DataFrame(rows)
    config = DatasetConfig(target="target", entity_column="entity")
    with pytest.raises(ValueError, match="at least two distinct groups"):
        split_indices(frame, config, "group_aware")


def test_evaluation_ignores_all_missing_features_when_usable_features_remain() -> None:
    frame = clean_control()
    frame["empty"] = np.nan
    result = evaluate(frame, DatasetConfig(target="target"), "stratified_random")
    assert 0 <= result.metrics["roc_auc"] <= 1
