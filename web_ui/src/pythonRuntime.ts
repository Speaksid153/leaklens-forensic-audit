import type { AuditConfig, AuditResult, DatasetInfo } from "./types";

type WorkerRequest =
  | { id: number; operation: "initialize" }
  | { id: number; operation: "inspect"; csvText: string; target?: string }
  | { id: number; operation: "audit"; csvText: string; config: AuditConfig }
  | { id: number; operation: "report"; csvText: string; config: AuditConfig; sourceName: string; result: AuditResult }
  | { id: number; operation: "remediate"; csvText: string; result: AuditResult };

type WorkerCommand =
  | { operation: "initialize" }
  | { operation: "inspect"; csvText: string; target?: string }
  | { operation: "audit"; csvText: string; config: AuditConfig }
  | { operation: "report"; csvText: string; config: AuditConfig; sourceName: string; result: AuditResult }
  | { operation: "remediate"; csvText: string; result: AuditResult };

type WorkerResponse =
  | { id: number; type: "progress"; message: string }
  | { id: number; type: "success"; result: unknown }
  | { id: number; type: "error"; message: string };

type PendingRequest = {
  resolve: (value: unknown) => void;
  reject: (reason: Error) => void;
  onProgress?: (message: string) => void;
};

class BrowserPythonRuntime {
  private worker: Worker | null = null;
  private nextId = 1;
  private pending = new Map<number, PendingRequest>();
  private initialization: Promise<void> | null = null;

  private ensureWorker(): Worker {
    if (this.worker) return this.worker;
    this.worker = new Worker(new URL("./pythonWorker.ts", import.meta.url));
    this.worker.addEventListener("message", (event: MessageEvent<WorkerResponse>) => {
      const response = event.data;
      const pending = this.pending.get(response.id);
      if (!pending) return;
      if (response.type === "progress") {
        pending.onProgress?.(response.message);
        return;
      }
      this.pending.delete(response.id);
      if (response.type === "error") pending.reject(new Error(response.message));
      else pending.resolve(response.result);
    });
    this.worker.addEventListener("error", () => {
      const error = new Error("The private audit worker stopped unexpectedly. Refresh and retry.");
      this.pending.forEach(({ reject }) => reject(error));
      this.pending.clear();
      this.worker?.terminate();
      this.worker = null;
      this.initialization = null;
    });
    return this.worker;
  }

  private request<T>(request: WorkerCommand, onProgress?: (message: string) => void) {
    const id = this.nextId++;
    return new Promise<T>((resolve, reject) => {
      this.pending.set(id, {
        resolve: (value) => resolve(value as T),
        reject,
        onProgress,
      });
      this.ensureWorker().postMessage({ ...request, id } as WorkerRequest);
    });
  }

  initialize(onProgress?: (message: string) => void): Promise<void> {
    if (!this.initialization) {
      this.initialization = this.request<void>({ operation: "initialize" }, onProgress).catch(
        (error) => {
          this.initialization = null;
          throw error;
        },
      );
    }
    return this.initialization;
  }

  inspectCsv(csvText: string, target?: string): Promise<DatasetInfo> {
    return this.request<DatasetInfo>({ operation: "inspect", csvText, target });
  }

  auditCsv(csvText: string, config: AuditConfig): Promise<AuditResult> {
    return this.request<AuditResult>({ operation: "audit", csvText, config });
  }

  buildReport(csvText: string, config: AuditConfig, sourceName: string, result: AuditResult) {
    return this.request<string>({ operation: "report", csvText, config, sourceName, result });
  }

  buildCandidateCsv(csvText: string, result: AuditResult) {
    return this.request<string>({ operation: "remediate", csvText, result });
  }
}

export const pythonRuntime = new BrowserPythonRuntime();
