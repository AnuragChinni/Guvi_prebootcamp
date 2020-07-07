
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 
let rad = userInput[0];
let dia = rad*2;
let cir = 2*Math.PI*rad;
let area = Math.PI*rad*rad;
console.log(dia,cir,area);
 
});
