import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  timeout: 720_000,
  expect: { timeout: 60_000 },
  fullyParallel: false,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    ...devices["Desktop Chrome"],
    baseURL: "http://127.0.0.1:4173/leaklens-forensic-audit/",
    channel: "chrome",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "pnpm run preview --host 127.0.0.1",
    url: "http://127.0.0.1:4173/leaklens-forensic-audit/",
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
