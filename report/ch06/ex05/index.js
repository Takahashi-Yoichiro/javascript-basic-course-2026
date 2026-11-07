/* eslint-disable no-prototype-builtins */
// プロトタイプ: 数値名・文字列名・列挙可能なプロパティを持つ
const proto = {
  protoOnlyStr: "proto: 文字列(protoのみ)",
  sameStr: "proto: 文字列(子と同名)",
  30: "proto: 数値(protoのみ)",
  10: "proto: 数値(子と同名)",
  shadowed: "proto: 列挙可能(子で列挙不可として隠される)",
};

const obj = Object.create(proto);

// 文字列名 (子のみ) / 文字列名 (protoと同名)
obj.childOnlyStr = "child: 文字列(子のみ)";
obj.sameStr = "child: 文字列(protoと同名)";

// 数値名 (子のみ) / 数値名 (protoと同名)
// 定義順は 20 → 10 の降順にしておく
obj[20] = "child: 数値(子のみ)";
obj[10] = "child: 数値(protoと同名)";

// 列挙不可で、protoの列挙可能プロパティと同名
Object.defineProperty(obj, "shadowed", {
  value: "child: 列挙不可",
  enumerable: false,
  writable: true,
  configurable: true,
});

// for/in で順番を確認
for (const key in obj) {
  console.log(
    key,
    "=>",
    obj[key],
    Object.hasOwn(obj, key) ? "(own)" : "(inherited)",
  );
}
// => 10 => child: 数値(protoと同名) (own)
// => 20 => child: 数値(子のみ) (own)
// => childOnlyStr => child: 文字列(子のみ) (own)
// => sameStr => child: 文字列(protoと同名) (own)
// => 30 => proto: 数値(protoのみ) (inherited)
// => protoOnlyStr => proto: 文字列(protoのみ) (inherited)

console.log(Object.keys(obj));
// => ["10", "20", "childOnlyStr", "sameStr"] (自身の列挙可能のみ)

console.log(obj.shadowed); // => "child: 列挙不可"
console.log(proto.shadowed); // => "proto: 列挙可能(子で列挙不可として隠される)"
console.log(obj.propertyIsEnumerable("shadowed")); // => false
console.log(proto.propertyIsEnumerable("shadowed")); // => true
