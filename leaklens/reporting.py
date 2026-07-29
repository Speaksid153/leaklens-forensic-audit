"""Portable, dependency-free HTML evidence report generation."""
# ruff: noqa: E501

from __future__ import annotations

import hashlib
import json
from datetime import UTC, datetime
from html import escape
from importlib.metadata import version
from typing import Any

import pandas as pd

from leaklens.contracts import DatasetConfig
from leaklens.presentation import SEVERITY_LABELS, severity_value


def dataframe_fingerprint(frame: pd.DataFrame) -> str:
    """Return a stable content-and-schema fingerprint for an audit input."""

    digest = hashlib.sha256()
    digest.update(json.dumps(list(map(str, frame.columns))).encode())
    digest.update(json.dumps(list(map(str, frame.dtypes))).encode())
    digest.update(pd.util.hash_pandas_object(frame, index=True).values.tobytes())
    return digest.hexdigest()


def build_html_report(
    result: dict[str, Any], frame: pd.DataFrame, config: DatasetConfig, source_name: str
) -> str:
    """Build a self-contained HTML report suitable for judging or peer review."""

    generated = datetime.now(UTC).isoformat(timespec="seconds")
    fingerprint = dataframe_fingerprint(frame)
    reliability = int(result["reliability"]["score"])
    naive = float(result["naive_evaluation"]["metrics"]["roc_auc"])
    trusted = float(result["trustworthy_evaluation"]["metrics"]["roc_auc"])
    findings = "".join(
        f"<article><span class='severity'>{escape(SEVERITY_LABELS[severity_value(item['severity'])])}</span>"
        f"<h3>{escape(str(item['title']))}</h3><p>{escape(str(item['explanation']))}</p>"
        f"<p><b>Action:</b> {escape(str(item['recommendation']))}</p></article>"
        for item in result["findings"]
    ) or "<article><h3>No high-confidence trap detected</h3><p>Review assumptions before deployment.</p></article>"
    stages = "".join(
        f"<tr><td>{escape(str(stage['label']))}</td><td>{float(stage['metrics']['roc_auc']):.3f}</td></tr>"
        for stage in result["evaluation_stages"]
    )
    return f"""<!doctype html><html lang='en'><head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'>
<title>LeakLens audit — {escape(source_name)}</title><style>
body{{margin:0;background:#070b14;color:#e2e8f0;font:15px Inter,system-ui,sans-serif}}main{{max-width:980px;margin:auto;padding:48px 24px}}h1{{font-size:42px;letter-spacing:-.04em;margin:.2em 0}}.kicker,.severity{{color:#67e8f9;text-transform:uppercase;letter-spacing:.13em;font-size:11px;font-weight:800}}.grid{{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:28px 0}}.metric,article,.panel{{background:#0f172a;border:1px solid #243047;border-radius:14px;padding:18px}}.metric b{{display:block;font-size:30px;margin-top:5px}}article{{margin:10px 0}}h3{{margin:.45em 0}}p,td{{color:#a8b7cc;line-height:1.55}}table{{width:100%;border-collapse:collapse}}td{{padding:10px;border-bottom:1px solid #243047}}code{{word-break:break-all;color:#c4b5fd}}footer{{margin-top:30px;color:#64748b;font-size:12px}}@media(max-width:650px){{.grid{{grid-template-columns:1fr}}}}
</style></head><body><main><span class='kicker'>Portable forensic evidence</span><h1>LeakLens audit report</h1><p>Source: {escape(source_name)} · {len(frame):,} rows · {len(frame.columns)} columns</p>
<section class='grid'><div class='metric'>Reliability<b>{reliability}/100</b></div><div class='metric'>Naive ROC-AUC<b>{naive:.3f}</b></div><div class='metric'>Trusted ROC-AUC<b>{trusted:.3f}</b></div></section>
<section class='panel'><h2>Score survival path</h2><table><tbody>{stages}</tbody></table></section><h2>Forensic findings</h2>{findings}
<section class='panel'><h2>Reproducibility</h2><p>Target: {escape(config.target)} · Entity: {escape(str(config.entity_column))} · Time: {escape(str(config.time_column))} · Positive class: {escape(str(config.positive_label))} · Seed: {config.random_state} · Holdout: {config.test_size:.0%}</p><p>Dataset SHA-256: <code>{fingerprint}</code></p><p>Runtime: Python package versions pandas {version('pandas')}, scikit-learn {version('scikit-learn')}, LeakLens 0.1.0</p></section>
<footer>Generated {generated}. This diagnostic tests evaluation integrity; it is not a certification of model safety, fairness, or production readiness.</footer></main></body></html>"""
