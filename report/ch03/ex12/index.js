/* eslint-disable prefer-const */
class Example {
  constructor(value) {
    this.value = value;
  }
  valueOf() {
    return this.value;
  }

  toString() {
    return `Example(${this.value})`;
  }
}

let obj = new Example(42);

// valueOf() が暗黙的に呼ばれる
console.log(Number(obj)); // 42
console.log(+obj); // 42

// toString() が暗黙的に呼ばれる
console.log(String(obj)); // Example(42)
console.log(`${obj}`); // Example(42)
