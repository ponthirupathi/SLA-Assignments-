/* Use a finally block that always prints “Code executed.” */
function testFinally() {
  try {
    console.log("In the try block.");
  } catch (error) {
    console.error("In the catch block:", error.message);
  } finally {
    console.log("Code executed.");
  }
}

testFinally();
