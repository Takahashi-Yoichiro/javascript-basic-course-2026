import { describe, it, expect } from "vitest";
import { DynamicSizeArray } from "./index.js";

/** DynamicSizeArray の全要素を通常の配列として取り出す(テスト用ヘルパー) */
function toArray(dsa) {
  return Array.from({ length: dsa.length() }, (_, i) => dsa.get(i));
}

describe("DynamicSizeArray", () => {
  describe("初期状態", () => {
    it("length は 0", () => {
      expect(new DynamicSizeArray().length()).toBe(0);
    });

    it("要素が無いので get(0) は Error を投げる", () => {
      expect(() => new DynamicSizeArray().get(0)).toThrow(Error);
    });

    it("要素が無いので set(0, x) は Error を投げる", () => {
      expect(() => new DynamicSizeArray().set(0, 1)).toThrow(Error);
    });

    it("INITIAL_SIZE は 4", () => {
      expect(DynamicSizeArray.INITIAL_SIZE).toBe(4);
    });
  });

  describe("push", () => {
    it("push するたびに length が 1 ずつ増える", () => {
      const arr = new DynamicSizeArray();
      arr.push("a");
      expect(arr.length()).toBe(1);
      arr.push("b");
      expect(arr.length()).toBe(2);
    });

    it("push した値を push した順に get できる", () => {
      const arr = new DynamicSizeArray();
      arr.push(10);
      arr.push(20);
      arr.push(30);
      expect(toArray(arr)).toEqual([10, 20, 30]);
    });

    it("初期サイズちょうど(4個)まで push できる", () => {
      const arr = new DynamicSizeArray();
      [1, 2, 3, 4].forEach((v) => arr.push(v));
      expect(arr.length()).toBe(4);
      expect(toArray(arr)).toEqual([1, 2, 3, 4]);
    });

    it("初期サイズを超えて(5個目を)push しても既存要素が保持される", () => {
      const arr = new DynamicSizeArray();
      [1, 2, 3, 4, 5].forEach((v) => arr.push(v));
      expect(arr.length()).toBe(5);
      expect(toArray(arr)).toEqual([1, 2, 3, 4, 5]);
    });

    it("再配置が複数回起きる量(1000個)を push しても全要素が順序通りに保持される", () => {
      const arr = new DynamicSizeArray();
      const expected = Array.from({ length: 1000 }, (_, i) => i * 2);
      expected.forEach((v) => arr.push(v));
      expect(arr.length()).toBe(1000);
      expect(toArray(arr)).toEqual(expected);
    });

    it("様々な型の値(null, undefined, オブジェクト等)を格納できる", () => {
      const arr = new DynamicSizeArray();
      const obj = { x: 1 };
      arr.push(null);
      arr.push(undefined);
      arr.push(obj);
      arr.push("str");
      expect(arr.length()).toBe(4);
      expect(arr.get(0)).toBeNull();
      expect(arr.get(1)).toBeUndefined();
      expect(arr.get(2)).toBe(obj); // 同一参照
      expect(arr.get(3)).toBe("str");
    });
  });

  describe("再配置(内部の固定長配列のサイズ)", () => {
    // 内部実装の this.array を参照するため、実装詳細に依存したテスト
    it("満杯になるまでは容量が増えない", () => {
      const arr = new DynamicSizeArray();
      [1, 2, 3, 4].forEach((v) => arr.push(v));
      expect(arr.array.length()).toBe(4);
    });

    it("満杯の状態で push すると容量が倍(4 → 8)になる", () => {
      const arr = new DynamicSizeArray();
      [1, 2, 3, 4, 5].forEach((v) => arr.push(v));
      expect(arr.array.length()).toBe(8);
    });

    it("さらに満杯になると再び倍(8 → 16)になる", () => {
      const arr = new DynamicSizeArray();
      Array.from({ length: 9 }, (_, i) => i).forEach((v) => arr.push(v));
      expect(arr.array.length()).toBe(16);
    });
  });

  describe("get", () => {
    it("指定した位置の要素を返す", () => {
      const arr = new DynamicSizeArray();
      ["a", "b", "c"].forEach((v) => arr.push(v));
      expect(arr.get(0)).toBe("a");
      expect(arr.get(1)).toBe("b");
      expect(arr.get(2)).toBe("c");
    });

    it.each([
      ["負の添字", -1],
      ["length と等しい添字", 3],
      ["length を超える添字", 4],
      ["容量(4)内だが未使用の領域", 3],
      ["小数", 1.5],
      ["NaN", NaN],
      ["文字列", "0"],
    ])("範囲外・不正な添字(%s)は Error を投げる", (_label, index) => {
      const arr = new DynamicSizeArray();
      [1, 2, 3].forEach((v) => arr.push(v));
      expect(() => arr.get(index)).toThrow(Error);
    });

    it("エラーメッセージに添字が含まれる", () => {
      const arr = new DynamicSizeArray();
      arr.push(1);
      expect(() => arr.get(5)).toThrow(/5/);
    });
  });

  describe("set", () => {
    it("指定した位置の要素を上書きできる", () => {
      const arr = new DynamicSizeArray();
      [1, 2, 3].forEach((v) => arr.push(v));
      arr.set(1, 99);
      expect(toArray(arr)).toEqual([1, 99, 3]);
    });

    it("set しても length は変わらない", () => {
      const arr = new DynamicSizeArray();
      [1, 2, 3].forEach((v) => arr.push(v));
      arr.set(0, 100);
      expect(arr.length()).toBe(3);
    });

    it("再配置後の要素も set できる", () => {
      const arr = new DynamicSizeArray();
      Array.from({ length: 10 }, (_, i) => i).forEach((v) => arr.push(v));
      arr.set(9, "last");
      arr.set(0, "first");
      expect(arr.get(0)).toBe("first");
      expect(arr.get(9)).toBe("last");
      expect(arr.length()).toBe(10);
    });

    it.each([
      ["負の添字", -1],
      ["length と等しい添字", 3],
      ["length を超える添字", 10],
      ["小数", 0.5],
      ["NaN", NaN],
    ])("範囲外・不正な添字(%s)は Error を投げる", (_label, index) => {
      const arr = new DynamicSizeArray();
      [1, 2, 3].forEach((v) => arr.push(v));
      expect(() => arr.set(index, 0)).toThrow(Error);
    });

    it("範囲外への set が失敗しても、配列の状態は変わらず push も正常に動く", () => {
      const arr = new DynamicSizeArray();
      [1, 2, 3].forEach((v) => arr.push(v));
      expect(() => arr.set(3, 999)).toThrow(Error);
      expect(arr.length()).toBe(3);
      arr.push(4);
      expect(toArray(arr)).toEqual([1, 2, 3, 4]);
    });
  });

  describe("インスタンスの独立性", () => {
    it("複数のインスタンスが互いに影響しない", () => {
      const a = new DynamicSizeArray();
      const b = new DynamicSizeArray();
      a.push(1);
      a.push(2);
      b.push("x");
      expect(toArray(a)).toEqual([1, 2]);
      expect(toArray(b)).toEqual(["x"]);
    });
  });
});
