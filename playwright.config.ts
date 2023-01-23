import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  workers: 5,
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: "http://localhost:3000",
    headless: false,
  },
};
export default config;
