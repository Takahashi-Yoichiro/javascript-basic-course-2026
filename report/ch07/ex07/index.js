function mergeSort(
  array,
  compare = (lhs, rhs) => (lhs < rhs ? -1 : lhs > rhs ? +1 : 0),
) {
  // 長さ 0 または 1 の配列は既にソート済み
  if (array.length <= 1) {
    return array;
  }

  // 配列を半分に分割して、それぞれを再帰的にソートする
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid), compare);
  const right = mergeSort(array.slice(mid), compare);

  // ソート済みの left と right を併合する
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    // <= 0 のときに left を先に取ることで、安定ソートになる
    if (compare(left[i], right[j]) <= 0) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  // どちらか一方に残った要素をそのまま追加する
  while (i < left.length) result.push(left[i++]);
  while (j < right.length) result.push(right[j++]);

  return result;
}

console.log(mergeSort([5, 2, 9, 1, 5, 6])); // [1, 2, 5, 5, 6, 9]
console.log(mergeSort(["banana", "apple", "cherry"])); // ["apple", "banana", "cherry"]
console.log(mergeSort([3, 1, 2], (a, b) => b - a)); // [3, 2, 1]
