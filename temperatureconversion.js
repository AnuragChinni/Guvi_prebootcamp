const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {


let a = userInput[0];
let b = (a*1.8)+32
let c = b.toFixed(2);
console.log(c);









});
