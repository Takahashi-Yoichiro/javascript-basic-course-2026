export function compare(a, b) {
  return Math.abs(a - b) < 1e-10;
}

function main() {
  console.log(compare(0.3 - 0.2, 0.1)); // true
  console.log(compare(0.2 - 0.1, 0.1)); // true
}

main();
