//Write a try...catch block that catches a ReferenceError.
try {
  console.log(nonExistentVariable);
} catch (error) {
  if (error instanceof ReferenceError) {
    console.error("Caught a ReferenceError:", error.message);
  } else {
    console.error("An unexpected error occurred:", error.message);
  }
}
