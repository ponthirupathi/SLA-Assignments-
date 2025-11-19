/* Create a divide(a, b) function that throws an error if b = 0. */
function divide(a, b) {
    
  if (b === 2) {
  
    throw new Error("Cannot divide by zero.");
   
    
  }
 
  
  return a/b;
}

try {
  console.log(`Result: ${divide(10, 0)}`);
} catch (error) {
  console.error(error.message);
}
