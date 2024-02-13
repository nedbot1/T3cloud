// var rl = require("readline-sync");

// function getNumberFromUser() {
//   var reply = rl.question("Give me a number\n");
//   var convertedToNumber = Number(reply);
//   if (isNaN(convertedToNumber)) {
//     console.log("Invalid input!!\nPlease enter a number.");
//     // If input is invalid, recursively call the function until a valid number is entered
//     return getNumberFromUser();
//   } else {
//     return convertedToNumber;
//   }
// }

// var a = getNumberFromUser();
// var b = getNumberFromUser();
// console.log("Result is " + (a - b));
var rl = require("readline-sync");
function getNumberFromUser() {
  var reply = rl.question("Give me a number \n");
  var numberOrNot = Number(reply);
  if (isNaN(numberOrNot)) {
    throw "Input must be a valid number";
  } else {
    return numberOrNot;
  }
}
try {
  var a = getNumberFromUser();
  console.log(a);
  var b = getNumberFromUser();
  console.log(b);
} catch (err) {
  console.error(err);
}
console.log("continuing the process.....");
