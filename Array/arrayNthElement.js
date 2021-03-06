// nth Element
// Returns the nth element of an array
// Use Array.slice() to get an array containing the nth element at the first place. If the index is out of bounds, return []. Omit the second argument, n, to get the first element of the array.

const nthElement = (arr, n = 0) => (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];
const result = nthElement(['a', 'b', 'c'], 0);
console.log(result);