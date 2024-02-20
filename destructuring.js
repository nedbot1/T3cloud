const myFuncs = require("./useful-functions");
// import { addNumbers } from './useful-functions'

const result = addNumbers(1, 2);

console.log(result);

const myObj = {
  prop1: "hello",
  prop2: 456,
};

const { prop1, prop2, prop3 } = myObj;

console.log(prop3);
