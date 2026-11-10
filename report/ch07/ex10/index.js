export function makeFixedSizeArray(size) {
  const array = new Array(size);
  return {
    get(index) {
      if (index < 0 || array.length <= index) {
        throw new Error(`Array index out of range: ${index}`);
      }
      return array[index];
    },
    set(index, value) {
      if (index < 0 || array.length <= index) {
        throw new Error(`Array index out of range: ${index}`);
      }
      array[index] = value;
    },
    length() {
      return array.length;
    },
  };
}

export class DynamicSizeArray {
  static INITIAL_SIZE = 4; // 初期サイズ

  constructor() {
    this.len = 0; // 実際に格納されている要素数
    this.array = makeFixedSizeArray(DynamicSizeArray.INITIAL_SIZE);
  }

  /**
   * 範囲チェック。有効なのは 0 以上 len 未満の整数のみ。
   * (固定長配列の容量内でも、未使用の領域は範囲外として扱う)
   */
  _checkIndex(index) {
    if (!Number.isInteger(index) || index < 0 || this.len <= index) {
      throw new Error(`Array index out of range: ${index}`);
    }
  }

  get(index) {
    this._checkIndex(index);
    return this.array.get(index);
  }

  set(index, value) {
    this._checkIndex(index);
    this.array.set(index, value);
  }

  length() {
    return this.len;
  }

  push(value) {
    // this.array に空きが無い場合は「再配置」を行う
    if (this.len >= this.array.length()) {
      // 新しい固定長配列(倍サイズ)を作成
      const old = this.array;
      this.array = makeFixedSizeArray(old.length() * 2);
      // 古い配列の要素を新しい配列にコピー
      for (let i = 0; i < this.len; i++) {
        this.array.set(i, old.get(i));
      }
    }
    this.array.set(this.len, value);
    this.len++;
  }
}
