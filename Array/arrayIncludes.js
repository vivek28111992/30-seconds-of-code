// Array Includes
// Use slice to offset the array/string & indexOf() to check if the value is included. Omit the last argument, fromIndex, to check the whole array/string.

const includes = (collection, val, fromIndex=0) => 	collection.slice(fromIndex).indexOf(val[0]) !== -1; 

//const result = includes('30-seconds-of-code', 'code'); -> true
const result = includes([1, 2, 3, 4, 5], [1, 2]);   // -> false
console.log(result);