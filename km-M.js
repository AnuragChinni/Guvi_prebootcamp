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
  let b = a*1000;
  let c = a*100000;
  console.log(b);
  console.log(c);
});
