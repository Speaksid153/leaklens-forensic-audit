# LeakLens

LeakLens is an evidence-first forensic auditor for tabular machine-learning evaluation. It
compares a naive result with a safer evaluation and shows where apparently strong performance
may come from leakage, contamination, or an unsuitable split.

## Hackathon track

**Building Evals** — ChatGPT Codex India Hackathon 2026.

## Day 1 scope

- deterministic flawed and clean demonstration datasets;
- duplicate, entity-overlap, identifier, suspicious-feature, and temporal detectors;
- stratified, group-aware, and chronological evaluation strategies;
- leakage-safe Scikit-learn preprocessing and logistic-regression baseline;
- transparent reliability deductions and metric-inflation output;
- automated positive, negative, and reproducibility tests.

## Local setup

```powershell
py -3.11 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python -m pytest
python -m scripts.generate_demo_data
```

The audit engine is intentionally independent of the Streamlit interface planned for Day 2.

## Current limitations

- Binary classification only.
- Statistical evidence cannot prove semantic leakage; suspicious features require human review.
- Chronological and group-aware correction are currently separate strategies. A combined grouped
  chronological split is planned after the core workflow is stable.
- The Day 1 baseline is logistic regression. Model comparison belongs to the product phase.
