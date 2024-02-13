//for loop
// for (i = 5; i > 0; i--) {
//   console.log("hello world", i);
// }
// for (i = 0; i <= 5; i++) {
//   console.log("hello world", i);
// }

//while loop
// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// const readline = require("readline-sync");

// let answer = "";
// while (answer === "yes") {
//   answer = readline.question("Do you want to continue? (yes/no): ");
//   if (answer !== "yes" && answer !== "no") {
//     console.log("Invalid input. Please enter 'yes' or 'no'.");
//   }
// }

// console.log("You chose not to continue!");
//while loop
const readline = require("readline-sync");

let num = Number(
  readline.question(
    "Enter a number to generate its multiplication table till 12: "
  )
);
let i = 1;
while (i <= 12) {
  console.log(num + " x " + i + " = " + num * i);
  i++;
}
