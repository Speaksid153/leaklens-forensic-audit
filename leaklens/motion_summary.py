"""Streamlit v2 bridge for the prebuilt Motion audit summary."""

from __future__ import annotations

from pathlib import Path
from typing import Any

import streamlit as st

_DIST = Path(__file__).with_name("motion_dist")
_JS = "/* LeakLens inline bundle */\n" + (_DIST / "leaklens-motion.js").read_text(encoding="utf-8")
_CSS = "/* LeakLens inline styles */\n" + (_DIST / "leaklens-motion.css").read_text(
    encoding="utf-8"
)


def build_motion_summary_data(result: dict[str, Any]) -> dict[str, Any]:
    """Build display-safe copy and metrics for the Motion verdict component."""

    stages = [
        {"label": stage["label"], "value": float(stage["metrics"]["roc_auc"])}
        for stage in result["evaluation_stages"]
    ]
    fallback = bool(result.get("trustworthy_note"))
    raw_gap = float(result["metric_inflation"]["roc_auc"])
    # The UI renders AUC values to three decimals. Normalize sub-display precision so
    # a harmless numerical delta never becomes the misleading value "-0.000".
    display_gap = 0.0 if abs(raw_gap) < 0.0005 else raw_gap
    finding_count = len(result["findings"])

    if fallback:
        verdict_copy = (
            "No duplicate-safe model holdout can be formed. Treat the comparison as a "
            "conservative reference."
        )
        gap_label = "Naive-to-baseline gap"
        gap_note = "Not a trustworthy inflation estimate"
    elif display_gap > 0:
        verdict_copy = "The headline score decreased after integrity controls."
        gap_label = "Exposed AUC gap"
        gap_note = "Performance that did not survive"
    elif display_gap < 0:
        verdict_copy = (
            "Trusted evaluation performed better; review any detected risks separately."
        )
        gap_label = "AUC change after controls"
        gap_note = "Trusted evaluation performed better"
    elif finding_count:
        verdict_copy = (
            "Headline performance remained stable; review the detected integrity risks."
        )
        gap_label = "AUC change after controls"
        gap_note = "No material performance loss"
    else:
        verdict_copy = "The configured evaluation survived LeakLens's integrity checks."
        gap_label = "AUC change after controls"
        gap_note = "No material performance loss"

    return {
        "reliability": int(result["reliability"]["score"]),
        "naiveAuc": float(result["naive_evaluation"]["metrics"]["roc_auc"]),
        "comparisonAuc": float(
            result["trustworthy_evaluation"]["metrics"]["roc_auc"]
        ),
        "comparisonGap": display_gap,
        "stages": stages,
        "findingCount": finding_count,
        "fallback": fallback,
        "verdictCopy": verdict_copy,
        "gapLabel": gap_label,
        "gapNote": gap_note,
    }


def render_motion_summary(result: dict[str, Any]) -> None:
    """Render the animated audit verdict; all authoritative logic remains in Python."""

    summary_component = st.components.v2.component(
        "leaklens.motion_summary",
        js=_JS,
        css=_CSS,
        isolate_styles=True,
    )
    summary_component(
        key="audit-motion-summary",
        data=build_motion_summary_data(result),
        height="content",
    )
