/** 配列の要素の合計を返す。空配列なら 0 */
function sum(array) {
  return array.reduce((acc, x) => acc + x, 0);
}

/** 配列の要素を区切り文字で連結した文字列を返す */
function join(array, separator = ",") {
  return array.reduce(
    (acc, x, i) => (i === 0 ? String(x) : acc + separator + x),
    "",
  );
}

/** 配列を反転した新しい配列を返す(非破壊的) */
function reverse(array) {
  return array.reduce((acc, x) => [x, ...acc], []);
}

/** すべての要素が predicate を満たすなら true。空配列なら true */
function every(array, predicate) {
  return array.reduce((acc, x, i) => acc && predicate(x, i, array), true);
}

/** いずれかの要素が predicate を満たすなら true。空配列なら false */
function some(array, predicate) {
  return array.reduce((acc, x, i) => acc || predicate(x, i, array), false);
}

console.log(sum([1, 2, 3, 4])); // 10
console.log(sum([])); // 0

console.log(join(["a", "b", "c"], "-")); // "a-b-c"
console.log(join([1, 2, 3])); // "1,2,3"
console.log(join([])); // ""

console.log(reverse([1, 2, 3])); // [3, 2, 1]
console.log(reverse([])); // []

console.log(every([2, 4, 6], (x) => x % 2 === 0)); // true
console.log(every([2, 3, 6], (x) => x % 2 === 0)); // false
console.log(every([], () => false)); // true

console.log(some([1, 3, 5], (x) => x % 2 === 0)); // false
console.log(some([1, 2, 5], (x) => x % 2 === 0)); // true
console.log(some([], () => true)); // false
