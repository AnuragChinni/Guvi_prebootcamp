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
  let b = Math.PI;
  let c = 2*b*a;
  let d = c.toFixed(2);
  console.log(d);
});
