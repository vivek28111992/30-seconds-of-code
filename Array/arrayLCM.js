// Array LCM
// Calculates the lowest common multiple (lcm) of an array of numbers.
// Use Array.reduce() and the lcm formula (uses recursion) to calculate the lowest common multiple of an array of numbers.

const arrayLcm = arr => {
	const gcd = (x, y) => !y ? x : gcd(y, x % y);
	const lcm = (x, y) => (x*y)/gcd(x, y);
	return arr.reduce((a, b) => lcm(a, b)); 
}
const result = arrayLcm([6, 3, 7]);
console.log(result);