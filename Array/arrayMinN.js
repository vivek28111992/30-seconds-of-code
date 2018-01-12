// minN
// Returns the n minimum elements from the provided array. If n is greater than or equal to the provided array's length, then return the original array(sorted in ascending order).

// Use Array.sort() combined with the spread operator (...) to create a shallow clone of the array & sort it in ascending order. Use Array.slice() to get the specified number of elements. Omit the second argument, n, to get a one-element array.

const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);
const result = minN([1, 2, 3], 2);
console.log(result);