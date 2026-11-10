/**
 * 1 から n までの FizzBuzz を console.log で出力する。
 */
export function fizzbuzz(n) {
  Array.from({ length: n }, (_, i) => i + 1).forEach((i) =>
    console.log(
      i % 15 === 0
        ? "FizzBuzz"
        : i % 3 === 0
          ? "Fizz"
          : i % 5 === 0
            ? "Buzz"
            : i,
    ),
  );
}

/**
 * 2つの配列の要素ごとの差の2乗和を返す。
 */
export function sumOfSquaredDifference(f, g) {
  return f.reduce((sum, fi, i) => sum + (fi - g[i]) ** 2, 0);
}

/**
 * 偶数だけの合計が 42 以上かどうかを返す。
 */
export function sumOfEvensIsLargerThan42(array) {
  return array.filter((x) => x % 2 === 0).reduce((sum, x) => sum + x, 0) >= 42;
}
