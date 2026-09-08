/* eslint-disable */
// 外でiを参照しているのでエラーになる。
for (let i = 0; i < 10; i++) {
  (function () {
    let i = 100;
  })();
  console.log(i);
}
console.log(i);

// varだと、スコープが関数全体になるのでエラーは出ない。
for (var i = 0; i < 10; i++) {
  (function () {
    var i = 100;
  })();
  console.log(i);
}
console.log(i);

// iが正しく定義されておらずエラーになる。
for (i = 0; i < 10; i++) {
  (function () {
    i = 100;
  })();
  console.log(i);
}
console.log(i);
