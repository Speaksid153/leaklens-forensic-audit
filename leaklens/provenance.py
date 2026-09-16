"""Deterministic audit provenance shared by every LeakLens frontend."""

from __future__ import annotations

import hashlib
import json
import platform
import sys
from importlib.metadata import version
from typing import Any

import pandas as pd

from leaklens.contracts import DatasetConfig

AUDIT_SCHEMA_VERSION = "1.0"
ENGINE_VERSION = "0.1.0"


def dataframe_fingerprint(frame: pd.DataFrame) -> str:
    """Return a stable content-and-schema fingerprint for an audit input."""

    digest = hashlib.sha256()
    digest.update(json.dumps(list(map(str, frame.columns))).encode())
    digest.update(json.dumps(list(map(str, frame.dtypes))).encode())
    digest.update(pd.util.hash_pandas_object(frame, index=True).values.tobytes())
    return digest.hexdigest()


def _json_scalar(value: Any) -> Any:
    return value.item() if hasattr(value, "item") else value


def build_provenance(frame: pd.DataFrame, config: DatasetConfig) -> dict[str, Any]:
    """Capture the inputs and runtime needed to reproduce an audit."""

    return {
        "schema_version": AUDIT_SCHEMA_VERSION,
        "engine_version": ENGINE_VERSION,
        "dataset_sha256": dataframe_fingerprint(frame),
        "configuration": {
            "target": config.target,
            "entity_column": config.entity_column,
            "time_column": config.time_column,
            "positive_label": _json_scalar(config.positive_label),
            "random_state": config.random_state,
            "test_size": config.test_size,
        },
        "runtime": {
            "python": platform.python_version(),
            "platform": sys.platform,
            "pandas": version("pandas"),
            "scikit_learn": version("scikit-learn"),
        },
    }
