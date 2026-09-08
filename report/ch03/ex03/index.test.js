import { describe, it, expect } from "vitest"; // 明示的なimportが必要。
import { compare } from "./index.js";

describe("ch03/ex03", () => {
  it("0.3 - 0.2 === 0.1", async () => {
    expect(compare(0.3 - 0.2, 0.1)).toBe(true);
  });
  it("0.2 - 0.1 === 0.1", async () => {
    expect(compare(0.2 - 0.1, 0.1)).toBe(true);
  });
});
