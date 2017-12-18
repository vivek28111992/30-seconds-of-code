// Array Max
// Returns the maximum value in an array.
// Use Math.max() combined with the spread operator (...) to get the maximum value in the array.

const arrayMax = arr => Math.max(...arr);
const result = arrayMax([10, 1, 5]);
console.log(result);