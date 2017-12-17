// Divisible by number
// Use the modulo operator (%) to check if the remainder is equal to 0.

const isDivisible = (dividend, divisor) => dividend % divisor === 0;
const result = isDivisible(5, 3);
console.log(result);