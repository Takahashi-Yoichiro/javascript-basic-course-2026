import * as acorn from "acorn";
import { readFileSync } from "fs";

function parseSource(source) {
  return acorn.parse(source, {
    ecmaVersion: "latest", // 必須
    sourceType: "script", // デフォルト値だが明示的に指定
  });
}

function formatAst(source) {
  return JSON.stringify(parseSource(source), null, 2);
}

function main() {
  // 標準入力からソースコードを読み込む
  const source = readFileSync(0, "utf-8");
  // 結果をacornライブラリでASTに変換して表示
  console.log(formatAst(source));
}

main();
