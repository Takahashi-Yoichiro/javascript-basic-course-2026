export function assign(target, ...sources) {
  // Object.assign と同様、null / undefined は TypeError
  if (target === null || target === undefined) {
    throw new TypeError("Cannot convert undefined or null to object");
  }

  // プリミティブ (1, true など) はラッパーオブジェクトに変換される
  const to = Object(target);

  for (const source of sources) {
    // null / undefined のソースは無視
    if (source === null || source === undefined) continue;

    const from = Object(source);

    // 独自の列挙可能プロパティ (Symbol を含む) だけをコピー
    for (const key of Reflect.ownKeys(from)) {
      if (!Object.prototype.propertyIsEnumerable.call(from, key)) continue;
      // [[Set]] 相当の代入 (セッターが呼ばれる)
      to[key] = from[key];
    }
  }

  return to;
}
