// Array Pull
// Use Array.filter() and Array.includes() to pull out the values that are not needed. Use Array.length = 0 to mutate the passed in array by resetting it's length to zero and Array.push() to re-populate it with only the pulled values.

const pull = (arr, ...args) => {
	let pulled = arr.filter((v, i) => !args.includes(v));
	arr.length = 0;
	pulled.map(v => arr.push(v));
	return arr;
}

let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
const result = pull(myArray, 'a', 'c');
console.log(result);