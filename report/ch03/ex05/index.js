/**
 * LF を CRLF に変換する。
 * すでに CRLF になっている改行は二重変換しない。
 */
export function toCrLf(text) {
  return text.replace(/\r\n|\n/g, "\r\n");
}

/**
 * CRLF を LF に変換する。
 */
export function toLf(text) {
  return text.replace(/\r\n/g, "\n");
}
