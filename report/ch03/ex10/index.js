/* eslint-disable prefer-const */
let a = Symbol("sym");
let b = Symbol("sym");
let obj = {};
obj[a] = 1;
obj[b] = 2;
console.log(obj[a]);
console.log(obj[b]);

let c = Symbol.for("sym");
let d = Symbol.for("sym");
obj[c] = 3;
obj[d] = 4;
console.log(obj[c]);
console.log(obj[d]);
