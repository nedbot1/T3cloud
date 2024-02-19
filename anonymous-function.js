// function addSomething(a, b) {
// 	return a + b;
// }

// var addSomething = (a, b) => {
// 	return a + b
// }
// console.log(addSomething(1, 3))

var myArr = [1, 2, 3, 4, 5, 6];
// implicit return
var myFilteredArr = myArr.filter((element) => element % 2 === 0);

// console.log(myFilteredArr)

var newArr = [1, 2, 3, 4, 5, 6];

var myMappedArr = newArr.map((element) => element * element);

// console.log(myMappedArr)

var evenArr = [0, 2, 4, 6, 8];

// var isAllEven = evenArr.every((element) => element % 2 === 0)
var isAnyOdd = evenArr.some((element) => element % 2 !== 0);

console.log(isAnyOdd);
