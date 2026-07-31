from pathlib import Path

from leaklens.contracts import DatasetConfig
from leaklens.demo_data import synthetic_clean_example, synthetic_leaky_example
from leaklens.orchestration import audit


def test_clean_upload_example_is_a_known_negative_control() -> None:
    result = audit(
        synthetic_clean_example(),
        DatasetConfig(target="target", positive_label=1),
    )

    assert result["dataset"]["rows"] == 400
    assert result["findings"] == []
    assert result["reliability"]["score"] == 100
    assert result["naive_evaluation"]["metrics"]["roc_auc"] == 0.735577
    assert result["metric_inflation"]["roc_auc"] == 0


def test_leaky_upload_example_triggers_every_detector() -> None:
    result = audit(
        synthetic_leaky_example(),
        DatasetConfig(
            target="defaulted",
            entity_column="customer_id",
            time_column="application_date",
            positive_label=1,
        ),
    )

    assert result["dataset"]["rows"] == 620
    assert {finding["detector"] for finding in result["findings"]} == {
        "duplicate_contamination",
        "entity_overlap",
        "identifier_memorization",
        "suspicious_feature",
        "temporal_mismatch",
    }
    assert result["reliability"]["score"] == 1
    assert result["naive_evaluation"]["metrics"]["roc_auc"] == 1
    assert result["trustworthy_evaluation"]["metrics"]["roc_auc"] == 0.61102


def test_checked_in_csv_fixtures_match_their_generators() -> None:
    fixtures = {
        "leaklens_clean_example.csv": synthetic_clean_example(),
        "leaklens_leaky_example.csv": synthetic_leaky_example(),
    }
    for filename, frame in fixtures.items():
        expected = frame.to_csv(index=False).encode()
        assert (Path("demo_data") / filename).read_bytes() == expected
