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
- Strict entity-disjoint chronological evaluation is rejected when entity time ranges overlap;
  users must then choose the deployment assumption they actually need to test.
- The Day 1 baseline is logistic regression. Model comparison belongs to the product phase.
