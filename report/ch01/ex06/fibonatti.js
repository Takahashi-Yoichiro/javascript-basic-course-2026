function fib(
  n,
  // メモ化の為のオブジェクト
  memo = new Map([
    [0, 0],
    [1, 1],
  ]),
) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    if (memo.has(n)) {
      return memo.get(n);
    }
    const result = fib(n - 1, memo) + fib(n - 2, memo);
    memo.set(n, result);
    return result;
  }
}
console.log(fib(5)); // => 5
console.log(fib(75)); // => 2111485077978050
