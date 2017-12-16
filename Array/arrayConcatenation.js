// Array Concatenation
// Use Array.concat() to concatenate an array with an additional arrays and/or values, specified in args.

const ArrayConcat = (arr, ...args) => [].concat(arr, ...args);

const result = ArrayConcat([1], [1, 2, 3, [4]]);
console.log(result);