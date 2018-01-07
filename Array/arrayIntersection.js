// Array Intersection
// Returns a list of elements that exist in both array
// Create a Set from b, then use Array.filter() on a to only keep values contained ib b.

const intersection = (a, b) => {
	const s = new Set(b);
	return a.filter(x => s.has(x)); 
} 

const result = intersection([1, 2, 3], [4, 3, 2]);
console.log(result);