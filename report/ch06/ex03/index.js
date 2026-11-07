/* eslint-disable no-prototype-builtins */
let o = {};
o.x = 1;
let p = Object.create(o);
p.y = 2;
let q = Object.create(p);
q.z = 3;

// o は p と q のプロトタイプチェーン上に存在する
console.log(o.isPrototypeOf(p)); // => true
console.log(o.isPrototypeOf(q)); // => true

// p は q のプロトタイプチェーン上に存在する
console.log(p.isPrototypeOf(q)); // => true

// 逆方向は false (q は p や o のプロトタイプチェーンに存在しない)
console.log(q.isPrototypeOf(p)); // => false
console.log(p.isPrototypeOf(o)); // => false

// Object.prototype は全てのチェーンの終端に存在する
console.log(Object.prototype.isPrototypeOf(o)); // => true
console.log(Object.prototype.isPrototypeOf(p)); // => true
console.log(Object.prototype.isPrototypeOf(q)); // => true

// 自分自身は自分のプロトタイプチェーンに含まれない
console.log(q.isPrototypeOf(q)); // => false
