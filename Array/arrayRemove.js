// Array remove
// Use Array.filter() to find array elements that return truthy values & Array.reduce() to remove elements using Array.splice(). The func is invoked with three arguments (value, index, array).  
// reduce is used to remove same values, as filter can return same values

const remove = (arr, func) => 
	Array.isArray(arr) ? arr.filter(func).reduce((acc, val) => {
		arr.splice(arr.indexOf(val), 1);
		return acc.concat(val); 
	}, [])
	: [];

const result = remove([1, 2, 3, 4], n => n%2 === 0);
console.log(result);   // -> [2, 4]