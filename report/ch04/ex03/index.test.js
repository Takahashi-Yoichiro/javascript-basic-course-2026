import { describe, expect, test } from "vitest";
import { sub } from "./index.js";

describe("32 ビット整数の減算", () => {
  test.each([
    [8, 3, 5],
    [3, 8, -5],
    [0, 0, 0],
    [7, 7, 0],
    [-5, 3, -8],
    [-5, -3, -2],
  ])("sub(%i, %i) は %i を返す", (a, b, expected) => {
    expect(sub(a, b)).toBe(expected);
  });
});
