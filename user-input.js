// var readline = require("node:readline");

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// var story = " ";

// story = story + "Once upon a time, there lived a person named ";
// rl.question("what is your name? ", (userName) => {
//   story = story + userName + ". ";

//   story = story + "he came from a beautiful vallage of ";
//   rl.question("what is your village name? ", (villageName) => {
//     story = story + villageName + ". ";

//     story = story + "He became the world greatest ";
//     rl.question("what is your profession? ", (profession) => {
//       story = story + profession + ". ";

//       story = story + "He likes ";
//       rl.question("what is your hobby? ", (hobby) => {
//         story = story + hobby + ". ";

//         story = story + "He got married to ";
//         rl.question("what is your wifes name? ", (wifeName) => {
//           story = story + wifeName + ". ";

//           console.log(story);
//           rl.close();
//         });
//       });
//     });
//   });
// });

var rl = require("readline-sync");

story = " ";

story = story + "Once upon a time, there lived a person named ";
var userName = rl.question("What's your name? ");
story = story + userName + ". ";

story = story + "They came from the beautiful village of ";
var villageName = rl.question("What's your village name? ");
story = story + villageName + ". ";

story = story + "Every day they ate ";
var food = rl.question("What's your favorite food? ");
story = story + food + ". ";

story = story + "They became the world's greatest ";
var profession = rl.question("What's your profession? ");
story = story + profession + ". ";

story = story + "They liked ";
var hobby = rl.question("What's your hobby? ");
story = story + hobby + ". ";
console.log(story);
