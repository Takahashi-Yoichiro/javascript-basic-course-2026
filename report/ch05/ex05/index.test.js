import { describe, expect, it } from "vitest";
import { f } from "./index.js";

describe("f", () => {
  it("偶数の値を持つプロパティだけを含む新しいオブジェクトを返す", () => {
    const input = { x: 1, y: 2, z: 3 };

    const result = f(input);

    expect(result).toEqual({ y: 2 });
    expect(result).not.toBe(input);
  });

  it("0と負の偶数を含め、奇数を除外する", () => {
    const input = { zero: 0, positiveEven: 4, negativeEven: -2, odd: -3 };

    expect(f(input)).toEqual({ zero: 0, positiveEven: 4, negativeEven: -2 });
  });

  it("空のオブジェクトには空のオブジェクトを返す", () => {
    expect(f({})).toEqual({});
  });

  it("入力オブジェクトを変更しない", () => {
    const input = { odd: 1, even: 2 };
    const original = { ...input };

    f(input);

    expect(input).toEqual(original);
  });
});
