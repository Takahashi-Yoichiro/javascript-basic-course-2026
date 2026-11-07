// target から、template に独自プロパティとして存在しないプロパティを削除する
export function restrict(target, template) {
  for (const key of Object.keys(target)) {
    // `key in template` だと継承プロパティも「存在する」ことになるため、
    // 独自プロパティだけを見る hasOwn を使う
    if (!Object.hasOwn(template, key)) {
      delete target[key];
    }
  }
  return target;
}

// target から、sources のいずれかに独自プロパティとして存在するプロパティを削除する
export function substract(target, ...sources) {
  for (const source of sources) {
    // Object.keys は独自の列挙可能な文字列キーだけを返す
    // (Symbol と継承プロパティは対象外になる)
    for (const key of Object.keys(source)) {
      delete target[key];
    }
  }
  return target;
}
