import warnings

import numpy as np
import pandas as pd
import pytest

from leaklens.contracts import DatasetConfig
from leaklens.demo_data import clean_control, loan_default_trap
from leaklens.orchestration import audit, validate_dataset


def test_audit_exposes_metric_inflation_for_loan_trap() -> None:
    result = audit(
        loan_default_trap(),
        DatasetConfig(
            target="defaulted",
            entity_column="customer_id",
            time_column="application_date",
        ),
    )
    assert result["naive_evaluation"]["metrics"]["roc_auc"] > 0.95
    assert result["metric_inflation"]["roc_auc"] > 0.1
    assert result["reliability"]["score"] < 60
    assert [stage["label"] for stage in result["evaluation_stages"]] == [
        "Naive random split",
        "Leaky features removed",
        "Trustworthy split",
    ]
    assert result["evaluation_stages"][0]["metrics"]["roc_auc"] == 1.0
    assert result["evaluation_stages"][-1]["strategy"] == "grouped_chronological"


def test_clean_control_audits_without_critical_penalty() -> None:
    result = audit(clean_control(), DatasetConfig(target="target"))
    assert result["reliability"]["score"] >= 90
    assert result["trustworthy_evaluation"]["strategy"] == "stratified_random"


def test_missing_target_is_rejected_before_modeling() -> None:
    frame = clean_control()
    frame.loc[0, "target"] = None
    config = DatasetConfig(target="target")
    try:
        validate_dataset(frame, config)
    except ValueError as error:
        assert "target column contains missing values" in str(error)
    else:
        raise AssertionError("missing targets must not pass validation")


def test_unknown_positive_label_is_rejected() -> None:
    frame = clean_control()
    config = DatasetConfig(target="target", positive_label="unknown")
    try:
        validate_dataset(frame, config)
    except ValueError as error:
        assert "positive_label" in str(error)
    else:
        raise AssertionError("an absent positive label must not pass validation")


def test_invalid_timestamp_is_rejected_before_detection() -> None:
    frame = clean_control().rename(columns={"feature_a": "timestamp"})
    frame["timestamp"] = "not-a-date"
    config = DatasetConfig(target="target", time_column="timestamp")
    with warnings.catch_warnings():
        warnings.simplefilter("error", UserWarning)
        with pytest.raises(
            ValueError, match="time column contains missing or unparseable values"
        ):
            validate_dataset(frame, config)


def test_semantic_columns_must_be_distinct() -> None:
    frame = clean_control()
    config = DatasetConfig(target="target", entity_column="target")
    with pytest.raises(ValueError, match="must be different columns"):
        validate_dataset(frame, config)


def test_at_least_two_rows_are_required_for_each_class() -> None:
    frame = pd.DataFrame({"feature": range(100), "target": [0] * 99 + [1]})
    with pytest.raises(ValueError, match="at least two rows"):
        validate_dataset(frame, DatasetConfig(target="target"))


def test_rare_class_must_support_both_stratified_partitions() -> None:
    frame = pd.DataFrame({"feature": range(100), "target": [1, 1] + [0] * 98})
    with pytest.raises(ValueError, match="both classes"):
        validate_dataset(frame, DatasetConfig(target="target"))


def test_dataset_requires_a_usable_feature() -> None:
    frame = pd.DataFrame({"empty": [np.nan] * 100, "target": [0, 1] * 50})
    with pytest.raises(ValueError, match="non-empty model feature"):
        validate_dataset(frame, DatasetConfig(target="target"))


def test_entity_and_time_columns_do_not_count_as_model_features() -> None:
    frame = pd.DataFrame(
        {
            "entity": [f"entity-{index}" for index in range(100)],
            "target": [0, 1] * 50,
        }
    )
    config = DatasetConfig(target="target", entity_column="entity")
    with pytest.raises(ValueError, match="non-empty model feature"):
        validate_dataset(frame, config)


def test_audit_reports_when_every_feature_is_excluded_as_leakage() -> None:
    frame = pd.DataFrame({"leak": [0, 1] * 50, "target": [0, 1] * 50})
    with pytest.raises(ValueError, match="no trustworthy model features remain"):
        audit(frame, DatasetConfig(target="target"))


def test_infinite_numeric_features_are_rejected_actionably() -> None:
    frame = clean_control()
    frame.loc[0, "feature_a"] = np.inf
    with pytest.raises(ValueError, match="contains infinite values"):
        validate_dataset(frame, DatasetConfig(target="target"))


def test_duplicate_contamination_uses_group_disjoint_trustworthy_split() -> None:
    rng = np.random.default_rng(123)
    base_rows = 200
    target = rng.binomial(1, 0.5, base_rows)
    frame = pd.DataFrame(
        {
            "memorization_key": np.repeat(
                [f"pattern-{index}" for index in range(base_rows)], 2
            ),
            "measurement": np.repeat(rng.normal(size=base_rows), 2),
            "target": np.repeat(target, 2),
        }
    )
    result = audit(frame, DatasetConfig(target="target"))
    assert result["trustworthy_evaluation"]["strategy"] == "duplicate_aware"
    assert result["naive_evaluation"]["metrics"]["roc_auc"] > result[
        "trustworthy_evaluation"
    ]["metrics"]["roc_auc"]


def test_infeasible_duplicate_holdout_returns_conservative_baseline() -> None:
    frame = pd.DataFrame({"feature": ["same"] * 100, "target": [0, 1] * 50})
    result = audit(frame, DatasetConfig(target="target"))

    assert result["trustworthy_evaluation"]["strategy"] == "prevalence_baseline"
    assert result["trustworthy_evaluation"]["metrics"]["roc_auc"] == 0.5
    assert result["reliability"]["score"] < 60
    assert result["metric_inflation_valid"] is False
    assert result["trustworthy_note"]
    assert any(
        finding["title"] == "A duplicate-safe holdout cannot be formed"
        for finding in result["findings"]
    )


def test_identifiers_do_not_mask_corrected_space_duplicates() -> None:
    rng = np.random.default_rng(321)
    patterns = 100
    labels = rng.binomial(1, 0.5, patterns)
    frame = pd.DataFrame(
        {
            "record_id": [f"record-{index:03d}" for index in range(patterns * 2)],
            "measurement": np.repeat(rng.normal(size=patterns), 2),
            "target": np.repeat(labels, 2),
        }
    )
    result = audit(frame, DatasetConfig(target="target"))

    assert result["trustworthy_evaluation"]["strategy"] == "duplicate_aware"
    assert any(
        finding["title"]
        == "Rows become duplicates after leakage-risk columns are removed"
        for finding in result["findings"]
    )
