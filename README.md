# 🔍 LeakLens

**An evidence-first forensic auditor for tabular machine-learning evaluation.** LeakLens compares a naive result with a leakage-safe evaluation to reveal when strong performance may come from data contamination, unsuitable splits, or identifier bleed-through.

[![Live application](https://img.shields.io/badge/Live_application-Open_LeakLens-0969da?style=for-the-badge&logo=streamlit&logoColor=white)](https://leaklens-forensic-audit-ory9f3bzappgezlbszpn4kd.streamlit.app/~/+/)
[![Demo video](https://img.shields.io/badge/Demo_video-78_seconds-30363d?style=for-the-badge&logo=googledrive&logoColor=white)](https://drive.google.com/file/d/1Jwa6wzx2Y9tutOx472jGvAOtuvKR24pu/view?usp=sharing)
[![Project description](https://img.shields.io/badge/Project_description-Google_Doc-0f9d58?style=for-the-badge&logo=googledocs&logoColor=white)](https://docs.google.com/document/d/1928YGvsqkOxb8rpCt_-qwbu2TptmYfdfBDANkP2Zp0E/edit?usp=sharing)

### Built with

![Python 3.11–3.13](https://img.shields.io/badge/Python-3.11--3.13-3776AB?logo=python&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-1.60-FF4B4B?logo=streamlit&logoColor=white)
![scikit-learn](https://img.shields.io/badge/scikit--learn-1.7-F7931E?logo=scikitlearn&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=111827)
![Motion](https://img.shields.io/badge/Motion-12-FFF312?logo=framer&logoColor=111827)
![pytest](https://img.shields.io/badge/pytest-55_tests-0A9EDC?logo=pytest&logoColor=white)
[![GitHub Actions](https://img.shields.io/github/actions/workflow/status/Speaksid153/leaklens-forensic-audit/quality.yml?branch=main&label=quality&logo=githubactions)](https://github.com/Speaksid153/leaklens-forensic-audit/actions/workflows/quality.yml)

> [!IMPORTANT]
> **Building Evals track — ChatGPT Codex India Hackathon 2026**<br>
> Public, offline-first, and built entirely with free and open-source resources. No API key, paid model, chatbot, or external AI service is required at runtime.

## Core audit engine

The audit engine is self-contained and operates independently of the Streamlit interface.

- Deterministic flawed and clean demonstration datasets
- Duplicate, entity-overlap, identifier, suspicious-feature, and temporal detectors
- Stratified, group-aware, chronological, and entity-disjoint chronological evaluation strategies
- Leakage-safe scikit-learn preprocessing with a logistic-regression baseline
- Transparent reliability deductions and metric-inflation quantification
- Automated positive, negative, compatibility, and reproducibility tests

## Local setup

**Windows one-click:** double-click [`setup_leaklens.bat`](setup_leaklens.bat). It creates a Python 3.12 virtual environment using the Python launcher or `uv`, then installs all pinned dependencies. If neither is available, the script provides the official free Python download link.

**Manual setup:**

```powershell
py -3.12 -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m pytest
.\.venv\Scripts\python.exe -m scripts.generate_demo_data
```

> [!NOTE]
> LeakLens supports Python 3.11–3.13. Python 3.12 is the recommended reproducible Windows environment. The pinned NumPy version is not compatible with Python 3.14.

## Running the application

```powershell
.\.venv\Scripts\python.exe -m streamlit run app.py
```

On Windows, you can instead double-click [`run_leaklens.bat`](run_leaklens.bat). It performs first-run setup when needed and prevents a conflicting second server from launching. Keep the terminal open while using the app. If the browser does not open automatically, visit [`http://localhost:8501`](http://localhost:8501).

> [!WARNING]
> **Upgrading from an older build?** Close every old LeakLens tab and press `Ctrl+F5` after relaunching. A stale cached Streamlit frontend cannot communicate correctly with the updated backend.

## Product features

<table>
  <tr>
    <td width="33%"><strong>🧪 Guided demos</strong><br><sub>Loan, readmission, maintenance, and clean-control scenarios.</sub></td>
    <td width="33%"><strong>📄 CSV upload</strong><br><sub>Explicit target, entity, time, and positive-class configuration.</sub></td>
    <td width="33%"><strong>📉 Metric inflation waterfall</strong><br><sub>A three-stage breakdown of score inflation.</sub></td>
  </tr>
  <tr>
    <td width="33%"><strong>🔬 Evidence cards</strong><br><sub>Detector-specific findings with remediation guidance.</sub></td>
    <td width="33%"><strong>⚖️ Metric comparison</strong><br><sub>Side-by-side naive and trustworthy results.</sub></td>
    <td width="33%"><strong>📦 Evidence export</strong><br><sub>Reproducible JSON and standalone offline HTML reports.</sub></td>
  </tr>
</table>

![20 MB maximum](https://img.shields.io/badge/upload-20_MB_max-30363d)
![100,000 rows maximum](https://img.shields.io/badge/rows-100%2C000_max-30363d)
![150 columns maximum](https://img.shields.io/badge/columns-150_max-30363d)

## Frontend

The React/TypeScript Motion component is prebuilt in [`leaklens/motion_dist`](leaklens/motion_dist). Production deployment therefore needs only the free Python dependencies in [`requirements.txt`](requirements.txt)—no Node runtime, API key, or paid service.

Frontend source lives in [`motion_ui`](motion_ui). Rebuild it with Node 24 and pnpm 11.9.0:

```powershell
cd motion_ui
pnpm install --frozen-lockfile
pnpm run typecheck
pnpm run build
```

> [!NOTE]
> Motion is presentational only, respects reduced-motion preferences, and does not affect audit calculations.

## Synthetic upload check

Run the deterministic demonstration files in this order to verify the upload pipeline end to end:

1. [`demo_data/leaklens_clean_example.csv`](demo_data/leaklens_clean_example.csv) — should produce a clean control with no findings.
2. [`demo_data/leaklens_leaky_example.csv`](demo_data/leaklens_leaky_example.csv) — should expose leakage and metric inflation.

The exact column selections and expected results are documented in [`demo_data/README.md`](demo_data/README.md). Regenerate both datasets at any time:

```powershell
.\.venv\Scripts\python.exe -m scripts.generate_demo_data
```

## Release gate

```powershell
.\.venv\Scripts\python.exe -m pip check
.\.venv\Scripts\python.exe -m ruff check .
.\.venv\Scripts\python.exe -m compileall -q app.py leaklens scripts tests
.\.venv\Scripts\python.exe -m pytest
```

The [GitHub Actions workflow](https://github.com/Speaksid153/leaklens-forensic-audit/actions/workflows/quality.yml) also type-checks and rebuilds the Motion bundle, regenerates the demo data, and rejects bundle or dataset drift. The deployed animation code is reproducible and independent of a developer's local `node_modules` directory.

## Current limitations

- Binary classification only; multi-class support is not yet implemented.
- Statistical evidence cannot prove semantic leakage; suspicious features require human review.
- Strict entity-disjoint chronological evaluation is rejected when entity time ranges overlap. Users must choose the deployment assumption they actually need to test.
- The comparison model is intentionally logistic regression. Multi-model comparison belongs to a later product phase.

## Methodology and submission material

- [Evaluation methodology](METHODOLOGY.md)
- [Codex build log](CODEX_BUILD_LOG.md)
- [Hackathon project description](https://docs.google.com/document/d/1928YGvsqkOxb8rpCt_-qwbu2TptmYfdfBDANkP2Zp0E/edit?usp=sharing)
- [78-second captioned demo on Google Drive](https://drive.google.com/file/d/1Jwa6wzx2Y9tutOx472jGvAOtuvKR24pu/view?usp=sharing)

## License

This project is released under the [MIT License](LICENSE).
