"""Deterministic datasets whose failure modes are known before auditing."""

from __future__ import annotations

import numpy as np
import pandas as pd


def loan_default_trap(n_rows: int = 1200, seed: int = 7) -> pd.DataFrame:
    """Loan data with a post-outcome feature, repeated customers, and time drift."""

    rng = np.random.default_rng(seed)
    n_customers = max(100, n_rows // 3)
    customer_id = rng.integers(0, n_customers, size=n_rows)
    dates = pd.date_range("2022-01-01", periods=n_rows, freq="D")
    income = rng.lognormal(mean=10.6, sigma=0.45, size=n_rows)
    debt_ratio = np.clip(rng.beta(2.2, 4.0, size=n_rows), 0, 1)
    late_payments = rng.poisson(1.5, size=n_rows)
    drift = np.linspace(-0.8, 0.9, n_rows)
    logit = -2.0 + 3.2 * debt_ratio + 0.35 * late_payments - income / 180_000 + drift
    probability = 1 / (1 + np.exp(-logit))
    defaulted = rng.binomial(1, probability)
    collection_status = np.where(defaulted == 1, "sent_to_collections", "current")
    return pd.DataFrame(
        {
            "application_id": [f"APP-{i:06d}" for i in range(n_rows)],
            "customer_id": [f"CUS-{i:05d}" for i in customer_id],
            "application_date": dates,
            "annual_income": income.round(2),
            "debt_ratio": debt_ratio.round(4),
            "late_payments": late_payments,
            "collection_status": collection_status,
            "defaulted": defaulted,
        }
    )


def readmission_entity_trap(n_patients: int = 400, seed: int = 11) -> pd.DataFrame:
    """Repeated-patient records with a patient-specific outcome component."""

    rng = np.random.default_rng(seed)
    rows: list[dict[str, object]] = []
    patient_risk = rng.normal(0, 1.2, n_patients)
    for patient in range(n_patients):
        visits = int(rng.integers(2, 6))
        for visit in range(visits):
            severity = rng.normal(0, 1)
            probability = 1 / (1 + np.exp(-(-1.2 + patient_risk[patient] + severity)))
            rows.append(
                {
                    "patient_id": f"PAT-{patient:04d}",
                    "visit_number": visit + 1,
                    "age": int(np.clip(rng.normal(58, 16), 18, 95)),
                    "severity_score": round(float(severity), 4),
                    "length_of_stay": int(max(1, rng.poisson(4 + max(severity, 0)))),
                    "readmitted": int(rng.random() < probability),
                }
            )
    return pd.DataFrame(rows)


def maintenance_temporal_trap(n_rows: int = 1400, seed: int = 19) -> pd.DataFrame:
    """Machine readings with future-derived information and temporal drift."""

    rng = np.random.default_rng(seed)
    timestamps = pd.date_range("2023-01-01", periods=n_rows, freq="h")
    machine = rng.integers(0, 30, n_rows)
    age = machine * 0.12 + np.linspace(0, 2.5, n_rows)
    vibration = rng.normal(2.5 + age * 0.35, 0.5)
    temperature = rng.normal(65 + age * 2.0, 4.0)
    failure_probability = 1 / (1 + np.exp(-(-8 + 0.75 * vibration + 0.045 * temperature)))
    failure = rng.binomial(1, failure_probability)
    return pd.DataFrame(
        {
            "reading_id": [f"R-{i:06d}" for i in range(n_rows)],
            "machine_id": [f"M-{i:03d}" for i in machine],
            "timestamp": timestamps,
            "vibration": vibration.round(4),
            "temperature": temperature.round(3),
            "service_ticket_opened": failure,
            "failure_next_24h": failure,
        }
    )


def clean_control(n_rows: int = 1200, seed: int = 23) -> pd.DataFrame:
    """A clean dataset with signal but no deliberate critical audit trap."""

    rng = np.random.default_rng(seed)
    x1 = rng.normal(size=n_rows)
    x2 = rng.normal(size=n_rows)
    category = rng.choice(["north", "south", "east", "west"], n_rows)
    category_effect = pd.Series(category).map({"north": 0.3, "south": -0.2, "east": 0.1, "west": 0})
    probability = 1 / (1 + np.exp(-(-0.3 + 0.8 * x1 - 0.55 * x2 + category_effect)))
    target = rng.binomial(1, probability)
    return pd.DataFrame({"feature_a": x1, "feature_b": x2, "region": category, "target": target})


DEMO_FACTORIES = {
    "loan_default": loan_default_trap,
    "readmission": readmission_entity_trap,
    "predictive_maintenance": maintenance_temporal_trap,
    "clean_control": clean_control,
}
