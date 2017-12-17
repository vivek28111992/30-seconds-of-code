// Array Average
// Use Array.reduce() to add each value to an accumulator, initialized with a value of 0, divide by the length of the array.	 

const average = arr => arr.reduce((acc, val) => acc + val, 0) / arr.length;
const result = average([1,2,13]);

console.log(result);