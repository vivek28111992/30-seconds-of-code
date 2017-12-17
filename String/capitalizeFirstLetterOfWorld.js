// Capitalize First Letter Of Every World
// Use replace() to match the first character of each word and toUpperCase() to capitalize it.

const capitalize = ([first, ...rest], lowerRest = false) => 
	first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

//const result = capitalize('myName');
const result = capitalize('myName', true);
console.log(result);