import { describe, expect, test } from "vitest";
import { add, sub, mul, div } from "./index.js";

describe("複素数の演算", () => {
  test.each([
    [
      { re: 1, im: 2 },
      { re: 3, im: 4 },
      { re: 4, im: 6 },
    ],
    [
      { re: -2, im: 5 },
      { re: 7, im: -3 },
      { re: 5, im: 2 },
    ],
  ])("add(%o, %o) は和を返す", (a, b, expected) => {
    expect(add(a, b)).toEqual(expected);
  });

  test.each([
    [
      { re: 1, im: 2 },
      { re: 3, im: 4 },
      { re: -2, im: -2 },
    ],
    [
      { re: -2, im: 5 },
      { re: 7, im: -3 },
      { re: -9, im: 8 },
    ],
  ])("sub(%o, %o) は差を返す", (a, b, expected) => {
    expect(sub(a, b)).toEqual(expected);
  });

  test.each([
    [
      { re: 1, im: 2 },
      { re: 3, im: 4 },
      { re: -5, im: 10 },
    ],
    [
      { re: -2, im: 5 },
      { re: 7, im: -3 },
      { re: 1, im: 41 },
    ],
  ])("mul(%o, %o) は積を返す", (a, b, expected) => {
    expect(mul(a, b)).toEqual(expected);
  });

  test.each([
    [
      { re: 1, im: 2 },
      { re: 3, im: 4 },
      { re: 0.44, im: 0.08 },
    ],
    [
      { re: 2, im: 0 },
      { re: 2, im: 0 },
      { re: 1, im: 0 },
    ],
  ])("div(%o, %o) は商を返す", (a, b, expected) => {
    expect(div(a, b)).toEqual(expected);
  });
});
