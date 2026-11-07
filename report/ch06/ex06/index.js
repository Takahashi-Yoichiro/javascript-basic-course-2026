function allPropertyKeys(obj) {
  // 独自プロパティ: 列挙不可・Symbol を含むすべて
  const keys = new Set(Reflect.ownKeys(obj));

  // for/in: 列挙可能な文字列名のプロパティ (独自 + 継承)
  for (const key in obj) keys.add(key);

  return [...keys];
}

const sym = Symbol("sym");

const proto = {
  inheritedEnum: "継承・列挙可能",
  shadowedByHidden: "継承・列挙可能 (子の列挙不可に隠される)",
};
Object.defineProperty(proto, "inheritedHidden", {
  value: "継承・列挙不可",
  enumerable: false,
});

const obj = Object.create(proto);
obj.own = "独自・列挙可能";
obj[1] = "独自・数値名";
obj[sym] = "独自・Symbol";
Object.defineProperty(obj, "ownHidden", {
  value: "独自・列挙不可",
  enumerable: false,
});
Object.defineProperty(obj, "shadowedByHidden", {
  value: "独自・列挙不可",
  enumerable: false,
});

console.log(allPropertyKeys(obj));
// => ["1", "own", "ownHidden", "shadowedByHidden", Symbol(sym), "inheritedEnum", "inheritedHidden"]
