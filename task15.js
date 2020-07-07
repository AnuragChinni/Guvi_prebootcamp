const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {


let c = "21";
let d = parseInt(c);
let e = +c;
console.log(c,d,e);
});
