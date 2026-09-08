export function eq(a, b) {
  if (a === b) {
    return true;
  }
  if (
    typeof a === "object" &&
    a !== null &&
    typeof b === "object" &&
    b !== null
  ) {
    return false;
  }

  // null と undefined の等価性チェック
  if ((a === null && b === undefined) || (a === undefined && b === null)) {
    return true;
  }

  if (a === null || a === undefined || b === null || b === undefined) {
    return false;
  }

  // 日付
  if (a instanceof Date && typeof b === "string") {
    return a.toString() === b;
  }

  if (typeof a === "string" && b instanceof Date) {
    return a === b.toString();
  }

  if (a instanceof Date && typeof b === "number") {
    return Number(a.toString()) === b;
  }

  if (typeof a === "number" && b instanceof Date) {
    return a === Number(b.toString());
  }

  if (+a === +b) {
    return true;
  }
  return false;
}

export function lte(a, b) {
  // 文字列の場合、辞書順で比較すると NaN になることがあるので先に処理する
  if (typeof a === "string" && typeof b === "string") {
    return a < b || a === b;
  }
  if (+a <= +b) {
    return true;
  }
  return false;
}
