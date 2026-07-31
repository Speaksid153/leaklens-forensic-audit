from pathlib import Path

import pandas as pd
import pytest
from streamlit.testing.v1 import AppTest

from leaklens.contracts import DatasetConfig
from leaklens.orchestration import audit


@pytest.mark.parametrize(
    ("demo", "expected_metrics", "evidence_count"),
    [
        (
            "Loan default trap",
            ("12/100", "1.000", "0.678", "0.322"),
            4,
        ),
        (
            "Hospital readmission trap",
            ("70/100", "0.864", "0.527", "0.337"),
            1,
        ),
        (
            "Predictive maintenance trap",
            ("12/100", "1.000", "0.659", "0.341"),
            4,
        ),
        (
            "Clean control",
            ("100/100", "0.748", "0.748", "0.000"),
            0,
        ),
    ],
)
def test_every_guided_audit_renders_complete_results(
    demo: str, expected_metrics: tuple[str, str, str, str], evidence_count: int
) -> None:
    app = AppTest.from_file("app.py").run(timeout=30)
    assert not app.exception
    app.selectbox[0].select(demo).run(timeout=30)
    app.button[0].click().run(timeout=30)
    assert not app.exception
    result = app.session_state["audit_result"]
    rendered_metrics = (
        f"{result['reliability']['score']}/100",
        f"{result['naive_evaluation']['metrics']['roc_auc']:.3f}",
        f"{result['trustworthy_evaluation']['metrics']['roc_auc']:.3f}",
        f"{result['metric_inflation']['roc_auc']:.3f}",
    )
    assert rendered_metrics == expected_metrics
    assert [tab.label for tab in app.tabs] == [
        "Overview",
        f"Evidence ({evidence_count})",
        "Evaluation",
        "Data & export",
    ]


@pytest.mark.parametrize(
    ("fixture_name", "expected_min_findings"),
    [
        ("leaklens_clean_example.csv", 0),
        ("leaklens_leaky_example.csv", 4),
    ],
)
def test_synthetic_csv_uploads_render_results(
    fixture_name: str, expected_min_findings: int
) -> None:
    fixture = Path("demo_data") / fixture_name
    frame = pd.read_csv(fixture)
    expected_config = DatasetConfig(
        target="target" if fixture_name == "leaklens_clean_example.csv" else "defaulted",
        entity_column=None
        if fixture_name == "leaklens_clean_example.csv"
        else "customer_id",
        time_column=None
        if fixture_name == "leaklens_clean_example.csv"
        else "application_date",
        positive_label=1,
    )
    expected_result = audit(frame, expected_config)
    app = AppTest.from_file("app.py").run(timeout=30)
    app.radio[0].set_value("Upload CSV").run(timeout=30)
    app.file_uploader[0].set_value(
        (fixture.name, fixture.read_bytes(), "text/csv")
    ).run(timeout=30)

    assert app.selectbox[-1].label == "Positive class"
    assert app.selectbox[-1].value == 1
    if fixture_name == "leaklens_leaky_example.csv":
        app.selectbox[1].select("customer_id")
        app.selectbox[2].select("application_date")
        app.run(timeout=30)
    app.button[0].click().run(timeout=30)

    assert not app.exception
    assert not app.error
    result = app.session_state["audit_result"]
    assert result["reliability"]["score"] == expected_result["reliability"]["score"]
    assert len(result["findings"]) >= expected_min_findings
    assert [tab.label for tab in app.tabs][-1] == "Data & export"


def test_replacing_same_named_upload_clears_stale_audit() -> None:
    clean = pd.read_csv(Path("demo_data") / "leaklens_clean_example.csv")
    leaky = clean.copy()
    leaky["feature_a"] = leaky["target"]
    expected_leaky_score = audit(
        leaky,
        DatasetConfig(target="target", positive_label=1),
    )["reliability"]["score"]
    assert expected_leaky_score < 100

    app = AppTest.from_file("app.py").run(timeout=30)
    app.radio[0].set_value("Upload CSV").run(timeout=30)
    app.file_uploader[0].set_value(
        ("same-name.csv", clean.to_csv(index=False).encode(), "text/csv")
    ).run(timeout=30)
    app.button[0].click().run(timeout=30)
    assert app.session_state["audit_result"]["reliability"]["score"] == 100

    app.file_uploader[0].set_value(
        ("same-name.csv", leaky.to_csv(index=False).encode(), "text/csv")
    ).run(timeout=30)

    assert "audit_result" not in app.session_state.filtered_state
    assert not app.tabs
    app.button[0].click().run(timeout=30)
    assert app.session_state["audit_result"]["reliability"]["score"] == expected_leaky_score


def test_positive_class_prefers_an_intuitive_string_label() -> None:
    frame = pd.DataFrame(
        {
            "feature": range(100),
            "target": ["no", "yes"] * 50,
        }
    )
    app = AppTest.from_file("app.py").run(timeout=30)
    app.radio[0].set_value("Upload CSV").run(timeout=30)
    app.file_uploader[0].set_value(
        ("string-labels.csv", frame.to_csv(index=False).encode(), "text/csv")
    ).run(timeout=30)

    assert app.selectbox[-1].label == "Positive class"
    assert app.selectbox[-1].value == "yes"


def test_infeasible_duplicate_upload_renders_conservative_baseline() -> None:
    frame = pd.DataFrame({"feature": ["same"] * 100, "target": [0, 1] * 50})
    app = AppTest.from_file("app.py").run(timeout=30)
    app.radio[0].set_value("Upload CSV").run(timeout=30)
    app.file_uploader[0].set_value(
        ("conflicting-duplicates.csv", frame.to_csv(index=False).encode(), "text/csv")
    ).run(timeout=30)
    app.button[0].click().run(timeout=30)

    assert not app.exception
    assert app.session_state["audit_result"]["trustworthy_evaluation"]["strategy"] == (
        "prevalence_baseline"
    )
    assert any("duplicate-safe holdout" in warning.value for warning in app.warning)
