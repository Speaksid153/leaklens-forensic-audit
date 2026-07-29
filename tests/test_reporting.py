import pandas as pd

from leaklens.contracts import DatasetConfig
from leaklens.demo_data import clean_control
from leaklens.orchestration import audit
from leaklens.reporting import build_html_report, dataframe_fingerprint


def test_dataframe_fingerprint_is_stable_and_content_sensitive() -> None:
    frame = pd.DataFrame({"a": [1, 2], "b": ["x", "y"]})
    assert dataframe_fingerprint(frame) == dataframe_fingerprint(frame.copy())
    changed = frame.copy()
    changed.loc[1, "a"] = 3
    assert dataframe_fingerprint(frame) != dataframe_fingerprint(changed)


def test_report_is_self_contained_and_escapes_source_name() -> None:
    frame = clean_control()
    config = DatasetConfig(target="target")
    report = build_html_report(audit(frame, config), frame, config, "<script>alert(1)</script>")
    assert "<!doctype html>" in report
    assert "Dataset SHA-256" in report
    assert "https://" not in report
    assert "<script>alert(1)</script>" not in report
    assert "&lt;script&gt;alert(1)&lt;/script&gt;" in report
