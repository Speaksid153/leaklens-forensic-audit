from streamlit.testing.v1 import AppTest


def test_guided_loan_audit_renders_complete_results() -> None:
    app = AppTest.from_file("app.py").run(timeout=30)
    assert not app.exception
    app.button[0].click().run(timeout=30)
    assert not app.exception
    assert [(metric.label, metric.value) for metric in app.metric] == [
        ("Reliability", "12/100"),
        ("Naive ROC-AUC", "1.000"),
        ("Trustworthy ROC-AUC", "0.678"),
        ("Exposed inflation", "0.322"),
    ]
    assert [tab.label for tab in app.tabs] == [
        "Overview",
        "Evidence (4)",
        "Evaluation",
        "Data & export",
    ]


def test_clean_control_has_no_findings_or_metric_inflation() -> None:
    app = AppTest.from_file("app.py").run(timeout=30)
    app.selectbox[0].select("Clean control").run(timeout=30)
    app.button[0].click().run(timeout=30)
    assert not app.exception
    metrics = {metric.label: metric.value for metric in app.metric}
    assert metrics["Reliability"] == "100/100"
    assert metrics["Exposed inflation"] == "0.000"
    assert app.tabs[1].label == "Evidence (0)"

