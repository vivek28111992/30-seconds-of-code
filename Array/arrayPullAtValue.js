// pullAtValue
// Mutates the original array to filter out the values specified. Returns the removed elements.
// Use Array.filter() & Array.inlcudes() to pull out the values that are not needed. Use Array.length = 0 to mutate the passed in an array by resetting it's length to zero & Array.push() to re-populate it with only the pulled values. Use Array.push() to keep track of pulled values.

const pullAtValue = (arr, pullArr) => {
	let removed = []
		pushToRemove = arr.forEach((v, i) => (pullArr.inlcudes(v) ? removed.push(v) : v)),
		mutateTo = arr.filter((v, i) =>  !pullArr.inlcudes(v));

	arr.length = 0;
	mutateTo.forEach(v => arr.push(v));
	return removed;	
};

let myArray = ['a', 'b', 'c', 'd'];
let pulled = pullAtValue(myArray, ['b', 'd']);
console.log(pulled);