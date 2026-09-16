# LeakLens architecture

## Design objective

LeakLens must expose evaluation leakage without receiving a user's dataset, requiring an API key,
or allowing the UI and analytical engine to diverge. The production build therefore runs the same
Python audit modules used by the tested Streamlit application inside a dedicated browser Web Worker
through Pyodide.

```text
CSV / guided demo
       │
       ▼
React + Motion interface ── typed messages ──► Web Worker
                                                │
                                                ▼
                                      Pyodide Python runtime
                                                │
                         ┌──────────────────────┼──────────────────────┐
                         ▼                      ▼                      ▼
                    detectors              evaluation             provenance
                         └──────────────────────┼──────────────────────┘
                                                ▼
                                 JSON / HTML / candidate CSV
```

## Trust boundaries

- Uploaded CSV bytes remain in browser memory. There is no LeakLens application server or upload
  endpoint; a refresh clears the data.
- The browser downloads open-source runtime packages from the pinned Pyodide release CDN. It does
  not send the dataset to that CDN.
- Analysis runs off the main thread. A long audit cannot freeze page interaction.
- Motion is presentation-only. It never changes findings, metrics, exclusions, or reliability.
- Candidate controlled CSVs apply mechanical exclusions only. The UI and export explicitly require
  human domain review before model use.

## Reproducibility contract

Every audit result includes a versioned provenance manifest with the input SHA-256 fingerprint,
semantic column choices, positive label, holdout size, random seed, engine version, and Python,
pandas, and scikit-learn versions. The JSON export is the canonical machine-readable record; the
self-contained HTML report carries the same identifying evidence.

## Failure containment

- Size and shape limits reject unsafe browser workloads before modelling.
- Dataset validation rejects missing targets, non-binary targets, invalid timestamps, infinite
  numeric values, duplicate column names, and insufficient class support with actionable messages.
- When a leakage-safe holdout cannot be formed, LeakLens reports a conservative prevalence baseline
  instead of presenting a contaminated score as trustworthy.
- The GitHub Pages deployment is gated by Python tests, dependency and vulnerability checks,
  TypeScript compilation, a production build, and Playwright coverage of upload through export.

## Deliberate scope

LeakLens evaluates binary tabular classification with a logistic-regression probe. That narrow
baseline is intentional: the product audits evaluation validity, not which model wins a leaderboard.
Multi-class and multi-model analysis are future extensions, not hidden claims.
