var rl = require("readline-sync");
var ans = Number(rl.question("Enter Number \n"));

for (var i = 0; i < 5; i++) {
  var userNumber = Number(rl.question("\nEnter Number \n"));
  if (isNaN(userNumber)) {
    console.log("Wrong input, enter a valid first number \n");
  } else {
    const choice = rl.question(
      "what would you like to do with numbers: \n1)Add \n2)Subtract \n3)Multiply \n4)Divide \n5)remainder\n"
    );
    if (choice === "1") {
      ans += userNumber;
    } else if (choice === "2") {
      ans -= userNumber;
    } else if (choice === "3") {
      ans *= userNumber;
    } else if (choice === "4") {
      ans /= userNumber;
    } else if (choice === "5") {
      ans %= userNumber;
    } else {
      console.log("enter a valid option");
    }
    console.log("The answer is " + ans);
  }
}
