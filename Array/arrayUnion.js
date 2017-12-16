// Array Union
//

const union = (a, b) => Array.from(new Set([...a, ...b]));

const result = union([1, 2, 3], [4, 3, 2]);
console.log(result);