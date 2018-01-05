// Initialize 2D Array
// Initialize 2D Array of given width & height & value.
// Use array.map() to generate h rows where each is a new array of size w initialize with value. If the value is not provided, default to null.

const initialize2DArray = (w, h, val = null) => 
	Array(h)
		.fill()
		.map(() => Array(w).fill(val));

const result = initialize2DArray(2, 2, 0);
console.log(result);