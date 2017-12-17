// Compose Functions
// Use Array.reduce() to perform right-to-left functions composition. The last (rightmost) function can accept one or more arguments; the remaining must be unary.

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

const add5 = x => x + 5;
//const multiple = (x, y) => x * y;
const divide = (x, y) => x / y;
const multipleAndAdd5 = compose(add5, divide);
const result = multipleAndAdd5(3, 5);
console.log(result);