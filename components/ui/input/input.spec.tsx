import { expect, test } from "@playwright/experimental-ct-react";
import Input from "./Input";

let component: Awaited<
  ReturnType<Parameters<Parameters<(typeof test)["beforeEach"]>[0]>[0]["mount"]>
>;

test.beforeEach(async ({ mount }) => (component = await mount(<Input />)));

test("it should render the Input", async () => {
  expect(component).toBeDefined();
});
