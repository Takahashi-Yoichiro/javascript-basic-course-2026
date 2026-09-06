// prettier-ignore
export function fizzbuzz() { return Array.from({ length: 100 }, (_, i) => (i + 1) % 15 === 0 ? "FizzBuzz" : (i + 1) % 3 === 0 ? "Fizz" : (i + 1) % 5 === 0 ? "Buzz" : String(i + 1)).join("\n") + "\n"; }
