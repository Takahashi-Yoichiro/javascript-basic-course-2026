//JSON.parse()と同じ処理をするが、エラーをスローするのではなくundefinedを返す。
export function parseJSON(s) {
  try {
    return { success: true, data: JSON.parse(s) };
  } catch (e) {
    //何かが間違っているが、それが何であるかは問題にしない。
    return { success: false, error: e };
  }
}

function main() {
  console.log(parseJSON('{"key": "value"}')); // 正しいJSON
  console.log(parseJSON("invalid json")); // 間違ったJSON
}
main();
