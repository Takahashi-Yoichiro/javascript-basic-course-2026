import { describe, it, expect } from "vitest"; // 明示的なimportが必要。
import { hndred_points_symbol } from "./index.js";

describe("ch03/ex04", () => {
  it("💯の長さが2であること", async () => {
    expect(hndred_points_symbol.length).toBe(2);
  });
  it("utf-16コードポイント表現と同値であること", async () => {
    expect(hndred_points_symbol).toBe("\uD83D\uDCAF");
  });
  it("utf-32コードポイント表現と同値であること", async () => {
    expect(hndred_points_symbol).toBe("\u{0001F4AF}");
  });
});
