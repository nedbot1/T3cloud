var rl = require("readline-sync");

// Prompt the user to enter the initial number
var ans = Number(rl.question("Enter a number: "));

for (var i = 0; i < 5; i++) {
  // Prompt the user to enter the next number
  var userNumber = Number(rl.question("\nEnter another number: "));

  // Check if the entered value is a valid number
  if (isNaN(userNumber)) {
    console.log("Invalid input. Please enter a valid number.");
    continue; // Skip the rest of the loop iteration and move to the next one
  }

  // Prompt the user to select an operation
  const choice = rl.question(
    "\nWhat operation would you like to perform?\n1) Add\n2) Subtract\n3) Multiply\n4) Divide\n5) Calculate remainder\n"
  );

  // Perform the selected operation and update 'ans' accordingly
  switch (choice) {
    case "1":
      ans += userNumber;
      break;
    case "2":
      ans -= userNumber;
      break;
    case "3":
      ans *= userNumber;
      break;
    case "4":
      if (userNumber === 0) {
        console.log("Error: Cannot divide by zero.");
      } else {
        ans /= userNumber;
      }
      break;
    case "5":
      ans %= userNumber;
      break;
    default:
      console.log("Invalid choice. Please select a valid operation.");
      continue; // Skip the rest of the loop iteration and move to the next one
  }

  // Display the current result after each operation
  console.log("Current result: " + ans);
}

console.log("\nFinal result: " + ans);
