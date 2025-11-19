/* Combine all: validate input, throw error if invalid, catch it, and log result in finally. */
function processUserData(username, age) {
  try {
    console.log("Starting data processing...");

    if (!username || username.length < 3) {
      throw new Error("Username must be at least 3 characters long.");
    }

    if (typeof age !== 'number') {
      throw new Error("Age must be a number.");
    }

    console.log(`User ${username} (Age ${age}) validated successfully.`);
    return true;

  } catch (error) {
    console.error("An error occurred during processing:", error.message);
    return false;

  } finally {
    console.log("Data processing attempt finished.");
  }
}

console.log("--- Test 1 (Valid) ---");
processUserData("Alice", 30);

console.log("\n--- Test 2 (Invalid Age Type) ---");
processUserData("Bob", "sixteen");

console.log("\n--- Test 3 (Invalid Username) ---");
processUserData("C", 25);
