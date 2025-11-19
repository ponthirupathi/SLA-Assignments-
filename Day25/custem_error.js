/* Create custom error messages for invalid name or email input. */
function validateUserInput(name, email) {
  if (!name || name.trim() === "") {
    throw new Error("Validation Failed: Name cannot be empty.");
  }

  if (!email || !email.includes("@")) {
    throw new Error("Validation Failed: Invalid email format.");
  }

  return "Input is valid.";
}

try {
  console.log(validateUserInput("", "john@example.com"));
} catch (error) {
  console.error(error.message);
}
