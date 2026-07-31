from leaklens.demo_data import (
    clean_control,
    loan_default_trap,
    maintenance_temporal_trap,
    readmission_entity_trap,
    synthetic_clean_example,
    synthetic_leaky_example,
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


def test_loan_generator_supports_non_multiple_of_three_row_counts() -> None:
    frame = loan_default_trap(n_rows=800)
    assert len(frame) == 800
    assert not frame["customer_id"].isna().any()


def test_synthetic_upload_examples_are_deterministic() -> None:
    assert synthetic_clean_example().equals(synthetic_clean_example())
    assert synthetic_leaky_example().equals(synthetic_leaky_example())
    assert synthetic_clean_example().shape == (400, 4)
    assert synthetic_leaky_example().shape == (620, 8)
