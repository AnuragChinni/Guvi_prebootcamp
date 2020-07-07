const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

let a = [ 31,28,31,30,31,30,31,31,30,31,30,31 ];
  let b = userInput[0];
  if (b==0 || b>12)
    console.log("Error");
  else
    console.log(a[b-1]);
});
