// Array Zip
// Use Math.max.apply() to get the longest array in the arguments. Creates an array with that length as return value and use Array.from() with a map-function to create an array of grouped elements. If lengths of the argument-arrays vary, undefined is used where no value could be found.

const zip = (...arrays) => {
	const maxLength = Math.max.apply(null, arrays.map(a => a.length));
	//console.log(maxLength);
	return Array.from({length: maxLength}).map((_, i) => {
		return Array.from({length: arrays.length}, (_, k) => arrays[k][i]);
	})
}

//const result = zip(['a', 'b'], [1, 2], [true, false]);
const result = zip(['a'], [1, 2], [true, false]);
console.log(result);