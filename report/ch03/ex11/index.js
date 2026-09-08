const obj1 = { x: 1 };
// 問題: ここに1行コードを書くことで以下の行で {x: 1, y: 2} が出力されること
obj1.y = 2;
console.log(obj1);

const obj2 = { x: 1, y: 2 };
// 問題: 以下の行では何が出力されるか、予想してから結果を確認しなさい
// 予測：値は同じでも、オブジェクト自体が異なるため false が出力される
console.log(obj1 === obj2);

function equals(o1, o2) {
  // o1 と o2 が厳密に等価であるか判定
  if (o1 === o2) {
    return true;
  }
  // o1 または o2 に null またはオブジェクト以外が指定された場合 false を返す
  if (
    typeof o1 !== "object" ||
    o1 === null ||
    typeof o2 !== "object" ||
    o2 === null
  ) {
    return false;
  }
  // o1 と o2 のプロパティの数・名前が一致しない場合 false を返す
  const keys1 = Object.keys(o1);
  const keys2 = Object.keys(o2);
  if (
    keys1.length !== keys2.length ||
    !keys1.every((key) => keys2.includes(key))
  ) {
    return false;
  }
  // o1 と o2 のプロパティの各値を比較し、全て true ならば true を返し、1つでも false があれば false を返す
  if (!keys1.every((key) => equals(o1[key], o2[key]))) {
    return false;
  }
  return true;
}

console.log("equals function test");
// 厳密等価なら true
console.log(equals(42, 42)); // true
console.log(equals(null, null)); // true

// 厳密等価ではない場合オブジェクト以外が指定されれば false
console.log(equals({ x: 42 }, 42)); // false
console.log(equals(null, { x: 42 })); // false

// プロパティの数・名前が一致しなければ false
console.log(equals({ x: 1 }, { y: 1 })); // false
console.log(equals({ x: 1 }, { x: 1, y: 1 })); // false

// プロパティの各値を equals で再帰的に比較
console.log(equals({ x: { y: { z: 10 } } }, { x: { y: { z: 10 } } })); // true
console.log(equals({ x: { y: { z: 10 } } }, { x: { y: { z: 10, w: 1 } } })); // false
