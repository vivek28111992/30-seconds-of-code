// Array Count Occurences
// Counts the occurences of a value in an  array
// Use Array.reduce() to increment a counter each time you encounter the specific value inside the array.

const countOccurences = (arr, vaule) => arr.reduce((a, v) => v === vaule ? a + 1 : a + 0, 0);
const result = countOccurences([1,1,2,1,2,3], 1);
console.log(result);
