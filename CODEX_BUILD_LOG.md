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

## Day 2 — interactive product

### Goal

Turn the verified audit engine into a public-facing workflow that makes metric inflation legible in
under three minutes without moving statistical logic into the UI.

### Codex actions

- Added guided demos and configurable CSV upload.
- Added the three-stage Metric Inflation Waterfall, reliability gauge, evidence cards, and metric
  comparison.
- Added reproducible JSON export and conservative upload/data-shape limits.
- Added Streamlit application tests and pure presentation tests.
- Ran visual browser QA across Overview, Evidence, Evaluation, Data & export, and CSV upload flows.

### Review-loop corrections

- Replaced a four-column metric row after browser QA exposed horizontal clipping beside the sidebar.
- Corrected a temporal-detector title that counted unique null-mask values instead of timestamps.
- Moved the metric-comparison legend after visual QA exposed title/legend crowding.
- Matched the Streamlit server upload limit to the product's stated 20 MB limit.

### Verification

- `python -m pytest`: 21 passed, including Streamlit interaction tests.
- `python -m ruff check .`: all checks passed.
- Python bytecode compilation and dependency validation passed.
- Guided loan audit rendered reliability 12/100 and exposed ROC-AUC inflation of 0.322.
- Uploaded clean-control CSV rendered reliability 100/100 and zero inflation.
- All four result tabs passed visual and semantic browser inspection.

## Clean-room compatibility audit

- Cloned the committed repository into a new temporary directory.
- Created a fresh Python 3.12 environment and installed only `requirements.txt`.
- Verified dependency consistency, lint, compilation, all tests, and deterministic CSV generation.
- Started the clean-clone Streamlit server and passed its health endpoint.
- Exercised a real guided audit with no browser or server warnings/errors.
- Verified desktop and 390 px mobile layouts, including stacked metric cards.
- Exercised all four guided demonstrations through Streamlit's application test harness.

The audit found no runtime compatibility defect. It did identify a process gap: CI did not enforce
dependency checks, compilation, or generated-data reproducibility. Those checks are now part of the
GitHub Actions release gate, and all four guided demonstrations are permanent UI regression cases.

Final post-hardening result: 23 tests passed with a clean deterministic-data diff.
