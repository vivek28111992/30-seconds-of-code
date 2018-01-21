// similarity
// Returns an array of elements that appear in both arrays
// Use Array.filter() to remove values that are not part of values, determined using Array.includes().

const similarity = (arr, values) => arr.filter(v => values.includes(v));
const result = similarity([1, 2, 3], [1, 2, 4]);
console.log(result);