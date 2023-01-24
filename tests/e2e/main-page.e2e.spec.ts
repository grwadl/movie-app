import { expect, test } from "@playwright/test";
import { Environment } from "../configs/environment";

test("it should load main page with the title", async ({ page }) => {
  if (!Environment.APP_URL) throw new Error("cannot find the app url");

  await page.goto(Environment.APP_URL);

  await expect(page.locator("h4").first()).toContainText("Trending");
});

test("it should go to the certain movie page after clicking on the card-link", async ({
  page,
}) => {
  if (!Environment.APP_URL) throw new Error("cannot find the app url");
  await page.goto(Environment.APP_URL);

  const moviePoster = await page.getByAltText("poster image").first();
  await moviePoster.click();
  expect(page.url()).not.toEqual(Environment.APP_URL);
});
