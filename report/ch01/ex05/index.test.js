import { describe, it, expect } from "vitest"; // 明示的なimportが必要。
import { abs, sum, factorial } from "./index.js";

// TypeScript の場合は以下:
// import { abs, sum, factorial } from "./index.ts";

describe("math", () => {
  describe("abs", () => {
    it("returns same value when positive value given", () => {
      expect(abs(42)).toBe(42);
    });

    it("returns negated value when negative value given", () => {
      expect(abs(-42)).toBe(42);
    });

    it("returns zero value when zero given", () => {
      expect(abs(0)).toBe(0);
    });
  });

  // 以下に sum, factorial のテストを記載せよ
  describe("sum", () => {
    it("returns sum of positive values when positive values given", () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });

    it("returns sum of negative values when negative values given", () => {
      expect(sum([-1, -2, -3, -4, -5])).toBe(-15);
    });

    it("returns zero when array containing zero given", () => {
      expect(sum([0])).toBe(0);
    });
  });

  describe("factorial", () => {
    it("returns factorial of positive values when positive values given", () => {
      expect(factorial(5)).toBe(120);
    });

    it("returns 1 when zero given", () => {
      expect(factorial(0)).toBe(1);
    });
  });
});
