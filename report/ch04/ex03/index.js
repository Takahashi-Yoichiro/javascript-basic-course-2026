export function sub(a, b) {
  const x = a;
  // bの2の補数を計算するため、bit反転して、1を加える
  let y = ~b;
  let carry_b = 1; // 2の補数を計算するためのキャリー
  while (carry_b !== 0) {
    const nextY = y ^ carry_b;
    carry_b = (y & carry_b) << 1;
    y = nextY;
  }

  let sum = x ^ y; // a と b の2の補数(i.e. -b)の和
  let carry = (x & y) << 1; // どの桁で桁上りするかを示す変数
  while (carry !== 0) {
    const nextSum = sum ^ carry;
    carry = (sum & carry) << 1;
    sum = nextSum;
  }
  return sum;
}

function main() {
  const a = 8;
  const b = 3;
  const result = sub(a, b);
  console.log(result);
}
main();
