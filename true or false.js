const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {


let names =["anurag","chinni","venkata","krishna","rushyanth"];
console.log(names.includes("hari"));
console.log(names.includes("anurag"));
console.log(names.includes("manoj"));
console.log(names.includes("chinni"));
console.log(names.includes("venkata"));
console.log(names.includes("gopi"));
});
