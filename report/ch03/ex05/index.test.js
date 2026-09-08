import { describe, expect, it } from "vitest";
import { toCrLf, toLf } from "./index.js";

describe("改行コードの変換", () => {
  it("LF を CRLF に変換する", () => {
    expect(toCrLf("one\ntwo\nthree")).toBe("one\r\ntwo\r\nthree");
  });

  it("CRLF を二重変換しない", () => {
    expect(toCrLf("one\r\ntwo")).toBe("one\r\ntwo");
  });

  it("CRLF を LF に変換する", () => {
    expect(toLf("one\r\ntwo\r\nthree")).toBe("one\ntwo\nthree");
  });
});
