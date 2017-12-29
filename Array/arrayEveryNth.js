// Array Every Nth
// Returns every nth element in an array
// Use Array.filter() to create a new array that contains every nth element of a given array.

const everyNth = (arr, nth) => arr.filter((e, i) => (i+1) % nth === 0);
const result = everyNth([1, 2, 3, 4, 5, 6], 2);
console.log(result); 