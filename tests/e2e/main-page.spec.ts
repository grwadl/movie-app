import { expect, test } from "@playwright/test";
import { Environment } from "../configs/environment";

test("it should load main page with the title", async ({ page }) => {
  if (!Environment.APP_URL) throw new Error("cannot find the app url");

  await page.goto(Environment.APP_URL);

  await expect(page.locator("h4").first()).toContainText("Trending");
});
