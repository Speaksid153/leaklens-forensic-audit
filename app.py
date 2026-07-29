"""LeakLens Streamlit application."""
# ruff: noqa: E501

from __future__ import annotations

import json
from typing import Any

import pandas as pd
import streamlit as st

from leaklens.contracts import DatasetConfig
from leaklens.demo_data import DEMO_FACTORIES
from leaklens.motion_summary import render_motion_summary
from leaklens.orchestration import audit
from leaklens.presentation import (
    SEVERITY_LABELS,
    finding_html,
    format_metric,
    metric_waterfall,
    metrics_comparison,
    reliability_gauge,
    severity_value,
)
from leaklens.reporting import build_html_report

st.set_page_config(page_title="LeakLens", page_icon="🔍", layout="wide")

STYLES = """
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
.stApp { background: radial-gradient(circle at 70% 0%, #172554 0, #0b1120 32%, #070b14 78%); }
html, body, [class*="css"] { font-family: Inter, sans-serif; }
.block-container { max-width: 1240px; padding-top: 2rem; }
.eyebrow { color:#38bdf8; font-size:.78rem; font-weight:700; letter-spacing:.16em; text-transform:uppercase; }
.hero-title { color:#f8fafc; font-size:clamp(2.4rem,6vw,4.8rem); line-height:.95; letter-spacing:-.055em; margin:.35rem 0 1rem; }
.hero-copy { color:#94a3b8; max-width:720px; font-size:1.08rem; line-height:1.7; }
.finding-card { background:rgba(15,23,42,.75); border:1px solid rgba(148,163,184,.15); border-left:4px solid; border-radius:12px; padding:1.1rem 1.25rem; margin:.65rem 0; }
.finding-card h3 { color:#f8fafc; margin:.25rem 0 .55rem; font-size:1.05rem; }
.finding-card p { color:#aebbd0; margin:.25rem 0; line-height:1.55; }
.finding-meta { display:flex; gap:.8rem; align-items:center; font-size:.72rem; letter-spacing:.09em; text-transform:uppercase; font-weight:700; }
.detector { color:#64748b; }.affected { font-size:.84rem; }.severity { font-weight:800; }
.evidence-box { background:rgba(15,23,42,.65); border:1px solid rgba(148,163,184,.14); border-radius:12px; padding:1rem 1.15rem; }
[data-testid="stMetric"] { background:rgba(15,23,42,.66); border:1px solid rgba(148,163,184,.14); padding:1rem; border-radius:12px; }
[data-testid="stSidebar"] { background:#080d19; border-right:1px solid rgba(148,163,184,.12); }
[data-testid="stFileUploader"] { border-radius:12px; }
.stButton > button { border-radius:10px; font-weight:700; }
</style>
"""
st.markdown(STYLES, unsafe_allow_html=True)

DEMO_CONFIGS: dict[str, dict[str, Any]] = {
    "Loan default trap": {
        "factory": "loan_default",
        "target": "defaulted",
        "entity": "customer_id",
        "time": "application_date",
    },
    "Hospital readmission trap": {
        "factory": "readmission",
        "target": "readmitted",
        "entity": "patient_id",
        "time": None,
    },
    "Predictive maintenance trap": {
        "factory": "predictive_maintenance",
        "target": "failure_next_24h",
        "entity": "machine_id",
        "time": "timestamp",
    },
    "Clean control": {"factory": "clean_control", "target": "target", "entity": None, "time": None},
}


@st.cache_data(show_spinner=False)
def demo_frame(factory_name: str) -> pd.DataFrame:
    return DEMO_FACTORIES[factory_name]()


def load_source() -> tuple[pd.DataFrame, dict[str, Any], str]:
    source = st.sidebar.radio("Data source", ["Guided demo", "Upload CSV"])
    if source == "Guided demo":
        label = st.sidebar.selectbox("Demonstration", list(DEMO_CONFIGS))
        demo = DEMO_CONFIGS[label]
        return demo_frame(demo["factory"]), demo, label
    upload = st.sidebar.file_uploader(
        "Upload a CSV", type=["csv"], help="Maximum 20 MB recommended"
    )
    if upload is None:
        st.info("Upload a CSV from the sidebar or switch to a guided demonstration.")
        st.stop()
    if upload.size > 20 * 1024 * 1024:
        st.error("The uploaded file exceeds the 20 MB Day 2 safety limit.")
        st.stop()
    try:
        frame = pd.read_csv(upload)
    except Exception as error:
        st.error(f"The CSV could not be read: {error}")
        st.stop()
    return frame, {}, upload.name


def optional_column(label: str, columns: list[str], default: str | None) -> str | None:
    options = ["— None —", *columns]
    index = options.index(default) if default in options else 0
    selected = st.sidebar.selectbox(label, options, index=index)
    return None if selected == "— None —" else selected


def render_header() -> None:
    st.markdown('<div class="eyebrow">ML evaluation forensics</div>', unsafe_allow_html=True)
    st.markdown(
        '<h1 class="hero-title">Stop trusting<br>the headline score.</h1>', unsafe_allow_html=True
    )
    st.markdown(
        '<p class="hero-copy">LeakLens exposes target leakage, entity contamination, identifier '
        "memorization, and temporal mistakes—then reruns the experiment under a defensible split.</p>",
        unsafe_allow_html=True,
    )


def render_results(
    result: dict[str, Any], frame: pd.DataFrame, source_name: str, config: DatasetConfig
) -> None:
    reliability = result["reliability"]["score"]
    naive_auc = result["naive_evaluation"]["metrics"]["roc_auc"]
    trusted_auc = result["trustworthy_evaluation"]["metrics"]["roc_auc"]
    inflation = result["metric_inflation"]["roc_auc"]
    st.caption(f"Audit source: {source_name} · {len(frame):,} rows · {len(frame.columns)} columns")
    render_motion_summary(result)
    top_metrics = st.columns(2)
    bottom_metrics = st.columns(2)
    top_metrics[0].metric("Reliability", f"{reliability}/100")
    top_metrics[1].metric("Naive ROC-AUC", format_metric(naive_auc))
    bottom_metrics[0].metric("Trustworthy ROC-AUC", format_metric(trusted_auc))
    bottom_metrics[1].metric(
        "Exposed inflation",
        format_metric(inflation),
        delta=f"-{inflation:.3f}",
        delta_color="inverse",
    )

    overview, evidence, evaluation, data = st.tabs(
        ["Overview", f"Evidence ({len(result['findings'])})", "Evaluation", "Data & export"]
    )
    with overview:
        left, right = st.columns([0.9, 1.6])
        with left:
            st.plotly_chart(
                reliability_gauge(reliability),
                width="stretch",
                config={"displayModeBar": False},
            )
            st.subheader("Why the score changed")
            if result["reliability"]["deductions"]:
                for detector, deduction in result["reliability"]["deductions"].items():
                    st.write(f"−{deduction} · {detector.replace('_', ' ').title()}")
            else:
                st.success("No reliability deductions were triggered.")
        with right:
            st.plotly_chart(
                metric_waterfall(result),
                width="stretch",
                config={"displayModeBar": False},
            )
        st.caption(
            "The reliability score audits the naive evaluation configuration. It is a transparent "
            "diagnostic, not a certification of model safety or fairness."
        )

    with evidence:
        if not result["findings"]:
            st.success("No configured detector found a high-confidence evaluation trap.")
        for finding in result["findings"]:
            st.markdown(finding_html(finding), unsafe_allow_html=True)
            severity = severity_value(finding["severity"])
            with st.expander(f"Evidence and remediation · {SEVERITY_LABELS[severity]}"):
                st.json(finding["evidence"], expanded=True)
                st.markdown(f"**Recommended action:** {finding['recommendation']}")
                st.caption(
                    "Statistical evidence identifies risk; feature availability and meaning require "
                    "domain review."
                )

    with evaluation:
        st.plotly_chart(
            metrics_comparison(result),
            width="stretch",
            config={"displayModeBar": False},
        )
        naive = result["naive_evaluation"]
        trusted = result["trustworthy_evaluation"]
        col_a, col_b = st.columns(2)
        with col_a:
            st.subheader("Naive experiment")
            st.write("**Strategy:** Stratified random split")
            st.write(f"**Rows:** {naive['train_rows']:,} train / {naive['test_rows']:,} test")
            st.write("**Excluded columns:** None")
        with col_b:
            st.subheader("Trustworthy rerun")
            st.write(f"**Strategy:** {trusted['strategy'].replace('_', ' ').title()}")
            st.write(f"**Rows:** {trusted['train_rows']:,} train / {trusted['test_rows']:,} test")
            excluded = ", ".join(trusted["excluded_columns"]) or "None"
            st.write(f"**Excluded columns:** {excluded}")

    with data:
        st.dataframe(frame.head(100), width="stretch", hide_index=True)
        payload = json.dumps(result, default=lambda value: int(value), indent=2)
        st.download_button(
            "Download reproducible audit JSON",
            payload,
            file_name="leaklens-audit.json",
            mime="application/json",
        )
        report = build_html_report(result, frame, config, source_name)
        st.download_button(
            "Download standalone evidence report",
            report,
            file_name="leaklens-evidence-report.html",
            mime="text/html",
        )
        st.caption(
            "The export contains the audit configuration, evidence, metrics, and split strategy."
        )


render_header()
frame, defaults, source_name = load_source()
if len(frame) > 100_000:
    st.error("This Day 2 build supports up to 100,000 rows per audit.")
    st.stop()
if len(frame.columns) > 150:
    st.error("This Day 2 build supports up to 150 columns per audit.")
    st.stop()

columns = frame.columns.tolist()
target_default = defaults.get("target") if defaults else columns[-1]
target = st.sidebar.selectbox("Target column", columns, index=columns.index(target_default))
entity = optional_column("Entity column", columns, defaults.get("entity"))
time_column = optional_column("Time column", columns, defaults.get("time"))
labels = frame[target].dropna().unique().tolist()
positive_label = st.sidebar.selectbox(
    "Positive class", labels, index=len(labels) - 1 if labels else 0
)
st.sidebar.caption("Binary classification · 25% holdout · deterministic seed 42")
run = st.sidebar.button("Run forensic audit", type="primary", width="stretch")

config_signature = (source_name, target, entity, time_column, str(positive_label), len(frame))
audit_config = DatasetConfig(
    target=target,
    entity_column=entity,
    time_column=time_column,
    positive_label=positive_label,
)
if run:
    try:
        with st.spinner("Testing whether the headline score survives…"):
            result = audit(
                frame,
                audit_config,
            )
        st.session_state["audit_result"] = result
        st.session_state["audit_signature"] = config_signature
    except ValueError as error:
        st.error(str(error))

if st.session_state.get("audit_signature") == config_signature:
    render_results(st.session_state["audit_result"], frame, source_name, audit_config)
else:
    st.markdown("---")
    st.subheader("A defensible score needs an adversarial review.")
    st.write("Configure the dataset in the sidebar, then run the forensic audit.")
    st.markdown(
        "**The audit checks:** duplicates · entity overlap · suspicious predictors · identifiers · time"
    )
