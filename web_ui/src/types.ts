export type RuntimeStatus = "loading" | "ready" | "error";

export type DatasetInfo = {
  columns: string[];
  rows: number;
  labels: Array<string | number | boolean>;
};

export type MetricSet = Record<
  "accuracy" | "balanced_accuracy" | "precision" | "recall" | "f1" | "roc_auc" | "pr_auc",
  number
>;

export type Evaluation = {
  strategy: string;
  metrics: MetricSet;
  train_rows: number;
  test_rows: number;
  train_positive_rate: number;
  test_positive_rate: number;
  excluded_columns: string[];
};

export type Finding = {
  detector: string;
  severity: number;
  title: string;
  explanation: string;
  recommendation: string;
  evidence: Record<string, unknown>;
  affected_columns: string[];
  remediable: boolean;
};

export type AuditResult = {
  provenance: {
    schema_version: string;
    engine_version: string;
    dataset_sha256: string;
    configuration: AuditConfig & { random_state: number; test_size: number };
    runtime: { python: string; platform: string; pandas: string; scikit_learn: string };
  };
  dataset: { rows: number; columns: number; target: string; positive_rate: number };
  findings: Finding[];
  reliability: { score: number; deductions: Record<string, number> };
  naive_evaluation: Evaluation;
  trustworthy_evaluation: Evaluation;
  trustworthy_note: string | null;
  evaluation_stages: Array<{ label: string; metrics: MetricSet } & Evaluation>;
  metric_inflation_valid: boolean;
  metric_inflation: MetricSet;
};

export type AuditConfig = {
  target: string;
  entity_column: string | null;
  time_column: string | null;
  positive_label: string | number | boolean;
};
