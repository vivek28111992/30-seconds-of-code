// Join
// Joins all elements of an array into a string & returns this string. Uses a separator & an end seperator.
// Use Array.reduce() to combine elements into a string. Omit the second argument, separator, to use a default separator of ','. Omit the third argument, end, to use the same value as separator by default.

const join = (arr, separator = ',', end = separator) => 
	arr.reduce(
		(acc, val, i) => 
			(i == arr.length - 2)
				? acc + val + end
				: (i == arr.length - 1) ? acc + val : acc + val + separator, ''
	);

const result = join(['pen', 'pineapple', 'apple', 'pen'], ',', '&');
console.log(result);