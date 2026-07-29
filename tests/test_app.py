import pytest
from streamlit.testing.v1 import AppTest


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
            ("70/100", "0.864", "0.506", "0.358"),
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
