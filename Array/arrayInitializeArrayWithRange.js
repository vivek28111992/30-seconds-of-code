// initialize Array With Range
// Initializes an array containing the numbers in the specified range where start & end are inclusive with there common difference step.
// Use Array.from(Math.ceil((end+1-start)/step))) to create an array of the desired length(the amount of elements is equal to (end - start)/step) or (end+1-start)/step for inclusive end), Array.map() to fill with the desired values in a range. You can omit step to use a default of 1.

const initializeArrayWithRange = (end, start = 0, step = 1) => 
	Array.from({length: Math.ceil((end+1 - start)/step)}).map((v, i) => i * step + start);
const result = initializeArrayWithRange(9, 3, 2);
console.log(result);