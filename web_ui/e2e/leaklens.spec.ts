import { expect, test } from "@playwright/test";
import { readFile } from "node:fs/promises";
import path from "node:path";

test("uploaded evidence survives the complete private audit and export flow", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("requestfailed", (request) => {
    pageErrors.push(`${request.failure()?.errorText ?? "request failed"}: ${request.url()}`);
  });

  await page.goto("./");
  await expect(page.getByText("Private runtime ready")).toBeVisible({ timeout: 600_000 });

  await page.locator('input[type="file"]').setInputFiles(
    path.resolve("../demo_data/leaklens_leaky_example.csv"),
  );
  await expect(page.getByText("leaklens_leaky_example.csv")).toBeVisible();
  await expect(page.getByText(/620 rows/)).toBeVisible();

  await page.getByLabel("Target column").selectOption("defaulted");
  await page.getByLabel("Entity column").selectOption("customer_id");
  await page.getByLabel("Time column").selectOption("application_date");

  await page.evaluate(() => {
    (window as typeof window & { auditHeartbeat: number }).auditHeartbeat = 0;
    window.setInterval(() => {
      (window as typeof window & { auditHeartbeat: number }).auditHeartbeat += 1;
    }, 100);
  });
  await page.getByRole("button", { name: "Run forensic audit" }).click();

  await expect(page.getByText("Controlled ROC-AUC")).toBeVisible({ timeout: 180_000 });
  await expect(page.getByText("0.611", { exact: true }).first()).toBeVisible();
  await expect(page.getByRole("tab", { name: "Evidence (5)" })).toBeVisible();
  expect(await page.evaluate(() => (window as typeof window & { auditHeartbeat: number }).auditHeartbeat)).toBeGreaterThan(1);

  await page.getByRole("tab", { name: "Export" }).click();
  await expect(page.getByText("Audit schema 1.0")).toBeVisible();
  await expect(page.getByRole("link", { name: "Download HTML report" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Download candidate CSV" })).toBeVisible();

  const jsonDownloadPromise = page.waitForEvent("download");
  await page.getByRole("link", { name: "Download JSON" }).click();
  const jsonDownload = await jsonDownloadPromise;
  const jsonPath = await jsonDownload.path();
  const audit = JSON.parse(await readFile(jsonPath!, "utf8"));
  expect(audit.provenance.schema_version).toBe("1.0");
  expect(audit.provenance.dataset_sha256).toMatch(/^[a-f0-9]{64}$/);
  expect(audit.trustworthy_evaluation.metrics.roc_auc).toBeCloseTo(0.61102, 5);

  const candidateDownloadPromise = page.waitForEvent("download");
  await page.getByRole("link", { name: "Download candidate CSV" }).click();
  const candidateDownload = await candidateDownloadPromise;
  const candidatePath = await candidateDownload.path();
  const candidate = await readFile(candidatePath!, "utf8");
  expect(candidate.split(/\r?\n/)[0]).toContain("defaulted");
  expect(candidate.split(/\r?\n/)[0]).not.toContain("customer_id");

  expect(pageErrors).toEqual([]);
});
