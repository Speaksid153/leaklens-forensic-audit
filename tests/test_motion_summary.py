from leaklens.motion_summary import build_motion_summary_data


def result_with_gap(gap: float, *, findings: int = 1, fallback: bool = False) -> dict:
    return {
        "reliability": {"score": 75},
        "naive_evaluation": {"metrics": {"roc_auc": 0.889}},
        "trustworthy_evaluation": {"metrics": {"roc_auc": 0.889 - gap}},
        "metric_inflation": {"roc_auc": gap},
        "evaluation_stages": [
            {"label": "Naive random split", "metrics": {"roc_auc": 0.889}},
            {"label": "Trustworthy split", "metrics": {"roc_auc": 0.889 - gap}},
        ],
        "findings": [{} for _ in range(findings)],
        "trustworthy_note": "Duplicate-safe holdout unavailable" if fallback else None,
    }


def test_sub_display_delta_is_not_rendered_as_negative_zero() -> None:
    data = build_motion_summary_data(result_with_gap(-0.000254))

    assert data["comparisonGap"] == 0
    assert data["gapLabel"] == "AUC change after controls"
    assert data["gapNote"] == "No material performance loss"
    assert data["verdictCopy"] == (
        "Headline performance remained stable; review the detected integrity risks."
    )


def test_positive_gap_describes_performance_loss() -> None:
    data = build_motion_summary_data(result_with_gap(0.112))

    assert data["comparisonGap"] == 0.112
    assert data["gapLabel"] == "Exposed AUC gap"
    assert data["gapNote"] == "Performance that did not survive"
    assert data["verdictCopy"] == (
        "The headline score decreased after integrity controls."
    )


def test_improved_trusted_evaluation_uses_non_alarmist_copy() -> None:
    data = build_motion_summary_data(result_with_gap(-0.01))

    assert data["comparisonGap"] == -0.01
    assert data["gapLabel"] == "AUC change after controls"
    assert data["gapNote"] == "Trusted evaluation performed better"
    assert data["verdictCopy"] == (
        "Trusted evaluation performed better; review any detected risks separately."
    )


def test_fallback_keeps_conservative_baseline_warning() -> None:
    data = build_motion_summary_data(result_with_gap(0.2, fallback=True))

    assert data["gapLabel"] == "Naive-to-baseline gap"
    assert data["gapNote"] == "Not a trustworthy inflation estimate"
    assert "conservative reference" in data["verdictCopy"]
