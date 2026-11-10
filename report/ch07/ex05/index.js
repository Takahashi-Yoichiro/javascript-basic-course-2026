/** 末尾の要素を除いた新しい配列を返す */
function pop(array) {
  return array.slice(0, -1);
}

/** 末尾に要素を追加した新しい配列を返す */
function push(array, ...items) {
  return [...array, ...items];
}

/** 先頭の要素を除いた新しい配列を返す */
function shift(array) {
  return array.slice(1);
}

/** 先頭に要素を追加した新しい配列を返す */
function unshift(array, ...items) {
  return [...items, ...array];
}

/** ソートした新しい配列を返す */
function sort(array, compare) {
  return [...array].sort(compare);
}

const seq = [1, 2, 3, 4, 5];

console.log(pop(seq)); // [1, 2, 3, 4]
console.log(push(seq, 6)); // [1, 2, 3, 4, 5, 6]
console.log(shift(seq)); // [2, 3, 4, 5]
console.log(unshift(seq, 0)); // [0, 1, 2, 3, 4, 5]
console.log(sort(seq, (a, b) => b - a)); // [5, 4, 3, 2, 1]

// 元の配列は変更されていない
console.log(seq); // [1, 2, 3, 4, 5]
