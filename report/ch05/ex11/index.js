/* eslint-disable no-debugger */
function addTax(price, taxRate) {
  const tax = price * taxRate;
  return price + tax;
}

const price = 1000;
const taxRate = 0.1;
debugger;
const total = addTax(price, taxRate);

console.log({ price, taxRate, total });
