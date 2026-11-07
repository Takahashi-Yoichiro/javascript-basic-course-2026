export function newPoint(r, theta) {
  return {
    r,
    theta,

    get x() {
      return this.r * Math.cos(this.theta);
    },
    set x(value) {
      if (Number.isNaN(value)) {
        throw new TypeError("x must not be NaN");
      }
      const y = this.y; // r, theta を書き換える前に現在の y を退避する
      this.r = Math.hypot(value, y);
      this.theta = Math.atan2(y, value);
    },

    get y() {
      return this.r * Math.sin(this.theta);
    },
    set y(value) {
      if (Number.isNaN(value)) {
        throw new TypeError("y must not be NaN");
      }
      const x = this.x;
      this.r = Math.hypot(x, value);
      this.theta = Math.atan2(value, x);
    },
  };
}

// 失敗時に例外が出ることを確認するヘルパー
function tryRun(label, fn) {
  try {
    fn();
    console.log(`${label}: 成功`);
  } catch (e) {
    console.log(`${label}: ${e.constructor.name}`);
  }
}

function main() {
  const p = newPoint(5, Math.atan2(4, 3)); // x=3, y=4 に相当
  console.log(p.x, p.y); // => 3 4 (浮動小数点誤差で 3.0000000000000004 などになることがある)

  p.x = 0;
  console.log(p.r); // => 4 (x=0, y=4 なので r は 4)
  console.log(p.theta); // => 1.5707963267948966 (π/2)

  p.y = 0;
  console.log(p.r); // => 0

  tryRun("p.x = NaN", () => {
    p.x = NaN;
  }); // => TypeError
}

main();
