// flatten
// Flattens an array.
// Use an array & concatenate it with the spread input array causing a shallow denesting of any contained arrays.

const flatten = arr => [].concat(...arr);
const result = flatten([1, [2], 3, 4]);
console.log(result) 