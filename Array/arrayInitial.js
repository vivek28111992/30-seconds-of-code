// Array Initial 
// Returns all the elements of an array except the last one.
// Use arr.slice(0, -1) to return all but the last element of the array.

const initial = arr => arr.slice(0, -1);
const result = initial([1, 2, 3]);
console.log(result);