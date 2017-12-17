// Array without
// Use Array.filter() to create an array excluding all given values.

const without = (arr, ...args) => arr.filter(v => args.indexOf(v) === -1);

//const result = without([2, 1, 2, 3], 1, 2)
const result = without([2, 1, 2, 3, 4, 5, 5, 5, 3, 2, 7, 7], 3, 1, 5, 2)
console.log(result);
