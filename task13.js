const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {

let a = "anurag";
let b = "un_married";
let c = "21";
let d = "India";


console.log(a,b,c,d);
});
