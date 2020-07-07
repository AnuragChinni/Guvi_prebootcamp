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
    
    "1":"one",
    "11": 1,
    "name":"arun",

}
console.log(myobj[1]);
});
