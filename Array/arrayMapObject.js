// mapObject
// Maps the values of an array to an object using a function, where the key-value pairs consist of the original value as the key & the mapped value.
// Use an anonymous inner function scope to declare an undefined memory space, using closure to store a return value. Use a new Array to store the array with a map of the function over its data set & a comma operator to return a second step, without needing to move from one context to another (due to closure & order of operations).

const mapObject = (arr, fn) => 
	(a => (
		(a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
	))();