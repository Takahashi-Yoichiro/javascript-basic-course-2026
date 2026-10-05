import { describe, expect, it } from "vitest";
import {
  convertToEscapeSequenceByIf,
  convertToEscapeSequenceBySwitch,
} from "./index.js";

const converters = [
  ["if-else 版", convertToEscapeSequenceByIf],
  ["switch 版", convertToEscapeSequenceBySwitch],
];

describe.each(converters)("%s", (_name, convert) => {
  it("各対象文字を対応するエスケープ表記に変換する", () => {
    const input = "\0\b\t\n\v\f\r\"'\\";

    expect(convert(input)).toBe("\\0\\b\\t\\n\\v\\f\\r\\\"\\'\\\\");
  });

  it("対象文字を含まない文字列はそのまま返す", () => {
    const input = "JavaScript の文字列";

    expect(convert(input)).toBe(input);
  });

  it("空文字列は空文字列のまま返す", () => {
    expect(convert("")).toBe("");
  });

  it("対象文字と通常文字が混在していても順序を保って変換する", () => {
    expect(convert("A\nB\\C\tD")).toBe("A\\nB\\\\C\\tD");
  });
});
