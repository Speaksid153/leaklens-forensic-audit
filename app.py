"""LeakLens Streamlit application."""
# ruff: noqa: E501

from __future__ import annotations

import json
from html import escape
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
    metrics_comparison,
    severity_value,
)
from leaklens.reporting import build_html_report

st.set_page_config(page_title="LeakLens", page_icon="🔍", layout="wide")

STYLES = """
<style>
:root { --ink:#f8fafc; --muted:#91a0b7; --line:rgba(148,163,184,.14); --panel:rgba(12,20,36,.78); --cyan:#55d9f5; --violet:#a78bfa; }
html, body, [class*="css"] { font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; }
.stApp { background:radial-gradient(circle at 78% -8%,rgba(37,99,235,.25),transparent 34%),radial-gradient(circle at 14% 55%,rgba(8,145,178,.1),transparent 28%),#050912; color:var(--ink); }
[data-testid="stHeader"] { height:3.5rem; background:rgba(5,9,18,.9); border-bottom:1px solid rgba(148,163,184,.1); backdrop-filter:blur(18px); }
[data-testid="stToolbar"] { right:1rem; }
.block-container { max-width:1180px; padding-top:4.65rem; padding-bottom:5rem; }
.product-nav { display:flex; align-items:center; justify-content:space-between; gap:18px; margin:0 0 4.5rem; }
.brand { display:flex; align-items:center; gap:12px; }
.brand-mark { width:38px; height:38px; border-radius:12px; display:grid; place-items:center; background:linear-gradient(145deg,#22d3ee,#6366f1); box-shadow:0 0 0 1px rgba(255,255,255,.16) inset,0 10px 30px rgba(34,211,238,.16); }
.brand-lens { width:15px; height:15px; border:3px solid white; border-radius:50%; position:relative; }
.brand-lens:after { content:""; width:7px; height:3px; border-radius:4px; position:absolute; right:-6px; bottom:-3px; transform:rotate(45deg); background:white; }
.brand-name { font-size:1.08rem; font-weight:800; letter-spacing:-.025em; }
.brand-sub { color:#64748b; font-size:.72rem; margin-top:1px; }
.local-pill { display:flex; align-items:center; gap:8px; color:#b7c4d6; border:1px solid var(--line); background:rgba(15,23,42,.5); padding:8px 12px; border-radius:999px; font-size:.76rem; }
.local-dot { width:7px; height:7px; border-radius:50%; background:#34d399; box-shadow:0 0 12px #34d399; }
.hero-grid { display:grid; grid-template-columns:minmax(0,1.35fr) minmax(300px,.65fr); align-items:center; gap:clamp(40px,7vw,92px); }
.eyebrow { color:var(--cyan); font-size:.72rem; font-weight:800; letter-spacing:.17em; text-transform:uppercase; }
.hero-title { color:var(--ink); font-size:clamp(3rem,6vw,5.4rem); line-height:.94; letter-spacing:-.06em; margin:.65rem 0 1.35rem; max-width:780px; }
.hero-title .accent { color:transparent; background:linear-gradient(90deg,#67e8f9,#a78bfa); background-clip:text; -webkit-background-clip:text; }
.hero-copy { color:var(--muted); max-width:720px; font-size:1.02rem; line-height:1.75; margin:0; }
.trust-row { display:flex; flex-wrap:wrap; gap:20px; margin-top:1.6rem; color:#64748b; font-size:.75rem; font-weight:650; }
.trust-row span:before { content:"✓"; color:#34d399; margin-right:7px; }
.flow-card { border:1px solid rgba(103,232,249,.17); border-radius:20px; padding:22px; background:linear-gradient(155deg,rgba(15,23,42,.92),rgba(15,23,42,.55)); box-shadow:0 28px 80px rgba(0,0,0,.28); }
.flow-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:18px; color:#cbd5e1; font-size:.75rem; font-weight:750; letter-spacing:.08em; text-transform:uppercase; }
.flow-badge { color:#67e8f9; background:rgba(8,145,178,.12); border:1px solid rgba(34,211,238,.2); border-radius:999px; padding:4px 8px; font-size:.62rem; }
.flow-step { display:grid; grid-template-columns:30px 1fr auto; gap:11px; align-items:center; padding:11px 0; border-top:1px solid rgba(148,163,184,.1); }
.flow-num { color:#64748b; font:700 .7rem ui-monospace,SFMono-Regular,monospace; }
.flow-step strong { display:block; font-size:.86rem; }.flow-step small { display:block; color:#64748b; margin-top:3px; }
.flow-state { width:8px; height:8px; border-radius:50%; background:#38bdf8; box-shadow:0 0 12px rgba(56,189,248,.7); }
.flow-step:last-child .flow-state { background:#a78bfa; box-shadow:0 0 12px rgba(167,139,250,.7); }
.launchpad { margin-top:4.7rem; padding-top:1.5rem; border-top:1px solid var(--line); }
.launch-head { display:flex; justify-content:space-between; align-items:end; gap:18px; margin-bottom:18px; }
.launch-head h2 { margin:.3rem 0 0; font-size:1.35rem; letter-spacing:-.025em; }.launch-head p { color:#64748b; margin:0; font-size:.84rem; }
.launch-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
.launch-item { border:1px solid var(--line); border-radius:15px; padding:18px; background:rgba(15,23,42,.45); }
.launch-item span { color:#67e8f9; font:700 .68rem ui-monospace,SFMono-Regular,monospace; }.launch-item strong { display:block; margin:8px 0 5px; }.launch-item p { color:#718096; font-size:.8rem; line-height:1.5; margin:0; }
.result-meta { display:flex; flex-wrap:wrap; gap:8px; align-items:center; margin:0 0 14px; color:#8fa0b7; font-size:.78rem; }
.result-meta span { border:1px solid var(--line); background:rgba(15,23,42,.5); padding:6px 9px; border-radius:999px; }
.verdict-panel { border:1px solid var(--line); border-radius:16px; padding:20px; background:var(--panel); min-height:100%; }
.verdict-panel .label { color:#67e8f9; font-size:.68rem; font-weight:800; letter-spacing:.12em; text-transform:uppercase; }.verdict-panel h3 { margin:.45rem 0 .7rem; }.verdict-panel p { color:#8fa0b7; line-height:1.6; margin:.35rem 0; }
.deduction-row { display:flex; align-items:center; justify-content:space-between; gap:16px; padding:12px 0; border-bottom:1px solid rgba(148,163,184,.1); }.deduction-row:last-child { border:0; }.deduction-row span { color:#aab7ca; }.deduction-row b { color:#fb7185; font-variant-numeric:tabular-nums; }
.finding-card { background:var(--panel); border:1px solid var(--line); border-left:4px solid; border-radius:14px; padding:1.1rem 1.25rem; margin:.7rem 0; }
.finding-card h3 { color:var(--ink); margin:.3rem 0 .55rem; font-size:1.04rem; }.finding-card p { color:#aebbd0; margin:.25rem 0; line-height:1.55; }
.finding-meta { display:flex; gap:.8rem; align-items:center; font-size:.7rem; letter-spacing:.09em; text-transform:uppercase; font-weight:750; }.detector { color:#64748b; }.affected { font-size:.84rem; }.severity { font-weight:800; }
[data-testid="stSidebar"] { background:#070c16; border-right:1px solid rgba(148,163,184,.12); }
[data-testid="stSidebarContent"] { padding-top:4.35rem; }
.sidebar-brand { padding:0 2px 18px; border-bottom:1px solid var(--line); margin-bottom:20px; }.sidebar-brand .mini { color:#64748b; font-size:.72rem; margin-top:4px; }.sidebar-title { font-size:1.1rem; font-weight:800; letter-spacing:-.02em; }
.sidebar-step { color:#55d9f5; font-size:.65rem; font-weight:800; letter-spacing:.14em; text-transform:uppercase; margin:8px 0 -2px; }
[data-testid="stFileUploader"] { border-radius:12px; }
[data-testid="stTabs"] [role="tablist"] { gap:5px; border-bottom:1px solid var(--line); }
[data-testid="stTabs"] button[role="tab"] { padding:12px 15px; color:#8fa0b7; }
[data-testid="stTabs"] button[aria-selected="true"] { color:#e2e8f0; }
.stButton > button, .stDownloadButton > button { border-radius:11px; font-weight:750; min-height:42px; }
.stButton > button[kind="primary"] { background:linear-gradient(90deg,#0891b2,#4f46e5); border:0; box-shadow:0 10px 24px rgba(8,145,178,.17); }
@media(max-width:850px) { .block-container { padding-top:4.35rem; }.product-nav { margin-bottom:3rem; }.hero-grid { grid-template-columns:1fr; }.flow-card { max-width:560px; }.launch-grid { grid-template-columns:1fr; } }
@media(max-width:520px) { .block-container { padding-left:1rem; padding-right:1rem; }.product-nav { margin-bottom:2.5rem; }.brand-sub,.local-pill { display:none; }.hero-title { font-size:2.85rem; }.hero-copy { font-size:.94rem; }.hero-grid { gap:30px; }.launch-head { align-items:flex-start; flex-direction:column; } }
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
    st.sidebar.markdown('<div class="sidebar-step">01 · Data source</div>', unsafe_allow_html=True)
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
    st.markdown(
        """
        <nav class="product-nav">
          <div class="brand"><div class="brand-mark"><div class="brand-lens"></div></div>
            <div><div class="brand-name">LeakLens</div><div class="brand-sub">Evaluation integrity lab</div></div>
          </div>
          <div class="local-pill"><span class="local-dot"></span>Runs locally · No API keys</div>
        </nav>
        <section class="hero-grid">
          <div>
            <div class="eyebrow">Forensic ML evaluation</div>
            <h1 class="hero-title">Your model score<br>may be <span class="accent">lying.</span></h1>
            <p class="hero-copy">LeakLens stress-tests tabular classification experiments for leakage,
            entity contamination, identifier memorization, and invalid temporal splits—then rebuilds
            the evaluation under defensible assumptions.</p>
            <div class="trust-row"><span>Deterministic</span><span>Evidence-first</span><span>Fully offline</span></div>
          </div>
          <aside class="flow-card">
            <div class="flow-head"><span>Audit protocol</span><span class="flow-badge">3 stages</span></div>
            <div class="flow-step"><span class="flow-num">01</span><div><strong>Reproduce</strong><small>Measure the tempting score</small></div><span class="flow-state"></span></div>
            <div class="flow-step"><span class="flow-num">02</span><div><strong>Interrogate</strong><small>Expose contamination paths</small></div><span class="flow-state"></span></div>
            <div class="flow-step"><span class="flow-num">03</span><div><strong>Re-evaluate</strong><small>Apply a trustworthy split</small></div><span class="flow-state"></span></div>
          </aside>
        </section>
        """,
        unsafe_allow_html=True,
    )


def render_sidebar_header() -> None:
    st.sidebar.markdown(
        '<div class="sidebar-brand"><div class="sidebar-title">Configure audit</div>'
        '<div class="mini">Define what your deployment will actually see.</div></div>',
        unsafe_allow_html=True,
    )


def render_results(
    result: dict[str, Any], frame: pd.DataFrame, source_name: str, config: DatasetConfig
) -> None:
    reliability = result["reliability"]["score"]
    st.markdown(
        f'<div class="result-meta"><span>{escape(source_name)}</span>'
        f'<span>{len(frame):,} rows</span><span>{len(frame.columns)} columns</span>'
        '<span>Seed 42</span></div>',
        unsafe_allow_html=True,
    )
    render_motion_summary(result)

    overview, evidence, evaluation, data = st.tabs(
        ["Overview", f"Evidence ({len(result['findings'])})", "Evaluation", "Data & export"]
    )
    with overview:
        left, right = st.columns([1.05, 0.95], gap="medium")
        with left:
            deductions = result["reliability"]["deductions"]
            rows = "".join(
                f'<div class="deduction-row"><span>{escape(detector.replace("_", " ").title())}</span>'
                f'<b>−{deduction} pts</b></div>'
                for detector, deduction in deductions.items()
            )
            if not rows:
                rows = '<p>No reliability deductions were triggered.</p>'
            st.markdown(
                '<div class="verdict-panel"><div class="label">Reliability breakdown</div>'
                '<h3>What weakened this evaluation</h3>' + rows + '</div>',
                unsafe_allow_html=True,
            )
        with right:
            trusted = result["trustworthy_evaluation"]
            excluded = ", ".join(trusted["excluded_columns"]) or "None"
            verdict = "Proceed to domain review" if reliability >= 80 else "Do not trust the headline score"
            st.markdown(
                f'<div class="verdict-panel"><div class="label">Decision guidance</div>'
                f'<h3>{verdict}</h3><p>The defensible rerun used a '
                f'<strong>{escape(trusted["strategy"].replace("_", " ").title())}</strong> split.</p>'
                f'<p><strong>Excluded:</strong> {escape(excluded)}</p>'
                '<p>Review the evidence with a domain owner before changing production features or '
                'claiming model performance.</p></div>',
                unsafe_allow_html=True,
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
render_sidebar_header()
frame, defaults, source_name = load_source()
if len(frame) > 100_000:
    st.error("This Day 2 build supports up to 100,000 rows per audit.")
    st.stop()
if len(frame.columns) > 150:
    st.error("This Day 2 build supports up to 150 columns per audit.")
    st.stop()

columns = frame.columns.tolist()
st.sidebar.markdown('<div class="sidebar-step">02 · Experiment semantics</div>', unsafe_allow_html=True)
target_default = defaults.get("target") if defaults else columns[-1]
target = st.sidebar.selectbox("Target column", columns, index=columns.index(target_default))
entity = optional_column("Entity column", columns, defaults.get("entity"))
time_column = optional_column("Time column", columns, defaults.get("time"))
labels = frame[target].dropna().unique().tolist()
positive_label = st.sidebar.selectbox(
    "Positive class", labels, index=len(labels) - 1 if labels else 0
)
st.sidebar.caption("Binary classification · 25% holdout · deterministic seed 42")
st.sidebar.markdown('<div class="sidebar-step">03 · Run audit</div>', unsafe_allow_html=True)
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
    st.markdown(
        """
        <section class="launchpad">
          <div class="launch-head"><div><div class="eyebrow">Ready when you are</div>
            <h2>Turn a score into an evidence trail.</h2></div>
            <p>Configure the experiment in the sidebar, then run the forensic audit.</p>
          </div>
          <div class="launch-grid">
            <div class="launch-item"><span>01 / SOURCE</span><strong>Choose the evidence</strong><p>Start with a guided failure mode or upload your own CSV.</p></div>
            <div class="launch-item"><span>02 / SEMANTICS</span><strong>Define reality</strong><p>Identify the target, entity, time, and positive class.</p></div>
            <div class="launch-item"><span>03 / AUDIT</span><strong>Challenge the score</strong><p>Compare the naive result with a defensible rerun.</p></div>
          </div>
        </section>
        """,
        unsafe_allow_html=True,
    )
