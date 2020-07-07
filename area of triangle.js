
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
let s = (a[0]+a[1]+a[2])/2;
let area = Math.sqrt(s*(s-a[0])*(s-a[1])*(s-a[2]));
console.log(area);
 
});
