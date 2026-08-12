import contractsSource from "../../leaklens/contracts.py?raw";
import orchestrationSource from "../../leaklens/orchestration.py?raw";
import evaluationSource from "../../leaklens/evaluation.py?raw";
import detectorsInitSource from "../../leaklens/detectors/__init__.py?raw";
import duplicatesSource from "../../leaklens/detectors/duplicates.py?raw";
import entityOverlapSource from "../../leaklens/detectors/entity_overlap.py?raw";
import identifiersSource from "../../leaklens/detectors/identifiers.py?raw";
import suspiciousFeaturesSource from "../../leaklens/detectors/suspicious_features.py?raw";
import temporalSource from "../../leaklens/detectors/temporal.py?raw";
import type { AuditConfig, AuditResult, DatasetInfo } from "./types";

type PyProxy = { toJs(options?: unknown): unknown; destroy(): void };
type Pyodide = {
  FS: { mkdirTree(path: string): void; writeFile(path: string, value: string): void };
  loadPackage(packages: string[]): Promise<void>;
  runPythonAsync(code: string, options?: { globals?: unknown }): Promise<unknown>;
  globals: { set(name: string, value: unknown): void; delete(name: string): void };
};

declare global {
  interface Window {
    loadPyodide?: (options: { indexURL: string }) => Promise<Pyodide>;
  }
}

const PYODIDE_VERSION = "0.29.2";
const INDEX_URL = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;

const sources: Record<string, string> = {
  "/app/leaklens/__init__.py": '"""LeakLens browser runtime."""\n',
  "/app/leaklens/contracts.py": contractsSource,
  "/app/leaklens/orchestration.py": orchestrationSource,
  "/app/leaklens/evaluation.py": evaluationSource,
  "/app/leaklens/detectors/__init__.py": detectorsInitSource,
  "/app/leaklens/detectors/duplicates.py": duplicatesSource,
  "/app/leaklens/detectors/entity_overlap.py": entityOverlapSource,
  "/app/leaklens/detectors/identifiers.py": identifiersSource,
  "/app/leaklens/detectors/suspicious_features.py": suspiciousFeaturesSource,
  "/app/leaklens/detectors/temporal.py": temporalSource,
};

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.loadPyodide) return resolve();
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("The secure Python runtime could not be downloaded."));
    document.head.appendChild(script);
  });
}

function fromProxy<T>(value: unknown): T {
  if (value && typeof value === "object" && "toJs" in value) {
    const proxy = value as PyProxy;
    const converted = proxy.toJs({ dict_converter: Object.fromEntries });
    proxy.destroy();
    return converted as T;
  }
  return value as T;
}

class BrowserPythonRuntime {
  private runtime: Pyodide | null = null;
  private initialization: Promise<void> | null = null;

  initialize(onProgress?: (message: string) => void): Promise<void> {
    if (this.initialization) return this.initialization;
    this.initialization = this.doInitialize(onProgress);
    return this.initialization;
  }

  private async doInitialize(onProgress?: (message: string) => void) {
    onProgress?.("Loading private browser runtime");
    await loadScript(`${INDEX_URL}pyodide.js`);
    if (!window.loadPyodide) throw new Error("Python runtime loader was unavailable.");
    this.runtime = await window.loadPyodide({ indexURL: INDEX_URL });
    onProgress?.("Loading pandas and scikit-learn");
    await this.runtime.loadPackage(["numpy", "pandas", "scikit-learn"]);
    onProgress?.("Installing the LeakLens audit engine");
    this.runtime.FS.mkdirTree("/app/leaklens/detectors");
    Object.entries(sources).forEach(([path, source]) => this.runtime?.FS.writeFile(path, source));
    await this.runtime.runPythonAsync(`
import sys
if "/app" not in sys.path:
    sys.path.insert(0, "/app")
from leaklens.contracts import DatasetConfig
from leaklens.orchestration import audit
`);
    onProgress?.("Runtime ready");
  }

  private requireRuntime(): Pyodide {
    if (!this.runtime) throw new Error("The audit runtime is not ready yet.");
    return this.runtime;
  }

  async inspectCsv(csvText: string, target?: string): Promise<DatasetInfo> {
    const runtime = this.requireRuntime();
    runtime.globals.set("csv_text", csvText);
    runtime.globals.set("selected_target", target ?? "");
    try {
      const proxy = await runtime.runPythonAsync(`
import io
import pandas as pd
_inspection_df = pd.read_csv(io.StringIO(csv_text))
_target = selected_target if selected_target in _inspection_df.columns else str(_inspection_df.columns[-1])
{
    "columns": [str(column) for column in _inspection_df.columns],
    "rows": int(len(_inspection_df)),
    "labels": _inspection_df[_target].dropna().drop_duplicates().head(100).tolist(),
}
`);
      return fromProxy<DatasetInfo>(proxy);
    } finally {
      runtime.globals.delete("csv_text");
      runtime.globals.delete("selected_target");
    }
  }

  async auditCsv(csvText: string, config: AuditConfig): Promise<AuditResult> {
    const runtime = this.requireRuntime();
    runtime.globals.set("csv_text", csvText);
    runtime.globals.set("config_json", JSON.stringify(config));
    try {
      const resultJson = await runtime.runPythonAsync(`
import io
import json
import pandas as pd
_browser_config = json.loads(config_json)
_browser_df = pd.read_csv(io.StringIO(csv_text))
_browser_result = audit(_browser_df, DatasetConfig(**_browser_config))
json.dumps(_browser_result, default=lambda value: int(value))
`);
      return JSON.parse(String(resultJson)) as AuditResult;
    } finally {
      runtime.globals.delete("csv_text");
      runtime.globals.delete("config_json");
    }
  }
}

export const pythonRuntime = new BrowserPythonRuntime();
