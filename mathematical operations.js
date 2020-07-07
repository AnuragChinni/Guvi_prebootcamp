
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
let b = a[0];
let c = a[1];
console.log(b+c,b-c,b*c,b/c,b**c,b%c);
});
