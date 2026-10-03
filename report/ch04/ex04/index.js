export function bitCount(a) {
  let count = 0;
  while (a !== 0) {
    count += a & 1;
    a >>>= 1;
  }
  return count;
}

function main() {
  const a = 0b11011;
  const result = bitCount(a);
  console.log(result);
}
main();
