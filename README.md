# LeakLens

LeakLens is an evidence-first forensic auditor for tabular machine-learning evaluation. It
compares a naive result with a safer evaluation and shows where apparently strong performance
may come from leakage, contamination, or an unsuitable split.

## Hackathon track

**Building Evals** — ChatGPT Codex India Hackathon 2026.

## Core audit engine

- deterministic flawed and clean demonstration datasets;
- duplicate, entity-overlap, identifier, suspicious-feature, and temporal detectors;
- stratified, group-aware, chronological, and entity-disjoint chronological evaluation;
- leakage-safe Scikit-learn preprocessing and logistic-regression baseline;
- transparent reliability deductions and metric-inflation output;
- automated positive, negative, and reproducibility tests.

## Local setup

```powershell
py -3.12 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python -m pytest
python -m scripts.generate_demo_data
```

The audit engine remains intentionally independent of the Streamlit interface.

## Interactive product

Run the interactive application with:

```powershell
streamlit run app.py
```

On Windows, you can instead double-click `run_leaklens.bat`. Keep the terminal window open while
using the app. If the browser does not open automatically, visit `http://localhost:8501`.

The product includes:

- guided loan, readmission, maintenance, and clean-control demonstrations;
- CSV upload with explicit target, entity, time, and positive-class configuration;
- a transparent reliability breakdown;
- a three-stage Metric Inflation Waterfall;
- evidence cards with detector-specific remediation;
- naive-versus-trustworthy metric comparison;
- a focused Motion-powered verdict and score-survival sequence with reduced-motion support;
- data preview, reproducible JSON export, and a standalone offline HTML evidence report;
- 20 MB, 100,000-row, and 150-column safety limits.

The React/TypeScript Motion component is prebuilt in `leaklens/motion_dist`, so deployment only
needs the free Python dependencies in `requirements.txt`; no API key or paid service is used.
Frontend source lives in `motion_ui`. Rebuild it with Node 24 and `pnpm run build` from that folder.

If you previously ran an older Streamlit build on port 8501, close every old LeakLens tab and
press Ctrl+F5 after relaunching. A stale cached Streamlit frontend cannot communicate correctly
with the upgraded backend.

## Day 3 release gate

```powershell
.\.venv\Scripts\python.exe -m pip check
.\.venv\Scripts\python.exe -m ruff check .
.\.venv\Scripts\python.exe -m compileall -q app.py leaklens scripts tests
.\.venv\Scripts\python.exe -m pytest
```

The CI workflow additionally type-checks and rebuilds the Motion bundle, then rejects uncommitted
bundle drift. This keeps the deployed animation code reproducible rather than relying on a
developer's local `node_modules` directory.

## Current limitations

- Binary classification only.
- Statistical evidence cannot prove semantic leakage; suspicious features require human review.
- Strict entity-disjoint chronological evaluation is rejected when entity time ranges overlap;
  users must then choose the deployment assumption they actually need to test.
- The Day 1 baseline is logistic regression. Model comparison belongs to the product phase.
