// initializeArrayWithValues
// initializes & fills an array with the specified values.
// Use Array(n) to create an array of the desired length, fill(v) to fill it with the desired values. You can omit val to use a default value of 0.

const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val);
const result = initializeArrayWithValues(5, 2);
console.log(result);