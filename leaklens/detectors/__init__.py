"""Forensic detector registry."""

from leaklens.detectors.duplicates import detect_duplicates
from leaklens.detectors.entity_overlap import detect_entity_overlap
from leaklens.detectors.identifiers import detect_identifiers
from leaklens.detectors.suspicious_features import detect_suspicious_features
from leaklens.detectors.temporal import detect_temporal_mismatch

DETECTORS = (
    detect_duplicates,
    detect_entity_overlap,
    detect_identifiers,
    detect_suspicious_features,
    detect_temporal_mismatch,
)

__all__ = ["DETECTORS"]

