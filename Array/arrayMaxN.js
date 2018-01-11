// array Max N
// Returns the n maximum elements from the provided array. If n is greater than or equal to the provided array's length, then return the original array(sorted in descending order).

// Use Array.sort() combined with the sperad operator(...) to create a shallow clone of the array & sort it in descending order. Use Array.slice() to get the specified number of elements. Omit the second argument, n, to get a one-element array.

const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);
const result = maxN([4, 2, 9, 0, 3], 3);
console.log(result);