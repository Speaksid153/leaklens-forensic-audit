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

## Day 1 revalidation and hardening

### Findings

- Combined entity/time configurations used chronological splitting but did not enforce entity
  disjointness.
- Missing target values passed initial validation and failed later inside Scikit-learn.
- Low-cardinality categorical screening still learned target rates from the evaluated row.
- The first readmission demonstration detected entity overlap but showed weak metric inflation.

### Corrections

- Added strict entity-disjoint chronological evaluation with an explicit infeasibility error when
  entity time ranges overlap.
- Added early validation for missing targets, absent positive labels, incomplete entities, and
  invalid timestamps.
- Replaced in-sample categorical target encoding with leave-one-out encoding.
- Strengthened the repeated-patient demonstration while keeping a clean control as a false-positive
  gate.

### Verified results

- `python -m pytest`: 14 passed.
- `python -m ruff check .`: all checks passed.
- Loan ROC-AUC: 1.000 naive versus 0.678 entity-disjoint chronological.
- Readmission ROC-AUC: 0.864 naive versus 0.506 group-aware.
- Maintenance ROC-AUC: 1.000 naive versus 0.659 entity-disjoint chronological.
- Clean control: reliability 100, zero findings, and zero metric inflation.
