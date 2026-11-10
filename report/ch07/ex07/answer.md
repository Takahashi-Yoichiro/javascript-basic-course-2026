# マージソートの実装

挿入ソートとは異なるアルゴリズムとして、マージソートを実装する。マージソートは配列を半分に分割して再帰的にソートし、ソート済みの2つの配列を併合(マージ)する分割統治法のアルゴリズム。

```js
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
```

## 時間計算量の説明

配列長を $n$ とし、`mergeSort` の計算時間を $T(n)$ とする。

1. 配列を半分に分割して再帰呼び出しを2回行う: $2T(n/2)$
2. 併合の処理(`slice` と `merge`)は、すべての要素を一度ずつ見るので $O(n)$

したがって次の漸化式が成り立つ。

$$T(n) = 2T(n/2) + O(n)$$

### 再帰の木で考える

- 再帰の深さは、配列を半分にしていって長さ 1 になるまでなので $\log_2 n$ 段
- 各段で処理される要素の総数は常に $n$ なので、各段の併合コストは合計 $O(n)$
- よって全体は $O(n) \times \log_2 n$

$$T(n) = O(n \log n)$$

これは最良・平均・最悪のいずれの場合でも変わらない(入力の並び方に依存しない)。

### 挿入ソートとの比較

| アルゴリズム | 最悪時間計算量 | 最良時間計算量           | 追加メモリ |
| ------------ | -------------- | ------------------------ | ---------- |
| 挿入ソート   | $O(n^2)$       | $O(n)$(ソート済みの場合) | $O(1)$     |
| マージソート | $O(n \log n)$  | $O(n \log n)$            | $O(n)$     |

$n$ が大きくなるほどマージソートが有利になる。例えば $n = 10^6$ のとき、$n^2 = 10^{12}$ に対して $n \log_2 n \approx 2 \times 10^7$ で、桁違いに少ない比較回数で済む。その代わり、併合用に $O(n)$ の追加メモリが必要になる点がトレードオフになる。
