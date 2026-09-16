import pandas as pd

from leaklens.contracts import DatasetConfig
from leaklens.demo_data import loan_default_trap
from leaklens.orchestration import audit
from leaklens.provenance import AUDIT_SCHEMA_VERSION, dataframe_fingerprint
from leaklens.remediation import build_candidate_dataset


def test_audit_carries_reproducible_provenance() -> None:
    frame = loan_default_trap()
    config = DatasetConfig(
        target="defaulted",
        entity_column="customer_id",
        time_column="application_date",
    )

    result = audit(frame, config)
    provenance = result["provenance"]

    assert provenance["schema_version"] == AUDIT_SCHEMA_VERSION
    assert provenance["dataset_sha256"] == dataframe_fingerprint(frame)
    assert provenance["configuration"] == {
        "target": "defaulted",
        "entity_column": "customer_id",
        "time_column": "application_date",
        "positive_label": 1,
        "random_state": 42,
        "test_size": 0.25,
    }
    assert provenance["runtime"]["python"]
    assert provenance["runtime"]["pandas"] == pd.__version__
    assert provenance["runtime"]["scikit_learn"]


def test_candidate_dataset_applies_the_audits_exclusions_without_mutation() -> None:
    frame = loan_default_trap()
    config = DatasetConfig(
        target="defaulted",
        entity_column="customer_id",
        time_column="application_date",
    )
    result = audit(frame, config)
    original = frame.copy(deep=True)

    candidate = build_candidate_dataset(frame, result)
    excluded = set(result["trustworthy_evaluation"]["excluded_columns"])

    assert "defaulted" in candidate.columns
    assert excluded.isdisjoint(candidate.columns)
    assert list(candidate.columns) == [
        column for column in frame.columns if column not in excluded
    ]
    assert len(candidate) == len(frame)
    pd.testing.assert_frame_equal(frame, original)


def test_candidate_dataset_never_drops_the_target() -> None:
    frame = pd.DataFrame({"feature": [1, 2], "target": [0, 1]})
    result = {
        "dataset": {"target": "target"},
        "trustworthy_evaluation": {"excluded_columns": ["feature", "target"]},
    }

    candidate = build_candidate_dataset(frame, result)

    assert list(candidate.columns) == ["target"]
