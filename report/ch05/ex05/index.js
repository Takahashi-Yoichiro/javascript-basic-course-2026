export function f(o) {
  const ans = {};
  for (const k of Object.keys(o)) if (o[k] % 2 === 0) ans[k] = o[k];
  return ans;
}

function main() {
  const o = { x: 1, y: 2, z: 3 };
  console.log(f(o)); // { y: 2 }
  console.log(o); // { x: 1, y: 2, z: 3 } 元のオブジェクトは変更しない
}
main();
