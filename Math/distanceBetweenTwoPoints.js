// Distance between two points
// Use Math.hypot() to calculate the Euclidean distance between two points.

const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
const result = distance(1, 1, 2, 2);
console.log(result);