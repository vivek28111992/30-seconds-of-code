// Filter Non Unique
// Filters out the non-unique value in an array.
// Use Array.filter() for an array containinig only the unique values.

const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
const result = filterNonUnique([1, 2, 2, 3, 4, 4, 5]);
console.log(result);