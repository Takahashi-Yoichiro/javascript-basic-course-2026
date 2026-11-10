/**
 * 2次元配列を行列として扱う加算・乗算ユーティリティ。
 */

function validateMatrix(m, name) {
  if (!Array.isArray(m) || m.length === 0) {
    throw new TypeError(`${name} は空でない2次元配列である必要があります`);
  }
  if (!Array.isArray(m[0]) || m[0].length === 0) {
    throw new TypeError(`${name} の各行は空でない配列である必要があります`);
  }
  const cols = m[0].length;
  for (let i = 0; i < m.length; i++) {
    if (!Array.isArray(m[i]) || m[i].length !== cols) {
      throw new TypeError(
        `${name} の各行は同じ長さの配列である必要があります (行 ${i})`,
      );
    }
    for (let j = 0; j < cols; j++) {
      if (typeof m[i][j] !== "number" || Number.isNaN(m[i][j])) {
        throw new TypeError(`${name}[${i}][${j}] は数値である必要があります`);
      }
    }
  }
  return { rows: m.length, cols };
}

export function add(a, b) {
  const sa = validateMatrix(a, "a");
  const sb = validateMatrix(b, "b");
  if (sa.rows !== sb.rows || sa.cols !== sb.cols) {
    throw new RangeError(
      `加算できません: ${sa.rows}x${sa.cols} の行列と ${sb.rows}x${sb.cols} の行列はサイズが異なります`,
    );
  }
  return a.map((row, i) => row.map((v, j) => v + b[i][j]));
}

export function multiply(a, b) {
  const sa = validateMatrix(a, "a");
  const sb = validateMatrix(b, "b");
  if (sa.cols !== sb.rows) {
    throw new RangeError(
      `乗算できません: ${sa.rows}x${sa.cols} の行列の列数と ${sb.rows}x${sb.cols} の行列の行数が一致しません`,
    );
  }
  const result = Array.from({ length: sa.rows }, () =>
    new Array(sb.cols).fill(0),
  );
  for (let i = 0; i < sa.rows; i++) {
    for (let k = 0; k < sa.cols; k++) {
      for (let j = 0; j < sb.cols; j++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  return result;
}
