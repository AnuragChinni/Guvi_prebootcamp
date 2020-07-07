const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {

let a = "anurag chinni";
let b ;
let c = "21";
let d = "\0";


console.log(a,b,c,d);
});
