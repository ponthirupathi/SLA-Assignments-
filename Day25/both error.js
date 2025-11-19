/* Make a try...catch that logs both error.name and error.message. */
try {
  null.someProperty = true;
} catch (error) {
  console.log("--- Error Details ---");
  console.log("Error Name:", error.name);
  console.log("Error Message:", error.message);
  console.log("---------------------");
}
