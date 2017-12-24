// Array Deep Flatten
// Deep flattens an array
// Use recursion. Use Array.concat() with an empty array ([]) and the spread operator (...) to flatten an array. Recursively flatten each element that is an array.

const deepFlaten = arr => [].concat(...arr.map(v => Array.isArray(v) ? deepFlaten(v) : v));
const result = deepFlaten([1,[2],[[3],4],5]);
console.log(result);