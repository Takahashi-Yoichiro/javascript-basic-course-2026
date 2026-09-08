// 最大値
console.log(Number.MAX_SAFE_INTEGER);
// 最小値
console.log(Number.MIN_SAFE_INTEGER);
// 最大値+1 と最大値+2の比較
// Numberが整数を評伝出来る範囲を超え、丸めが発生する為、最大値+1 と最大値+2 は同じ値として扱われる
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);
