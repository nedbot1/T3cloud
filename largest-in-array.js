const numbers = [12, 44, 9.8473, 30, -12, 57382, 1, 0.3422];

var largestNumber = numbers[0]; // Initialize largest to the first element of the array
var lowestNumber = numbers[0];
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > largestNumber) {
    largestNumber = numbers[i];
  }
  if (numbers[i] < lowestNumber) {
    lowestNumber = numbers[i];
  }
}

console.log("The largest number in the array is:", +largestNumber);
console.log("The lowest number in the array is:", +lowestNumber);
