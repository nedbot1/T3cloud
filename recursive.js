//find the n factorial(n!)
// function recursive(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * recursive(n - 1);
//   }
// }
// console.log(recursive(6));

// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }
// console.log(evenOrOdd(2));

// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// // Example usage
// console.log(evenOrOdd(4)); // Output: "Even"
// console.log(evenOrOdd(7)); // Output: "Odd"
function printerError(s) {
  let errorCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] < "a" || s[i] > "m") {
      errorCount++;
    }
  }

  return errorCount + "/" + s.length;
}

console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
