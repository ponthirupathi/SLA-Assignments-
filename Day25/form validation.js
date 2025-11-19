/* Write a form validation script that uses try...catch for missing fields. */
function submitForm(formData) {
  if (!formData.username) {
    throw new Error("Missing Field: Username is required.");
  }
  if (!formData.password) {
    throw new Error("Missing Field: Password is required.");
  }
  return "Form submitted successfully.";
}

const formInput = {
  username: "user123"
};

try {
  console.log(submitForm(formInput));
} catch (error) {
  console.error(`Validation Error: ${error.message}`);
}
