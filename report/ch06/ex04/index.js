/* eslint-disable no-prototype-builtins */
const obj = {};

// 3属性を明示的に設定してプロパティを定義
Object.defineProperty(obj, "allTrue", {
  value: 1,
  writable: true,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(obj, "readOnly", {
  value: 2,
  writable: false, // 変更不可
  enumerable: true,
  configurable: true,
});
Object.defineProperty(obj, "hidden", {
  value: 3,
  writable: true,
  enumerable: false, // 列挙不可
  configurable: true,
});
Object.defineProperty(obj, "permanent", {
  value: 4,
  writable: true,
  enumerable: true,
  configurable: false, // 削除不可・属性変更不可
});

// 失敗時に例外が出ることを確認するヘルパー
function tryRun(label, fn) {
  try {
    fn();
    console.log(`${label}: 成功`);
  } catch (e) {
    console.log(`${label}: ${e.constructor.name}`);
  }
}

// --- 1. プロパティの変更 (writable の影響) ---
obj.allTrue = 10;
console.log(obj.allTrue); // => 10
tryRun("readOnly を変更", () => {
  obj.readOnly = 20;
}); // => TypeError
console.log(obj.readOnly); // => 2 (変わらない)

// --- 2. プロパティの削除 (configurable の影響) ---
tryRun("allTrue を削除", () => {
  delete obj.allTrue;
}); // => 成功
console.log("allTrue" in obj); // => false
tryRun("permanent を削除", () => {
  delete obj.permanent;
}); // => TypeError
console.log(obj.permanent); // => 4 (残っている)

// configurable: false だと属性の再定義もできない
tryRun("permanent を enumerable: false に変更", () => {
  Object.defineProperty(obj, "permanent", { enumerable: false });
}); // => TypeError

// ただし configurable: false でも writable: true なら値の変更は可能
obj.permanent = 40;
console.log(obj.permanent); // => 40

// --- 3. hasOwnProperty / propertyIsEnumerable (enumerable の影響) ---
for (const key of ["readOnly", "hidden", "permanent"]) {
  console.log(
    key,
    "hasOwnProperty:",
    obj.hasOwnProperty(key),
    "propertyIsEnumerable:",
    obj.propertyIsEnumerable(key),
  );
}
// => readOnly  hasOwnProperty: true propertyIsEnumerable: true
// => hidden    hasOwnProperty: true propertyIsEnumerable: false
// => permanent hasOwnProperty: true propertyIsEnumerable: true

// 存在しないプロパティは両方 false
console.log(obj.hasOwnProperty("nothing")); // => false
console.log(obj.propertyIsEnumerable("nothing")); // => false

// 列挙系の操作での見え方
console.log(Object.keys(obj)); // => ["readOnly", "permanent"] (hidden は出ない)
console.log(JSON.stringify(obj)); // => {"readOnly":2,"permanent":40}
console.log(Object.getOwnPropertyNames(obj)); // => ["readOnly", "hidden", "permanent"] (hidden も出る)

// 属性の確認
console.log(Object.getOwnPropertyDescriptor(obj, "readOnly"));
// => { value: 2, writable: false, enumerable: true, configurable: true }
