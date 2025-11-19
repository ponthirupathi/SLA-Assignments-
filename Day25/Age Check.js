/* Create a simple “Age Check” function with custom error for underage users. */
function checkAge(age) {
  const MINIMUM_AGE = 18;
  if (age < MINIMUM_AGE) {
    throw new Error(`User must be at least ${MINIMUM_AGE} years old.`);
  }
  return "Age verified. Access granted.";
}

try {
  console.log(checkAge(16));
} catch (error) {
  console.error(`Age Check Failed: ${error.message}`);
}
