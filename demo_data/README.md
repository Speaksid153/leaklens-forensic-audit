# LeakLens upload test files

Use these two generated CSVs to verify the complete upload workflow. Run the clean file first to
establish the control result, then run the leaky file to demonstrate LeakLens's detectors and
safer reevaluation.

## 1. Clean control

File: `leaklens_clean_example.csv`

- Target column: `target`
- Entity column: None
- Time column: None
- Positive class: `1`

Expected result: 400 rows, no findings, reliability `100/100`, and no ROC-AUC inflation. The
deterministic ROC-AUC is approximately `0.736`.

## 2. Deliberately leaky loan data

File: `leaklens_leaky_example.csv`

- Target column: `defaulted`
- Entity column: `customer_id`
- Time column: `application_date`
- Positive class: `1`

Expected result: 620 rows and findings for entity overlap, a suspicious post-outcome feature,
duplicate contamination, identifier memorization, and temporal mismatch. Reliability should be
`1/100`; ROC-AUC should fall from `1.000` in the naive evaluation to approximately `0.611` in the
trustworthy evaluation.

These files contain entirely synthetic data. Regenerate them at any time with:

```powershell
.\.venv\Scripts\python.exe -m scripts.generate_demo_data
```
