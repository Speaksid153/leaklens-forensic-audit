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


def test_evaluation_is_reproducible() -> None:
    frame = clean_control()
    config = DatasetConfig(target="target")
    first = evaluate(frame, config, "stratified_random")
    second = evaluate(frame, config, "stratified_random")
    assert first == second
    assert 0 <= first.metrics["roc_auc"] <= 1
