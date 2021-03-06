// Array Min
// Returns the minimum value in an array
// Use Math.min() combined with the spread operator (...) to get the minimum value in the array.

const arrayMin = arr => Math.min(...arr);
const result = arrayMin([10, 1, 5]);
console.log(result);