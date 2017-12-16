// Array Difference
// Create a Set from b, then use Array.filter() on a to keep values not contained in b.

const difference = (a, b) => {
	const s = new Set(b);
	return a.filter(x => !s.has(x));
}

const result = difference([1, 2, 3], [1]);
console.log(result);