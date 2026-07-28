# Codex build log

## Day 1 — engineering foundation

### Goal

Create an audit engine that works independently of the user interface and can prove its behavior
against datasets with known failure modes.

### Codex actions

- Designed typed contracts shared by detectors, evaluation, and the future UI.
- Created deterministic loan, readmission, maintenance, and clean-control datasets.
- Implemented five forensic detector families.
- Implemented leakage-safe preprocessing and three evaluation strategies.
- Added positive, negative, split-integrity, and reproducibility tests.

### Human decisions to review

- Binary classification is the only supported task for the hackathon MVP.
- Statistical detectors must not claim semantic certainty.
- A clean control is a release gate against attention-seeking false positives.
- The UI cannot contain audit or modeling logic.

### Verification

- `python -m pytest`: 10 passed.
- `python -m ruff check .`: all checks passed.
- Loan demonstration naive ROC-AUC: 1.000.
- Loan demonstration trustworthy chronological ROC-AUC: 0.664.
- Exposed ROC-AUC inflation: 0.336.
- The clean-control regression test produced no high or critical findings.

During verification, Codex found that in-sample target encoding made a unique application ID appear
perfectly predictive. That was leakage inside the detector itself. The detector now delegates
high-cardinality categories to the identifier audit, and a regression assertion prevents recurrence.
