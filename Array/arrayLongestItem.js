// longest Item
// Takes any number of iterable objects or objects with a length property & returns the longest one.
// Use Array.sort() to sort all arguments by length, return the first(longest) one.

const longestItem = (...vals) => [...vals].sort((a, b) => b.length - a.length)[0];
const result = longestItem(...['a', 'ab', 'abc'], 'abcd');
console.log(result);