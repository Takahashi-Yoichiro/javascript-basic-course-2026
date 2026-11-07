// 独自プロパティを持つオブジェクトをリテラルで定義
const proto = {
  name: "proto",
  greet() {
    return `hello from ${this.name}`;
  },
};

// proto をプロトタイプとして持つ新しいオブジェクトを生成
const child = Object.create(proto);

// getPrototypeOf で、プロトタイプが proto になっていることを確認
console.log(Object.getPrototypeOf(child) === proto); // => true
