
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 
let a = userInput[0].split(" ").map(val => +val);
let basearea= a[0];
let height = a[1];
console.log(basearea*height);
 
 
});
