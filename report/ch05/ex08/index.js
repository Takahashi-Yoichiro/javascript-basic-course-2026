/* eslint-disable no-unsafe-finally */
/* eslint-disable no-unreachable */
/**
 * 予測：途中処理は全てfinallyが優先され、エラーは発生せずxの最後の値が出力される。
 * 結果：5
 * 考察：処理自体はtry-catch-finallyの構造に従って行われる、最後まで到達し予想通り。
 */
let x = 0;

for (let i = 1; i <= 5; i++) {
  x = i;
  try {
    throw Error();
  } catch {
    break;
  } finally {
    continue;
  }
}

console.log(x);
