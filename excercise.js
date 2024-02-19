/*
	Split Binary Chunks

	For a given string of binary, return an array of strings where each string length is equal to the passed chunk size.

	Input:
	- "11010111011101110001101010110100"
	- 4 

	Output:
	["1101", "0111", "0111", "0111", "0001", "1010", "1011", "0100"]

	If the string is not divisible by the chunk integer, simply chunk the remainder together.

	Input:
	- "10101010"
	- 6
	
	Output:
	["101010", "10"]

*/

// function splitBinaryChunks(binaryString, chunkSize) {
//   var chunks = [];
//   var currentChunk = "";
//   for (let i = 0; i < binaryString.length; i++) {
//     currentChunk += binaryString[i];
//     if ((i + 1) % chunkSize === 0) {
//       chunks.push(currentChunk);
//       currentChunk = "";
//     }
//   }
//   if (currentChunk !== "") {
//     chunks.push(currentChunk); // Handle the remainder of the string
//   }
//   return chunks;
// }

// let input1 = "11010111011101110001101010110100";
// let chunkSize1 = 4;
// console.log(splitBinaryChunks(input1, chunkSize1));

// let input2 = "10101010";
// let chunkSize2 = 6;
// console.log(splitBinaryChunks(input2, chunkSize2));

/*
	Get Middle Characters

	For a given string, return the middlemost character (or characters if the string has an even length).

	Input:
	- "hello"

	Output:
	"l"

	Input:
	- "Kuzuzangpo"

	Output:
	"za"

*/

// function getMiddleCharacters(someString) {
//   var middleChars = "";
//   var middleIndex = Math.floor(someString.length / 2);

//   if (someString.length % 2 === 0) {
//     middleChars = someString.slice(middleIndex - 1, middleIndex + 1);
//   } else {
//     middleChars = someString[middleIndex];
//   }

//   return middleChars;
// }

// // Example usage
// console.log(getMiddleCharacters("hello")); // Output: "l"
// console.log(getMiddleCharacters("Kuzuzangpo")); // Output: "za"

/*
	Get Deepest Value.

	For any given object, return the deepest value in that object:

	Input:
		{
			a: 1,
			b: {
				c: 2
			},
			d: 3,
			e: {
				f: {
					g: 4
				}
			}
		}

	Output:
	4

	In the above example, the correct answer is 4, because it is nested 3 levels deep.
	e.f.g

	If there are more than one possible deepest value, return either.

*/
function getDeepestValue(obj) {
  var keepTrack = [];
  var capture = Object.values(obj);
  var canGoDeeper = [];

  for (var i = 0; i < capture.length; i++) {
    if (typeof capture[i] === "object") {
      canGoDeeper.push(capture[i]);
    }
  }

  if (canGoDeeper.length === 0) {
    return capture[0];
  } else {
    for (var j = 0; j < canGoDeeper.length; j++) {
      keepTrack.push(getDeepestValue(canGoDeeper[j]));
    }
    return keepTrack[keepTrack.length - 1];
  }
}
var someObject = {
  a: 1,
  b: {
    c: 2,
  },
  d: 3,
  e: {
    f: {
      g: 4,
    },
  },
};
console.log(getDeepestValue(someObject));
