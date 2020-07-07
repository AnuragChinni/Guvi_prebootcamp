
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
let sum = a[0]+a[1]+a[2]+a[3]+a[4];
let avg = sum/5;
console.log(avg);
 
 
});
