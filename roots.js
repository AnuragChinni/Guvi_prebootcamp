// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 
 let x = userInput[0].split(" ").map(val => +val);
 let a = x[0];
 let b = x[1];
 let c = x[2];
 let d = ((-b+Math.sqrt((b*b)-(4*a*c)))/(2*a));
 let e =  ((-b-Math.sqrt((b*b)-(4*a*c)))/(2*a));
 let f = d.toFixed(2);
 let g = e.toFixed(2);
 console.log(f);
 console.log(g);
 
});
