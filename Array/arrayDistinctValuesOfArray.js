// distinctValuesOfArray
// Returns all the distinct values of an array.
// Use ES6 Set and the ...rest operator to discard all duplicated values.

const distinctValuesOfArray = arr => [...new Set(arr)];
const result = distinctValuesOfArray([1,2,2,3,4,4,5]);
console.log(result);