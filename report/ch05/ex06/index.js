export function checkOrderOfTryCatchFinally() {
  // 解けた順に、配列に追加していく
  const result = [];
  try {
    result.push("try");
    throw new Error("error");
  } catch (e) {
    result.push("catch");
  } finally {
    result.push("finally");
  }
  return result;
}

function main() {
  console.log(checkOrderOfTryCatchFinally());
}
main();
