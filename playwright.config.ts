import type { PlaywrightTestConfig } from "@playwright/experimental-ct-react";
import { resolve } from "path";

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
    headless: true,
    ctPort: 3100,
    ctViteConfig: {
      resolve: {
        alias: {
          "@": resolve(__dirname),
        },
      },
    },
  },
};
export default config;
