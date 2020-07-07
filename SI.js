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
  let f = userInput[0].split(" ");
  let b = f[1];
  let c = f[2];
  let g = f[0];
  let d = (g*b*c)/100;
  let e = d.toFixed(2);
  console.log(e);
});
