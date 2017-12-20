// Array GCD
// Calculates the greatest common denominator (gcd) of an array of numbers.
// Use Array.reduce() and the gcd formula (uses recursion) to calculate the greatest common denominator of an array of numbers.

const arrayGcd = arr => {
	const gcd = (x, y) => !y ? x : gcd(y, x % y);
	return arr.reduce((a, b) => gcd(a, b));
} 

const result = arrayGcd([4,8,12]);
console.log(result);