from leaklens.demo_data import (
    clean_control,
    loan_default_trap,
    maintenance_temporal_trap,
    readmission_entity_trap,
)


def test_demo_data_is_deterministic() -> None:
    assert loan_default_trap().equals(loan_default_trap())
    assert readmission_entity_trap().equals(readmission_entity_trap())
    assert maintenance_temporal_trap().equals(maintenance_temporal_trap())
    assert clean_control().equals(clean_control())


def test_all_demo_targets_have_two_classes() -> None:
    cases = [
        (loan_default_trap(), "defaulted"),
        (readmission_entity_trap(), "readmitted"),
        (maintenance_temporal_trap(), "failure_next_24h"),
        (clean_control(), "target"),
    ]
    for frame, target in cases:
        assert frame[target].nunique() == 2

