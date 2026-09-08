import { test, expect } from "vitest";
import { equalArrays } from "./index.js";

test("ch03-ex07", () => {
  // length プロパティだけを比較しているので、追加プロパティが異なっても equalArrays は true を返す
  // x[0], y[0] は undefined なので比較対象外
  const x = { length: 0, additional: "x" };
  const y = { length: 0, additional: "y" };

  expect(equalArrays(x, y)).toBe(true);
  expect(x).not.toEqual(y);
});
