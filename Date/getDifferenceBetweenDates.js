// Get days difference between days
// Calculate the difference (in days) between to Date objects.

const getDifferenceBetweenDates = (dateInitial, dateFinal) => (dateFinal - dateInitial) / (1000 * 3600 * 24);
const result = getDifferenceBetweenDates(new Date("2017-12-13"), new Date("2017-12-22"));
console.log(result); 