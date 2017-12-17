// Collatz Algorithm
// If n is even, return n/2. Otherwise return 3n+1.

// To get result of all the numbers till the number passed to function
/*const collatz = n => {
	while(n){
		let res = (n % 2 === 0) ? (n / 2) : (3*n)+1;
		n--;
		console.log(res);
	}
	return true;
}*/

const collatz = n => (n % 2 === 0) ? (n / 2) : (3*n)+1;
const result = collatz(9);
console.log(result);
