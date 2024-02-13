var rl = require("readline-sync");
var num1 = Number(rl.question("Enter first number \n"));
if (isNaN(num1)) {
  console.log("Worng input, please enter a number \n");
  return;
} else {
  var num2 = Number(rl.question("Enter second number \n"));
  if (isNaN(num2)) {
    console.log("Worng input, please enter a number \n");
    return;
  }
  const choice = rl.question(
    "would you like to \n1)Add \n2)Subtract \n3)Multiply \n4)Divide \n5)remainder \n"
  );
  if (choice === "1") {
    var ans = num1 + num2;
  } else if (choice === "2") {
    var ans = num1 - num2;
  } else if (choice === "3") {
    var ans = num1 * num2;
  } else if (choice === "4") {
    var ans = num1 / num2;
  } else if (choice === "5") {
    var ans = num1 % num2;
  } else {
    console.log("enter a valide option");
  }
  console.log("The answer is " + ans);
}
