// Array Symmetric Difference
// Create a Set from each array, then use Array.filter() on each of them to only keep values not contained in the other.

const symmetricDifference = (a, b) => {
	const sA = new Set(a),
		sB = new Set(b);
	return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];		
}

const result = symmetricDifference([1,2,3], [1,2,4]);
console.log(result);