"use strict";

// 変数宣言
const a = 10;
console.log(a);

// 書き込み不可のプロパティ
const nonwritable = {};
Object.defineProperty(nonwritable, "value", {
  value: 1,
  writable: true,
});

nonwritable.value = 2;

// 新しいプロパティを追加できないオブジェクト
const nonextensible = {};
Object.preventExtensions(nonextensible); // ここをコメントアウトでも拡張可能になる

// copy は拡張可能
const copy = { ...nonextensible };
console.log(copy); // 拡張可能なコピーを確認

copy.value = 1;
