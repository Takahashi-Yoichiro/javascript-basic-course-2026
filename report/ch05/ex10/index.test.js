import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const runScript = (filename) =>
  execFileSync(process.execPath, [fileURLToPath(new URL(filename, import.meta.url))], {
    encoding: "utf8",
  });

describe("with 文を使ったコードと使わないコード", () => {
  it("同じ標準出力になる", () => {
    expect(runScript("./index.js")).toBe(runScript("./index.cjs"));
  });
});
