import { expect, vi, test } from "vitest";

test("sum をゲッターに変えると JSON.stringify に値が出力される", () => {
  const mock = vi.fn();

  const obj = {
    x: 0,
    y: 0,
    sum() {
      mock();
      return this.x + this.y;
    },
  };

  // ここに1行のコードを書く
  Object.defineProperty(obj, "sum", { get: obj.sum, enumerable: true });

  obj.x = 1;
  obj.y = 2;
  expect(JSON.stringify(obj)).toBe(`{"x":1,"y":2,"sum":3}`);
  expect(mock).toHaveBeenCalled();
});
