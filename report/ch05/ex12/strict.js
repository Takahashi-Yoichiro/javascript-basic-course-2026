"use strict";

// 変数宣言
a = 10;
console.log(a); // strict mode では ReferenceError

// 書き込み不可のプロパティ
const nonwritable = {};
Object.defineProperty(nonwritable, "value", {
  value: 1,
  writable: false,
});

nonwritable.value = 2; // strict mode では TypeError

// 新しいプロパティを追加できないオブジェクト
const nonextensible = {};
Object.preventExtensions(nonextensible);

nonextensible.value = 1; // strict mode では TypeError
