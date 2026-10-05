/* eslint-disable no-unsafe-finally */
/**
 * 予測：trueが返された後に、falseが返される。
 * 結果：falseのみ返される。
 * 考察：finallyのブロックが、tryブロックのreturn文よりも優先されるため、最終的にfalseが返される。
 */
function f() {
  try {
    return true;
  } finally {
    return false;
  }
}

console.log(f());
