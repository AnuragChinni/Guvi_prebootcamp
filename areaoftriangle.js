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
  let d = Math.sqrt(3);
  let b = 0.25*d*a*a;
  let c = b.toFixed(2);
  console.log(c);
});
