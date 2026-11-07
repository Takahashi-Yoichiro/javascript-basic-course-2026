// 文字列 → 0以上の32bit整数 (djb2)
function hash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(h, 33) + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

function newHashTable(capacity) {
  return {
    size: 0, // マッピング数を示すプロパティ
    entries: new Array(capacity), // マッピングを格納する固定長の配列
    get(key) {
      // keyにマップされた値を取得する
      let node = this.entries[hash(key) % capacity];
      while (node) {
        if (node.key === key) return node.value;
        node = node.next;
      }
      return undefined;
    },
    put(key, value) {
      // key, valueのマッピングを追加する(keyが存在する場合はvalueを上書きする)
      const i = hash(key) % capacity;
      let node = this.entries[i];

      if (!node) {
        this.entries[i] = { key, value, next: undefined };
        this.size++;
        return;
      }

      // 既存キーなら上書き、なければ末尾に追加
      for (;;) {
        if (node.key === key) {
          node.value = value;
          return;
        }
        if (!node.next) break;
        node = node.next;
      }
      node.next = { key, value, next: undefined };
      this.size++;
    },
    remove(key) {
      // keyのマッピングを削除する
      const i = hash(key) % capacity;
      let prev;
      let node = this.entries[i];

      while (node) {
        if (node.key === key) {
          if (prev) prev.next = node.next;
          else this.entries[i] = node.next; // 先頭ノードの削除
          this.size--;
          return true;
        }
        prev = node;
        node = node.next;
      }
      return false;
    },
  };
}

function sample() {
  const hashTable = newHashTable(10);
  hashTable.put("key1", "value1");
  hashTable.put("key2", { value: "value2" });

  console.log(`size=${hashTable.size}`); // => size=2
  console.log(`key1=${hashTable.get("key1")}`); // => key1=value1
  console.log(`key2=${JSON.stringify(hashTable.get("key2"))}`); // => key2={"value":"value2"}

  hashTable.put("key2", "new value");

  console.log(`key2=${hashTable.get("key2")}`); // => key2=new value

  hashTable.remove("key2");

  console.log(`key2=${hashTable.get("key2")}`); // => key2=undefined
  console.log(`size=${hashTable.size}`); // => size=1
}

sample();
