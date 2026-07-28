from leaklens.contracts import AuditSeverity, DatasetConfig
from leaklens.demo_data import clean_control, loan_default_trap, readmission_entity_trap
from leaklens.orchestration import run_detectors


def test_loan_trap_finds_post_outcome_feature_and_identifier() -> None:
    findings = run_detectors(
        loan_default_trap(),
        DatasetConfig(
            target="defaulted",
            entity_column="customer_id",
            time_column="application_date",
        ),
    )
    by_detector = {finding.detector for finding in findings}
    suspicious_columns = {
        column
        for finding in findings
        if finding.detector == "suspicious_feature"
        for column in finding.affected_columns
    }
    assert "entity_overlap" in by_detector
    assert "identifier_memorization" in by_detector
    assert "temporal_mismatch" in by_detector
    assert "collection_status" in suspicious_columns
    assert "application_id" not in suspicious_columns


def test_readmission_trap_finds_entity_overlap() -> None:
    findings = run_detectors(
        readmission_entity_trap(),
        DatasetConfig(target="readmitted", entity_column="patient_id"),
    )
    overlap = [finding for finding in findings if finding.detector == "entity_overlap"]
    assert overlap
    assert overlap[0].severity == AuditSeverity.CRITICAL
    assert overlap[0].evidence["test_entity_overlap_fraction"] > 0.5


def test_clean_control_has_no_high_or_critical_findings() -> None:
    findings = run_detectors(clean_control(), DatasetConfig(target="target"))
    assert all(finding.severity < AuditSeverity.HIGH for finding in findings)
