// const a = [1, 0, 1, 1, 0, 1];
// const b = [0, 1, 1, 0, 0, 0];
// function addBinary(binA, binB) {
//   var ans = [];
//   for (var i = a.length - 1; i >= 0; i--) {
//     ans[i] = binA[i] + binB[i];
//   }
//   console.log(ans);
//   ans.unshift(0);
//   console.log(ans);
//   for (var i = ans.length - 1; i >= 0; i--) {
//     if (ans[i] >= 2) {
//       ans[i] = ans[i] - 2;
//       ans[i - 1] += 1;
//     }
//   }
//   console.log(ans);
// }

// addBinary(a, b);

// // addBinary(a, b) === [1, 0, 0, 0, 1, 0, 1]

// var friut = ["apple", "banana", "peach"];
// console.log(friut);
// friut.push("coconut");
// console.log(friut);

// function greet(name) {
//   return "hello " + name + "!";
// }
// console.log(greet("sonam"));
// c;
// function isEven(num) {
//   var x = num % 2;
//   if (x == 0) {
//     return "true";
//   } else {
//     return "false";
//   }
// }
// console.log(isEven(9));

// function calArea(radius) {
//   var area = 3.14 * radius * radius;
//   return area;
// }
// console.log(calArea(5));

// function reverse(word) {
//   return word.split("").reverse().join("");
// }
// console.log(reverse("word"));

// function sumarray(array){
// var x =
// }

// function sumArray(array) {
//   let sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum = array[i] + sum;
//     console.log(sum);
//   }
//   return sum;
// }
// console.log(sumArray([1, 2, 3, 4]));
// 345 4 6 9 1 3 6

// function countVowels(str) {
//   var count = 0;
//   for (var i = 0; i < str.length; i++) {
//     if ("aeiou".includes(str[i])) {
//       count = count + 1;
//     }
//   }

//   if (count <= 1) {
//     return "it contain " + count + " vowel";
//   } else {
//     return "it contain " + count + " vowels";
//   }
// }
// console.log(countVowels("a quick brown fox jumps over a lazy dog"));

function countVowels(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) {
      count = count + 1;
    }
  }
  const plural = count > 1 ? "s" : "";

  return "it contain " + count + " vowel" + plural;
}
console.log(countVowels("a"));
