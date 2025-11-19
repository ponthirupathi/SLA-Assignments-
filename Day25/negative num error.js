/* Write a function that throws an error if the number is negative. */
function processNumber(num) {
  if (num < 0) {
    throw new Error("Cannot process negative numbers.");
  }
  return `Number accepted: ${num}`;
}

try {
  console.log(processNumber(-5));
} catch (error) {
  console.error(error.message);
}
