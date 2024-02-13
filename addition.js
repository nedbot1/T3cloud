var rl = require("readline-sync");

var firstNumber = rl.question("give me a number ");
console.log("you have entered " + firstNumber);
// firstNumber = Number(firstNumber);

var secondNumber = rl.question("give me a another number ");
console.log("you have enterd " + secondNumber);
// secondNumber = Number(secondNumber);

var sum = Number(firstNumber) + Number(secondNumber);
console.log("and the sum is " + sum);
console.log("bbb");
