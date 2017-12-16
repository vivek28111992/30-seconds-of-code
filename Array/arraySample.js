// Array Sample
// Use Math.random() to generate a random number, multiply it with length & round it of the nearest whole number using Math.floor(). This method also works with string.

const sample = arr => arr[Math.floor(Math.random() * arr.length)];

const result = sample([3, 7, 8, 9]);
console.log(result);