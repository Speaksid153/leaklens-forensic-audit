import React from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "motion/react";
import cleanControl from "../../demo_data/clean_control.csv?raw";
import loanDefault from "../../demo_data/loan_default.csv?raw";
import predictiveMaintenance from "../../demo_data/predictive_maintenance.csv?raw";
import readmission from "../../demo_data/readmission.csv?raw";
import { pythonRuntime } from "./pythonRuntime";
import type { AuditConfig, AuditResult, DatasetInfo, Finding, RuntimeStatus } from "./types";
import "./styles.css";

type Demo = {
  name: string;
  short: string;
  csv: string;
  target: string;
  entity: string | null;
  time: string | null;
};

const DEMOS: Demo[] = [
  { name: "Loan default trap", short: "Future outcome fields and repeated customers", csv: loanDefault, target: "defaulted", entity: "customer_id", time: "application_date" },
  { name: "Hospital readmission trap", short: "Patient overlap and identifier memorization", csv: readmission, target: "readmitted", entity: "patient_id", time: null },
  { name: "Predictive maintenance trap", short: "Temporal leakage across machine histories", csv: predictiveMaintenance, target: "failure_next_24h", entity: "machine_id", time: "timestamp" },
  { name: "Clean control", short: "A defensible baseline with no planted leakage", csv: cleanControl, target: "target", entity: null, time: null },
];

const SEVERITIES = ["Info", "Low", "Medium", "High", "Critical"];
const METRICS = ["roc_auc", "pr_auc", "balanced_accuracy", "f1"] as const;
const METRIC_LABELS: Record<string, string> = { roc_auc: "ROC-AUC", pr_auc: "PR-AUC", balanced_accuracy: "Balanced accuracy", f1: "F1" };

function Icon({ name }: { name: "lens" | "upload" | "shield" | "download" | "data" | "check" }) {
  const paths = {
    lens: <><circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 4 4"/></>,
    upload: <><path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5"/><path d="M5 14v5h14v-5"/></>,
    shield: <><path d="M12 3 5.5 5.7v5.8c0 4.3 2.7 7.6 6.5 9.5 3.8-1.9 6.5-5.2 6.5-9.5V5.7L12 3Z"/><path d="m9 12 2 2 4-4"/></>,
    download: <><path d="M12 4v11m0 0 4-4m-4 4-4-4"/><path d="M5 19h14"/></>,
    data: <><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></>,
    check: <path d="m6 12 4 4 8-9"/>,
  };
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function defaultPositive(labels: DatasetInfo["labels"]) {
  return labels.find((label) => label === 1) ?? labels.find((label) => ["1", "yes", "true", "positive"].includes(String(label).toLowerCase())) ?? labels.at(-1) ?? 1;
}

function escapeHtml(value: unknown) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char] ?? char);
}

async function evidenceReport(result: AuditResult, source: string, config: AuditConfig, csv: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(csv));
  const fingerprint = [...new Uint8Array(digest)].map((value) => value.toString(16).padStart(2, "0")).join("");
  const findings = result.findings.map((item) => `<article><span class="severity">${SEVERITIES[item.severity]}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.explanation)}</p><p><b>Action:</b> ${escapeHtml(item.recommendation)}</p></article>`).join("") || "<article><h3>No high-confidence trap detected</h3><p>Review assumptions before deployment.</p></article>";
  const stages = result.evaluation_stages.map((stage) => `<tr><td>${escapeHtml(stage.label)}</td><td>${stage.metrics.roc_auc.toFixed(3)}</td></tr>`).join("");
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>LeakLens audit — ${escapeHtml(source)}</title><style>body{margin:0;background:#070b14;color:#e2e8f0;font:15px Inter,system-ui,sans-serif}main{max-width:980px;margin:auto;padding:48px 24px}h1{font-size:42px;letter-spacing:-.04em}.kicker,.severity{color:#67e8f9;text-transform:uppercase;letter-spacing:.13em;font-size:11px;font-weight:800}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:28px 0}.metric,article,.panel{background:#0f172a;border:1px solid #243047;border-radius:14px;padding:18px}.metric b{display:block;font-size:30px;margin-top:5px}article{margin:10px 0}p,td{color:#a8b7cc;line-height:1.55}table{width:100%;border-collapse:collapse}td{padding:10px;border-bottom:1px solid #243047}code{word-break:break-all;color:#c4b5fd}@media(max-width:650px){.grid{grid-template-columns:1fr}}</style></head><body><main><span class="kicker">Portable forensic evidence</span><h1>LeakLens audit report</h1><p>Source: ${escapeHtml(source)} · ${result.dataset.rows.toLocaleString()} rows · ${result.dataset.columns} columns</p><section class="grid"><div class="metric">Reliability<b>${result.reliability.score}/100</b></div><div class="metric">Naive ROC-AUC<b>${result.naive_evaluation.metrics.roc_auc.toFixed(3)}</b></div><div class="metric">Trusted ROC-AUC<b>${result.trustworthy_evaluation.metrics.roc_auc.toFixed(3)}</b></div></section><section class="panel"><h2>Score survival path</h2><table>${stages}</table></section><h2>Forensic findings</h2>${findings}<section class="panel"><h2>Reproducibility</h2><p>Target: ${escapeHtml(config.target)} · Entity: ${escapeHtml(config.entity_column)} · Time: ${escapeHtml(config.time_column)} · Positive class: ${escapeHtml(config.positive_label)} · Seed: 42 · Holdout: 25%</p><p>Dataset SHA-256: <code>${fingerprint}</code></p><p>Runtime: Python in WebAssembly · LeakLens 0.1.0</p></section></main></body></html>`;
}

function RuntimePill({ status, detail }: { status: RuntimeStatus; detail: string }) {
  return <div className={`runtime-pill runtime-pill--${status}`}><span className="runtime-dot"/><div><strong>{status === "ready" ? "Private runtime ready" : status === "error" ? "Runtime unavailable" : "Preparing audit engine"}</strong><small>{detail}</small></div></div>;
}

function SetupPanel({ info, config, setConfig, onRun, running }: { info: DatasetInfo; config: AuditConfig; setConfig: React.Dispatch<React.SetStateAction<AuditConfig>>; onRun: () => void; running: boolean }) {
  const select = (label: string, value: string | null, key: "target" | "entity_column" | "time_column", optional = false) => <label><span>{label}</span><select aria-label={label} value={value ?? ""} onChange={(event) => setConfig((current) => ({ ...current, [key]: event.target.value || null }))}>{optional && <option value="">None</option>}{info.columns.map((column) => <option key={column}>{column}</option>)}</select></label>;
  return <section className="setup-panel"><div className="section-kicker">02 / Experiment semantics</div><div className="form-grid">{select("Target column", config.target, "target")}{select("Entity column", config.entity_column, "entity_column", true)}{select("Time column", config.time_column, "time_column", true)}<label><span>Positive class</span><select aria-label="Positive class" value={JSON.stringify(config.positive_label)} onChange={(event) => setConfig((current) => ({ ...current, positive_label: JSON.parse(event.target.value) }))}>{info.labels.map((label, index) => <option key={`${String(label)}-${index}`} value={JSON.stringify(label)}>{String(label)}</option>)}</select></label></div><div className="setup-footer"><p>Binary classification · 25% holdout · deterministic seed 42</p><button className="primary-button" onClick={onRun} disabled={running}>{running ? <span className="spinner"/> : <Icon name="shield"/>}{running ? "Running forensic protocol…" : "Run forensic audit"}</button></div></section>;
}

function ScoreRing({ value }: { value: number }) {
  const tone = value >= 80 ? "safe" : value >= 60 ? "review" : "critical";
  return <div className={`score-ring score-ring--${tone}`} style={{ "--score": `${value * 3.6}deg` } as React.CSSProperties}><div><strong>{value}</strong><span>/ 100</span></div></div>;
}

function Overview({ result }: { result: AuditResult }) {
  const naive = result.naive_evaluation.metrics.roc_auc;
  const trusted = result.trustworthy_evaluation.metrics.roc_auc;
  const verdict = result.trustworthy_note ? "Do not claim model performance" : result.reliability.score >= 80 ? "Proceed to domain review" : "Do not trust the headline score";
  return <div className="overview-grid"><article className="score-card"><div className="card-head"><span>Evaluation reliability</span><b>{result.reliability.score >= 80 ? "Defensible" : result.reliability.score >= 60 ? "Review required" : "Compromised"}</b></div><ScoreRing value={result.reliability.score}/><p>A transparent score based on detector severity—not a model-safety certification.</p></article><div className="metric-grid"><article><span>Naive ROC-AUC</span><strong>{naive.toFixed(3)}</strong><small>Unfiltered random-split score</small></article><article><span>{result.trustworthy_note ? "Conservative baseline" : "Trusted ROC-AUC"}</span><strong>{trusted.toFixed(3)}</strong><small>After defensible controls</small></article><article><span>Metric inflation</span><strong>{result.metric_inflation_valid ? (naive - trusted).toFixed(3) : "N/A"}</strong><small>{result.metric_inflation_valid ? "Score that did not survive" : "Safe split was infeasible"}</small></article><article><span>Triggered findings</span><strong>{result.findings.length}</strong><small>Across the forensic detectors</small></article></div><article className="wide-card"><div className="card-head"><span>Score survival path</span><b>ROC-AUC</b></div>{result.evaluation_stages.map((stage) => <div className="survival-row" key={stage.label}><div><span>{stage.label}</span><strong>{stage.metrics.roc_auc.toFixed(3)}</strong></div><div className="bar"><motion.i initial={{ scaleX: 0 }} animate={{ scaleX: Math.max(.02, stage.metrics.roc_auc) }} transition={{ duration: .7 }}/></div></div>)}</article><article className="decision-card"><div className="section-kicker">Decision guidance</div><h3>{verdict}</h3><p>{result.trustworthy_note ?? `The defensible rerun used a ${result.trustworthy_evaluation.strategy.replaceAll("_", " ")} strategy.`}</p><p><b>Excluded:</b> {result.trustworthy_evaluation.excluded_columns.join(", ") || "None"}</p></article></div>;
}

function FindingCard({ finding }: { finding: Finding }) {
  const [open, setOpen] = React.useState(false);
  return <motion.article layout className={`finding finding--${SEVERITIES[finding.severity].toLowerCase()}`}><button className="finding-head" onClick={() => setOpen((value) => !value)} aria-expanded={open}><div><div className="finding-meta"><span>{SEVERITIES[finding.severity]}</span><i>{finding.detector.replaceAll("_", " ")}</i></div><h3>{finding.title}</h3><p>{finding.explanation}</p></div><b>{open ? "−" : "+"}</b></button><AnimatePresence>{open && <motion.div className="finding-detail" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}><div><strong>Recommended action</strong><p>{finding.recommendation}</p>{finding.affected_columns.length > 0 && <p><b>Affected:</b> {finding.affected_columns.join(", ")}</p>}<pre>{JSON.stringify(finding.evidence, null, 2)}</pre></div></motion.div>}</AnimatePresence></motion.article>;
}

function EvaluationView({ result }: { result: AuditResult }) {
  return <div className="evaluation-view"><article className="comparison"><div className="card-head"><span>Metric comparison</span><b>Naive vs. controlled</b></div>{METRICS.map((metric) => <div className="comparison-row" key={metric}><strong>{METRIC_LABELS[metric]}</strong><div><span>Naive</span><div className="bar bar--naive"><i style={{ transform: `scaleX(${result.naive_evaluation.metrics[metric]})` }}/></div><b>{result.naive_evaluation.metrics[metric].toFixed(3)}</b></div><div><span>Trusted</span><div className="bar bar--trusted"><i style={{ transform: `scaleX(${result.trustworthy_evaluation.metrics[metric]})` }}/></div><b>{result.trustworthy_evaluation.metrics[metric].toFixed(3)}</b></div></div>)}</article><div className="experiment-grid"><article><span>Naive experiment</span><h3>Stratified random split</h3><p>{result.naive_evaluation.train_rows.toLocaleString()} train / {result.naive_evaluation.test_rows.toLocaleString()} test rows</p><small>No columns excluded</small></article><article><span>{result.trustworthy_note ? "Conservative baseline" : "Trustworthy rerun"}</span><h3>{result.trustworthy_evaluation.strategy.replaceAll("_", " ")}</h3><p>{result.trustworthy_evaluation.train_rows.toLocaleString()} train / {result.trustworthy_evaluation.test_rows.toLocaleString()} test rows</p><small>{result.trustworthy_evaluation.excluded_columns.join(", ") || "No columns excluded"}</small></article></div></div>;
}

function Results({ result, sourceName, csv, config }: { result: AuditResult; sourceName: string; csv: string; config: AuditConfig }) {
  const [tab, setTab] = React.useState("overview");
  const [reportContent, setReportContent] = React.useState("");
  const tabs = [{ id: "overview", label: "Overview" }, { id: "evidence", label: `Evidence (${result.findings.length})` }, { id: "evaluation", label: "Evaluation" }, { id: "export", label: "Export" }];
  const jsonUrl = React.useMemo(() => URL.createObjectURL(new Blob([JSON.stringify(result, null, 2)], { type: "application/json" })), [result]);
  const reportUrl = React.useMemo(() => reportContent ? URL.createObjectURL(new Blob([reportContent], { type: "text/html" })) : "", [reportContent]);
  React.useEffect(() => {
    let active = true;
    evidenceReport(result, sourceName, config, csv).then((report) => { if (active) setReportContent(report); });
    return () => { active = false; };
  }, [result, sourceName, config, csv]);
  React.useEffect(() => () => URL.revokeObjectURL(jsonUrl), [jsonUrl]);
  React.useEffect(() => () => { if (reportUrl) URL.revokeObjectURL(reportUrl); }, [reportUrl]);
  return <motion.section className="results" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}><div className="result-meta"><span>{sourceName}</span><span>{result.dataset.rows.toLocaleString()} rows</span><span>{result.dataset.columns} columns</span><span>Processed locally</span></div><div className="tabs" role="tablist">{tabs.map((item) => <button key={item.id} role="tab" aria-selected={tab === item.id} onClick={() => setTab(item.id)}>{item.label}</button>)}</div><div className="tab-panel">{tab === "overview" && <Overview result={result}/>} {tab === "evidence" && <div className="findings">{result.findings.length ? result.findings.map((finding, index) => <FindingCard key={`${finding.detector}-${index}`} finding={finding}/>) : <div className="empty-state"><Icon name="check"/><h3>No high-confidence evaluation trap detected</h3><p>LeakLens found no configured statistical warning. Domain review is still required.</p></div>}</div>} {tab === "evaluation" && <EvaluationView result={result}/>} {tab === "export" && <div className="export-grid"><article><Icon name="download"/><h3>Reproducible audit JSON</h3><p>Machine-readable configuration, findings, metrics, and split strategy.</p><a href={jsonUrl} download="leaklens-audit.json">Download JSON</a></article><article><Icon name="data"/><h3>Standalone evidence report</h3><p>A portable HTML report with fingerprint and decision evidence.</p><a href={reportUrl || undefined} download="leaklens-evidence-report.html" aria-disabled={!reportUrl}>{reportUrl ? "Download HTML report" : "Preparing report…"}</a></article></div>}</div></motion.section>;
}

function App() {
  const reduceMotion = useReducedMotion();
  const [runtimeStatus, setRuntimeStatus] = React.useState<RuntimeStatus>("loading");
  const [runtimeDetail, setRuntimeDetail] = React.useState("Starting WebAssembly");
  const [sourceName, setSourceName] = React.useState(DEMOS[0].name);
  const [csv, setCsv] = React.useState(DEMOS[0].csv);
  const [info, setInfo] = React.useState<DatasetInfo | null>(null);
  const [config, setConfig] = React.useState<AuditConfig>({ target: DEMOS[0].target, entity_column: DEMOS[0].entity, time_column: DEMOS[0].time, positive_label: 1 });
  const [result, setResult] = React.useState<AuditResult | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [running, setRunning] = React.useState(false);
  const fileInput = React.useRef<HTMLInputElement>(null);

  const inspect = React.useCallback(async (text: string, nextConfig: Omit<AuditConfig, "positive_label">) => {
    const inspected = await pythonRuntime.inspectCsv(text, nextConfig.target);
    setInfo(inspected);
    setConfig({ ...nextConfig, positive_label: defaultPositive(inspected.labels) });
  }, []);

  React.useEffect(() => {
    pythonRuntime.initialize(setRuntimeDetail).then(async () => { setRuntimeStatus("ready"); await inspect(DEMOS[0].csv, { target: DEMOS[0].target, entity_column: DEMOS[0].entity, time_column: DEMOS[0].time }); }).catch((cause: unknown) => { setRuntimeStatus("error"); setRuntimeDetail(cause instanceof Error ? cause.message : "Runtime initialization failed"); });
  }, [inspect]);

  async function chooseDemo(demo: Demo) {
    setError(null); setResult(null); setSourceName(demo.name); setCsv(demo.csv);
    await inspect(demo.csv, { target: demo.target, entity_column: demo.entity, time_column: demo.time });
  }

  async function chooseFile(file?: File) {
    if (!file) return;
    if (file.size > 20 * 1024 * 1024) { setError("The file exceeds the 20 MB browser safety limit."); return; }
    if (!file.name.toLowerCase().endsWith(".csv")) { setError("LeakLens accepts CSV files only."); return; }
    try {
      setError(null); setResult(null); setInfo(null);
      const text = await file.text();
      const inspected = await pythonRuntime.inspectCsv(text);
      if (inspected.rows > 100_000) throw new Error("This build supports up to 100,000 rows per audit.");
      if (inspected.columns.length > 150) throw new Error("This build supports up to 150 columns per audit.");
      setCsv(text); setSourceName(file.name); setInfo(inspected);
      setConfig({ target: inspected.columns.at(-1) ?? "", entity_column: null, time_column: null, positive_label: defaultPositive(inspected.labels) });
    } catch (cause) { setError(cause instanceof Error ? cause.message : "The CSV could not be read."); }
  }

  async function updateTarget(next: AuditConfig) {
    setConfig(next); setResult(null);
    if (next.target !== config.target) {
      try { const inspected = await pythonRuntime.inspectCsv(csv, next.target); setInfo(inspected); setConfig({ ...next, positive_label: defaultPositive(inspected.labels) }); } catch (cause) { setError(cause instanceof Error ? cause.message : "Target inspection failed."); }
    }
  }

  async function runAudit() {
    setRunning(true); setError(null); setResult(null);
    try { setResult(await pythonRuntime.auditCsv(csv, config)); requestAnimationFrame(() => document.querySelector(".results")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" })); }
    catch (cause) { setError(cause instanceof Error ? cause.message : String(cause)); }
    finally { setRunning(false); }
  }

  return <MotionConfig reducedMotion="user"><div className="app-shell"><header><a className="brand" href="#top" aria-label="LeakLens home"><span className="brand-mark"><Icon name="lens"/></span><span><strong>LeakLens</strong><small>Forensic auditing</small></span></a><div className="header-note"><Icon name="shield"/> Files never leave your browser</div><RuntimePill status={runtimeStatus} detail={runtimeDetail}/></header><main id="top"><section className="hero"><motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}><div className="eyebrow">Forensic ML evaluation</div><h1>Find what your model score is <em>hiding.</em></h1><p>Upload a tabular classification dataset. LeakLens reproduces the tempting baseline, detects contamination paths, and rebuilds the evaluation under defensible split rules.</p><div className="trust-row"><span><Icon name="check"/> No API keys</span><span><Icon name="check"/> No server upload</span><span><Icon name="check"/> Reproducible evidence</span></div></motion.div><div className="protocol-card"><div className="protocol-head"><span>Audit protocol</span><b>Local execution</b></div>{[["01", "Reproduce", "Preserve the headline score"], ["02", "Interrogate", "Trace leakage evidence"], ["03", "Re-evaluate", "Apply defensible controls"]].map((row, index) => <motion.div className="protocol-row" key={row[0]} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .08 }}><span>{row[0]}</span><div><strong>{row[1]}</strong><small>{row[2]}</small></div><i/></motion.div>)}</div></section><section className="source-section"><div className="section-heading"><div><div className="section-kicker">01 / Data source</div><h2>Choose evidence to audit</h2></div><button className="upload-button" onClick={() => fileInput.current?.click()} disabled={runtimeStatus !== "ready"}><Icon name="upload"/> Upload CSV</button><input ref={fileInput} type="file" accept=".csv,text/csv" hidden onChange={(event) => chooseFile(event.target.files?.[0])}/></div><div className="demo-grid">{DEMOS.map((demo) => <button key={demo.name} className={sourceName === demo.name ? "demo-card demo-card--active" : "demo-card"} onClick={() => chooseDemo(demo)} disabled={runtimeStatus !== "ready"}><span>{demo.name}</span><p>{demo.short}</p><small>{sourceName === demo.name ? "Selected" : "Load dataset"}</small></button>)}</div>{sourceName && <div className="file-strip"><Icon name="data"/><div><strong>{sourceName}</strong><span>{info ? `${info.rows.toLocaleString()} rows · ${info.columns.length} columns` : "Inspecting schema…"}</span></div><b>Browser memory only</b></div>}</section>{info && <SetupPanel info={info} config={config} setConfig={(action) => { const next = typeof action === "function" ? action(config) : action; void updateTarget(next); }} onRun={runAudit} running={running}/>}<AnimatePresence>{error && <motion.div className="error-banner" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} role="alert"><strong>Audit stopped</strong><span>{error.replace(/^ValueError:\s*/, "")}</span><button onClick={() => setError(null)}>Dismiss</button></motion.div>}</AnimatePresence>{result && <Results result={result} sourceName={sourceName} csv={csv} config={config}/>}</main><footer><div className="brand"><span className="brand-mark"><Icon name="lens"/></span><span><strong>LeakLens</strong><small>Evidence before confidence.</small></span></div><p>Runs entirely in your browser with Python and WebAssembly. Refreshing clears all uploaded data.</p><a href="https://github.com/Speaksid153/leaklens-forensic-audit" target="_blank" rel="noreferrer">View source ↗</a></footer></div></MotionConfig>;
}

createRoot(document.getElementById("root")!).render(<React.StrictMode><App/></React.StrictMode>);
