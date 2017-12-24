// Array Difference With
// Filters out all the values from an array for which the comparator function does not return true.
// Use Array.filter() & Array.find() to find the appropriate values.

const differenceWith = (arr, val, comp) => arr.filter(a => !val.find(b => comp(a, b)));
const result = differenceWith([1, 1.2, 1.5, 3], [1.9, 3.5], (a, b) => Math.round(a) === Math.round(b));
console.log(result);