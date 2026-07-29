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
    with pytest.raises(ValueError, match="time column contains missing or unparseable values"):
        validate_dataset(frame, config)
