from leaklens.contracts import DatasetConfig
from leaklens.demo_data import loan_default_trap
from leaklens.orchestration import audit
from leaklens.presentation import finding_html, metric_waterfall, reliability_color


def loan_result() -> dict:
    return audit(
        loan_default_trap(),
        DatasetConfig(
            target="defaulted",
            entity_column="customer_id",
            time_column="application_date",
        ),
    )


def test_metric_waterfall_uses_all_evaluation_stages() -> None:
    result = loan_result()
    figure = metric_waterfall(result)
    assert list(figure.data[0].x) == [
        "Naive random split",
        "Leaky features removed",
        "Trustworthy split",
    ]
    assert figure.layout.yaxis.range == (0, 1.08)


def test_finding_html_escapes_untrusted_dataset_content() -> None:
    finding = loan_result()["findings"][0].copy()
    finding["title"] = "<script>alert('x')</script>"
    rendered = finding_html(finding)
    assert "<script>" not in rendered
    assert "&lt;script&gt;" in rendered


def test_reliability_colors_have_clear_thresholds() -> None:
    assert reliability_color(90) == "#10b981"
    assert reliability_color(70) == "#f59e0b"
    assert reliability_color(30) == "#ef4444"

