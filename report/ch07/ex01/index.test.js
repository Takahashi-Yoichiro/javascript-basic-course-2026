import { describe, it, expect } from "vitest";
import { add, multiply } from "./index.js";

describe("add (行列の加算)", () => {
  it("同じサイズの正方行列を加算できる", () => {
    expect(
      add(
        [
          [1, 2],
          [3, 4],
        ],
        [
          [5, 6],
          [7, 8],
        ],
      ),
    ).toEqual([
      [6, 8],
      [10, 12],
    ]);
  });

  it("非正方行列(2x3)を加算できる", () => {
    expect(
      add(
        [
          [1, 2, 3],
          [4, 5, 6],
        ],
        [
          [6, 5, 4],
          [3, 2, 1],
        ],
      ),
    ).toEqual([
      [7, 7, 7],
      [7, 7, 7],
    ]);
  });

  it("1x1 行列を加算できる", () => {
    expect(add([[2]], [[3]])).toEqual([[5]]);
  });

  it("負数・小数を扱える", () => {
    expect(add([[-1, 0.5]], [[1, 0.25]])).toEqual([[0, 0.75]]);
  });

  it("入力を破壊しない", () => {
    const a = [
      [1, 2],
      [3, 4],
    ];
    const b = [
      [1, 1],
      [1, 1],
    ];
    add(a, b);
    expect(a).toEqual([
      [1, 2],
      [3, 4],
    ]);
    expect(b).toEqual([
      [1, 1],
      [1, 1],
    ]);
  });

  it("行数が異なる場合は RangeError を投げる", () => {
    expect(() =>
      add(
        [[1, 2]],
        [
          [1, 2],
          [3, 4],
        ],
      ),
    ).toThrow(RangeError);
  });

  it("列数が異なる場合は RangeError を投げる", () => {
    expect(() =>
      add(
        [
          [1, 2],
          [3, 4],
        ],
        [[1], [2]],
      ),
    ).toThrow(RangeError);
  });

  it("転置の関係にあるサイズ(2x3 と 3x2)は RangeError を投げる", () => {
    expect(() =>
      add(
        [
          [1, 2, 3],
          [4, 5, 6],
        ],
        [
          [1, 2],
          [3, 4],
          [5, 6],
        ],
      ),
    ).toThrow(RangeError);
  });
});

describe("multiply (行列の乗算)", () => {
  it("正方行列同士を乗算できる", () => {
    expect(
      multiply(
        [
          [1, 2],
          [3, 4],
        ],
        [
          [5, 6],
          [7, 8],
        ],
      ),
    ).toEqual([
      [19, 22],
      [43, 50],
    ]);
  });

  it("2x3 と 3x2 の乗算結果は 2x2 になる", () => {
    expect(
      multiply(
        [
          [1, 2, 3],
          [4, 5, 6],
        ],
        [
          [7, 8],
          [9, 10],
          [11, 12],
        ],
      ),
    ).toEqual([
      [58, 64],
      [139, 154],
    ]);
  });

  it("3x2 と 2x3 の乗算結果は 3x3 になる", () => {
    expect(
      multiply(
        [
          [1, 2],
          [3, 4],
          [5, 6],
        ],
        [
          [1, 2, 3],
          [4, 5, 6],
        ],
      ),
    ).toEqual([
      [9, 12, 15],
      [19, 26, 33],
      [29, 40, 51],
    ]);
  });

  it("単位行列を掛けても変わらない", () => {
    const a = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const i3 = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];
    expect(multiply(a, i3)).toEqual(a);
  });

  it("行ベクトル × 列ベクトルはスカラー(1x1)になる", () => {
    expect(multiply([[1, 2, 3]], [[4], [5], [6]])).toEqual([[32]]);
  });

  it("入力を破壊しない", () => {
    const a = [
      [1, 2],
      [3, 4],
    ];
    const b = [
      [5, 6],
      [7, 8],
    ];
    multiply(a, b);
    expect(a).toEqual([
      [1, 2],
      [3, 4],
    ]);
    expect(b).toEqual([
      [5, 6],
      [7, 8],
    ]);
  });

  it("A の列数と B の行数が一致しない場合は RangeError を投げる", () => {
    // 2x2 と 3x2
    expect(() =>
      multiply(
        [
          [1, 2],
          [3, 4],
        ],
        [
          [1, 2],
          [3, 4],
          [5, 6],
        ],
      ),
    ).toThrow(RangeError);
  });

  it("2x3 と 2x3 は RangeError を投げる", () => {
    expect(() =>
      multiply(
        [
          [1, 2, 3],
          [4, 5, 6],
        ],
        [
          [1, 2, 3],
          [4, 5, 6],
        ],
      ),
    ).toThrow(RangeError);
  });

  it("エラーメッセージに両者のサイズが含まれる", () => {
    const fn = () => multiply([[1, 2, 3]], [[1, 2]]);
    expect(fn).toThrow(RangeError);
    expect(fn).toThrow(/1x3/);
    expect(fn).toThrow(/1x2/);
  });
});

describe("不正な入力", () => {
  const valid = [
    [1, 2],
    [3, 4],
  ];

  describe.each([
    ["空配列", []],
    ["空の行", [[]]],
    ["配列でない値", 1],
    ["null", null],
    ["行の長さが不揃い(ジャグ配列)", [[1, 2], [3]]],
    ["行が配列でない", [1, 2]],
    [
      "数値でない要素",
      [
        [1, "2"],
        [3, 4],
      ],
    ],
    [
      "NaN を含む",
      [
        [1, NaN],
        [3, 4],
      ],
    ],
  ])("%s", (_label, bad) => {
    it("add は TypeError を投げる", () => {
      expect(() => add(bad, valid)).toThrow(TypeError);
      expect(() => add(valid, bad)).toThrow(TypeError);
    });

    it("multiply は TypeError を投げる", () => {
      expect(() => multiply(bad, valid)).toThrow(TypeError);
      expect(() => multiply(valid, bad)).toThrow(TypeError);
    });
  });
});
