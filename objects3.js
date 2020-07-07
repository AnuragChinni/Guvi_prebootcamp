const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {

let myobj ={
    
    "add1":"Guvi, Geek, 6, IIT-M RP,Chennai.",
    "add2":"Amazon, Inc, 31, SP Infocity, Chennai.",
    "add3":"Google, Alphabet, 34 Amphitheater Parkway, MountainView.",
    "add4":"Tesla, Inc , 32, 333 Santana Row,San Jose.",
}
console.log(myobj.add1);
console.log(myobj.add2);
console.log(myobj.add3);
console.log(myobj.add4);

});
