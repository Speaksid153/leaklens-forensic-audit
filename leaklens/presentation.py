"""Pure presentation helpers shared by Streamlit and tests."""

from __future__ import annotations

from html import escape
from typing import Any

import plotly.graph_objects as go

SEVERITY_LABELS = {0: "Info", 1: "Low", 2: "Medium", 3: "High", 4: "Critical"}
SEVERITY_COLORS = {
    0: "#64748b",
    1: "#0ea5e9",
    2: "#f59e0b",
    3: "#f97316",
    4: "#ef4444",
}


def severity_value(value: Any) -> int:
    """Normalize IntEnum or serialized integer severities."""

    return int(value)


def format_metric(value: float) -> str:
    return f"{value:.3f}"


def reliability_color(score: int) -> str:
    if score >= 80:
        return "#10b981"
    if score >= 60:
        return "#f59e0b"
    return "#ef4444"


def reliability_gauge(score: int) -> go.Figure:
    color = reliability_color(score)
    figure = go.Figure(
        go.Indicator(
            mode="gauge+number",
            value=score,
            number={"suffix": "/100", "font": {"size": 42, "color": "#f8fafc"}},
            title={"text": "Evaluation reliability", "font": {"color": "#94a3b8"}},
            gauge={
                "axis": {"range": [0, 100], "tickcolor": "#64748b"},
                "bar": {"color": color, "thickness": 0.32},
                "bgcolor": "#1e293b",
                "borderwidth": 0,
                "steps": [
                    {"range": [0, 60], "color": "#3f1d2a"},
                    {"range": [60, 80], "color": "#3d3218"},
                    {"range": [80, 100], "color": "#123a32"},
                ],
            },
        )
    )
    figure.update_layout(
        height=280,
        margin={"l": 35, "r": 35, "t": 45, "b": 20},
        paper_bgcolor="rgba(0,0,0,0)",
        font={"family": "Inter, sans-serif", "color": "#cbd5e1"},
    )
    return figure


def metric_waterfall(result: dict[str, Any], metric: str = "roc_auc") -> go.Figure:
    stages = result["evaluation_stages"]
    values = [float(stage["metrics"][metric]) for stage in stages]
    labels = [stage["label"] for stage in stages]
    drops = [0.0] + [values[index] - values[index - 1] for index in range(1, len(values))]
    figure = go.Figure(
        go.Waterfall(
            orientation="v",
            measure=["absolute"] + ["relative"] * (len(values) - 1),
            x=labels,
            y=[values[0], *drops[1:]],
            text=[format_metric(value) for value in values],
            textposition="outside",
            connector={"line": {"color": "#475569", "dash": "dot"}},
            decreasing={"marker": {"color": "#ef4444"}},
            increasing={"marker": {"color": "#10b981"}},
            totals={"marker": {"color": "#38bdf8"}},
        )
    )
    figure.update_layout(
        title="Metric Inflation Waterfall",
        yaxis={"title": metric.replace("_", " ").upper(), "range": [0, 1.08]},
        height=430,
        margin={"l": 20, "r": 20, "t": 55, "b": 20},
        paper_bgcolor="rgba(0,0,0,0)",
        plot_bgcolor="rgba(15,23,42,0.55)",
        font={"family": "Inter, sans-serif", "color": "#cbd5e1"},
    )
    return figure


def metrics_comparison(result: dict[str, Any]) -> go.Figure:
    naive = result["naive_evaluation"]["metrics"]
    trusted = result["trustworthy_evaluation"]["metrics"]
    fallback = bool(result.get("trustworthy_note"))
    metrics = ["balanced_accuracy", "f1", "roc_auc", "pr_auc"]
    labels = [metric.replace("_", " ").title() for metric in metrics]
    figure = go.Figure(
        [
            go.Bar(
                name="Naive evaluation",
                x=labels,
                y=[naive[m] for m in metrics],
                marker_color="#38bdf8",
            ),
            go.Bar(
                name=(
                    "Conservative prevalence baseline"
                    if fallback
                    else "Trustworthy evaluation"
                ),
                x=labels,
                y=[trusted[m] for m in metrics],
                marker_color="#a78bfa",
            ),
        ]
    )
    figure.update_layout(
        barmode="group",
        title=(
            "Naive evaluation vs conservative baseline"
            if fallback
            else "Naive vs trustworthy evaluation"
        ),
        yaxis={"range": [0, 1.05], "title": "Score"},
        height=420,
        margin={"l": 20, "r": 20, "t": 55, "b": 20},
        paper_bgcolor="rgba(0,0,0,0)",
        plot_bgcolor="rgba(15,23,42,0.55)",
        font={"family": "Inter, sans-serif", "color": "#cbd5e1"},
        legend={"orientation": "h", "x": 0.2, "y": -0.18},
    )
    return figure


def finding_html(finding: dict[str, Any]) -> str:
    severity = severity_value(finding["severity"])
    color = SEVERITY_COLORS[severity]
    columns = ", ".join(map(str, finding.get("affected_columns", ()))) or "Dataset-level"
    return f"""
    <div class="finding-card" style="border-left-color:{color}">
      <div class="finding-meta">
        <span class="severity" style="color:{color}">{SEVERITY_LABELS[severity]}</span>
        <span class="detector">{escape(finding["detector"].replace("_", " ").title())}</span>
      </div>
      <h3>{escape(finding["title"])}</h3>
      <p>{escape(finding["explanation"])}</p>
      <p class="affected"><strong>Affected:</strong> {escape(columns)}</p>
    </div>
    """
