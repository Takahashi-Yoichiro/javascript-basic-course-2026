import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { resize1, resize2 } from "./index.js";

describe.each([
  ["resize1", resize1],
  ["resize2", resize2],
])("%s", (name, resize) => {
  let logSpy;

  beforeEach(() => {
    logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test.each([
    ["undefined", undefined, { maxWidth: 600, maxHeight: 480 }],
    ["空オブジェクト", {}, { maxWidth: 600, maxHeight: 480 }],
    ["幅のみ指定", { maxWidth: 800 }, { maxWidth: 800, maxHeight: 480 }],
    ["高さのみ指定", { maxHeight: 720 }, { maxWidth: 600, maxHeight: 720 }],
    ["幅と高さを指定", { maxWidth: 800, maxHeight: 720 }, { maxWidth: 800, maxHeight: 720 }],
  ])("%s の場合に期待するサイズをログ出力する", (caseName, params, expected) => {
    resize(params);

    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(expected);
  });
});
