import contractsSource from "../../leaklens/contracts.py?raw";
import orchestrationSource from "../../leaklens/orchestration.py?raw";
import evaluationSource from "../../leaklens/evaluation.py?raw";
import detectorsInitSource from "../../leaklens/detectors/__init__.py?raw";
import duplicatesSource from "../../leaklens/detectors/duplicates.py?raw";
import entityOverlapSource from "../../leaklens/detectors/entity_overlap.py?raw";
import identifiersSource from "../../leaklens/detectors/identifiers.py?raw";
import suspiciousFeaturesSource from "../../leaklens/detectors/suspicious_features.py?raw";
import temporalSource from "../../leaklens/detectors/temporal.py?raw";
import reportingSource from "../../leaklens/reporting.py?raw";
import type { AuditConfig, AuditResult } from "./types";

declare function importScripts(...urls: string[]): void;

type Pyodide = {
  FS: { mkdirTree(path: string): void; writeFile(path: string, value: string): void };
  loadPackage(packages: string[]): Promise<void>;
  runPythonAsync(code: string): Promise<unknown>;
  globals: { set(name: string, value: unknown): void; delete(name: string): void };
};

type WorkerRequest =
  | { id: number; operation: "initialize" }
  | { id: number; operation: "inspect"; csvText: string; target?: string }
  | { id: number; operation: "audit"; csvText: string; config: AuditConfig }
  | { id: number; operation: "report"; csvText: string; config: AuditConfig; sourceName: string; result: AuditResult };

const scope = self as unknown as {
  loadPyodide?: (options: { indexURL: string }) => Promise<Pyodide>;
  postMessage(message: unknown): void;
  onmessage: ((event: MessageEvent<WorkerRequest>) => void) | null;
};
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
  "/app/leaklens/reporting.py": reportingSource,
};

let runtime: Pyodide | null = null;
let initialization: Promise<void> | null = null;
let taskQueue = Promise.resolve();

function progress(id: number, message: string) {
  scope.postMessage({ id, type: "progress", message });
}

function cleanError(error: unknown): string {
  const raw = error instanceof Error ? error.message : String(error);
  const lines = raw.split("\n").map((line) => line.trim()).filter(Boolean);
  return (lines.at(-1) ?? "The audit failed unexpectedly.").replace(
    /^(?:[A-Za-z_][\w.]*\.)?[A-Za-z]+Error:\s*/,
    "",
  );
}

async function initialize(id: number) {
  if (runtime) return;
  if (!initialization) {
    initialization = (async () => {
      progress(id, "Loading private browser runtime");
      importScripts(`${INDEX_URL}pyodide.js`);
      if (!scope.loadPyodide) throw new Error("Python runtime loader was unavailable.");
      runtime = await scope.loadPyodide({ indexURL: INDEX_URL });
      progress(id, "Loading pandas and scikit-learn");
      await runtime.loadPackage(["numpy", "pandas", "scikit-learn"]);
      progress(id, "Installing the LeakLens audit engine");
      runtime.FS.mkdirTree("/app/leaklens/detectors");
      Object.entries(sources).forEach(([path, source]) => runtime?.FS.writeFile(path, source));
      await runtime.runPythonAsync(`
import sys
if "/app" not in sys.path:
    sys.path.insert(0, "/app")
from leaklens.contracts import DatasetConfig
from leaklens.orchestration import audit
from leaklens.reporting import build_html_report
`);
      progress(id, "Runtime ready");
    })().catch((error) => {
      initialization = null;
      throw error;
    });
  }
  await initialization;
}

async function inspect(csvText: string, target?: string) {
  if (!runtime) throw new Error("The audit runtime is not ready yet.");
  runtime.globals.set("csv_text", csvText);
  runtime.globals.set("selected_target", target ?? "");
  try {
    const result = await runtime.runPythonAsync(`
import io
import json
import pandas as pd
_inspection_df = pd.read_csv(io.StringIO(csv_text))
if len(_inspection_df.columns) == 0:
    raise ValueError("The CSV has no columns.")
_target = selected_target if selected_target in _inspection_df.columns else str(_inspection_df.columns[-1])
json.dumps({
    "columns": [str(column) for column in _inspection_df.columns],
    "rows": int(len(_inspection_df)),
    "labels": _inspection_df[_target].dropna().drop_duplicates().head(101).tolist(),
})
`);
    return JSON.parse(String(result));
  } finally {
    runtime.globals.delete("csv_text");
    runtime.globals.delete("selected_target");
  }
}

async function runAudit(csvText: string, config: AuditConfig) {
  if (!runtime) throw new Error("The audit runtime is not ready yet.");
  runtime.globals.set("csv_text", csvText);
  runtime.globals.set("config_json", JSON.stringify(config));
  try {
    const result = await runtime.runPythonAsync(`
import io
import json
import pandas as pd
_browser_config = json.loads(config_json)
_browser_df = pd.read_csv(io.StringIO(csv_text))
_browser_result = audit(_browser_df, DatasetConfig(**_browser_config))
json.dumps(_browser_result, default=lambda value: int(value))
`);
    return JSON.parse(String(result));
  } finally {
    runtime.globals.delete("csv_text");
    runtime.globals.delete("config_json");
  }
}

async function buildReport(csvText: string, config: AuditConfig, sourceName: string, result: AuditResult) {
  if (!runtime) throw new Error("The audit runtime is not ready yet.");
  runtime.globals.set("csv_text", csvText);
  runtime.globals.set("config_json", JSON.stringify(config));
  runtime.globals.set("source_name", sourceName);
  runtime.globals.set("result_json", JSON.stringify(result));
  try {
    return String(await runtime.runPythonAsync(`
import io
import json
import pandas as pd
_report_df = pd.read_csv(io.StringIO(csv_text))
_report_config = DatasetConfig(**json.loads(config_json))
build_html_report(json.loads(result_json), _report_df, _report_config, source_name)
`));
  } finally {
    runtime.globals.delete("csv_text");
    runtime.globals.delete("config_json");
    runtime.globals.delete("source_name");
    runtime.globals.delete("result_json");
  }
}

scope.onmessage = ({ data }) => {
  taskQueue = taskQueue.then(async () => {
    try {
      await initialize(data.id);
      let result: unknown;
      if (data.operation === "inspect") result = await inspect(data.csvText, data.target);
      else if (data.operation === "audit") result = await runAudit(data.csvText, data.config);
      else if (data.operation === "report") result = await buildReport(data.csvText, data.config, data.sourceName, data.result);
      scope.postMessage({ id: data.id, type: "success", result });
    } catch (error) {
      scope.postMessage({ id: data.id, type: "error", message: cleanError(error) });
    }
  });
};
