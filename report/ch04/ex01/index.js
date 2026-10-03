const C1 = { re: 1, im: 2 };
const C2 = { re: 3, im: 4 };

export function add(C1, C2) {
  return { re: C1.re + C2.re, im: C1.im + C2.im };
}

export function sub(C1, C2) {
  return { re: C1.re - C2.re, im: C1.im - C2.im };
}

export function mul(C1, C2) {
  return {
    re: C1.re * C2.re - C1.im * C2.im,
    im: C1.re * C2.im + C1.im * C2.re,
  };
}

export function div(C1, C2) {
  const denominator = C2.re * C2.re + C2.im * C2.im;
  return {
    re: (C1.re * C2.re + C1.im * C2.im) / denominator,
    im: (C1.im * C2.re - C1.re * C2.im) / denominator,
  };
}

function main() {
  console.log(add(C1, C2));
  console.log(sub(C1, C2));
  console.log(mul(C1, C2));
  console.log(div(C1, C2));
}

main();
