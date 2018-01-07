// Array isSorted
// Returns 1 if the array is sorted in ascending order, -1 if it is sorted in descending order or 0 if it is not sorted.
// Calculate the ordering direction for the first two elements. Use Object.enteries() to loop over array objects & compare them in pairs. Return 0 if the direction changes or the direction if the last element is reached.

const isSorted = arr => {
	const direction = arr[0] > arr[1] ? -1 : 1;
	for(let [i, val] of arr.entries()) {
		if(i === arr.length - 1) {
			return direction;
		} else if((val - arr[i + 1] * direction > 0)) {
			return 0;
		}
	}
}

const result = isSorted([0, 1, 2, 2]);
console.log(result)