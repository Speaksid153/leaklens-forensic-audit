from leaklens.contracts import DatasetConfig
from leaklens.demo_data import clean_control, loan_default_trap
from leaklens.orchestration import audit


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


def test_clean_control_audits_without_critical_penalty() -> None:
    result = audit(clean_control(), DatasetConfig(target="target"))
    assert result["reliability"]["score"] >= 90
    assert result["trustworthy_evaluation"]["strategy"] == "stratified_random"

