# LeakLens

LeakLens is an evidence-first forensic auditor for tabular machine-learning evaluation. It
compares a naive result with a safer evaluation and shows where apparently strong performance
may come from leakage, contamination, or an unsuitable split.

## Hackathon track

**Building Evals** — ChatGPT Codex India Hackathon 2026.

## Day 1 scope

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

## Day 2 product

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
- data preview and reproducible JSON export;
- 20 MB, 100,000-row, and 150-column safety limits.

## Current limitations

- Binary classification only.
- Statistical evidence cannot prove semantic leakage; suspicious features require human review.
- Strict entity-disjoint chronological evaluation is rejected when entity time ranges overlap;
  users must then choose the deployment assumption they actually need to test.
- The Day 1 baseline is logistic regression. Model comparison belongs to the product phase.
