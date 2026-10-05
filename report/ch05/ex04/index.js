const iterNum = 10; // 出力個数は固定だったので、変更する必要はない
export function FibWhile() {
  let a = 0,
    b = 1,
    i = 0;
  const ans = [];
  while (i < iterNum) {
    const temp = a;
    a = b;
    b = temp + b;
    ans.push(a);
    i++;
  }
  return ans;
}
export function FibDoWhile() {
  let a = 0,
    b = 1,
    i = 0;
  const ans = [];
  do {
    const temp = a;
    a = b;
    b = temp + b;
    ans.push(a);
    i++;
  } while (i < iterNum);
  return ans;
}
export function FibFor() {
  let a = 0,
    b = 1;
  const ans = [];
  for (let i = 0; i < iterNum; i++) {
    const temp = a;
    a = b;
    b = temp + b;
    ans.push(a);
  }
  return ans;
}

function main() {
  console.log("FibWhile: " + FibWhile());
  console.log("FibDoWhile: " + FibDoWhile());
  console.log("FibFor: " + FibFor());
}
main();
