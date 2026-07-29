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

def render_motion_summary(result: dict[str, Any]) -> None:
    """Render the animated audit verdict; all authoritative logic remains in Python."""

    summary_component = st.components.v2.component(
        "leaklens.motion_summary",
        js=_JS,
        css=_CSS,
        isolate_styles=True,
    )
    stages = [
        {"label": stage["label"], "value": float(stage["metrics"]["roc_auc"])}
        for stage in result["evaluation_stages"]
    ]
    summary_component(
        key="audit-motion-summary",
        data={
            "reliability": int(result["reliability"]["score"]),
            "naiveAuc": float(result["naive_evaluation"]["metrics"]["roc_auc"]),
            "trustedAuc": float(result["trustworthy_evaluation"]["metrics"]["roc_auc"]),
            "inflation": float(result["metric_inflation"]["roc_auc"]),
            "stages": stages,
            "findingCount": len(result["findings"]),
        },
        height="content",
    )
