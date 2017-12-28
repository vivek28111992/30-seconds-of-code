// dropRight
// Returns a new array with n elements removed from the right
// Use Array.slice() to slice the remove the specified number of elements from the right.

const dropRight = (arr, n = 1) => arr.slice(0, -n);
const result = dropRight([1, 2, 3], 2);
console.log(result);