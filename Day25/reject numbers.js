/* Use throw to reject numbers greater than 100. */
function setScore(score) {
  if (score > 100) {
    throw new Error("Score cannot be greater than 100.");
  }
  return `Score set to ${score}.`;
}

try {
  console.log(setScore(105));
} catch (error) {
  console.error(error.message);
}
