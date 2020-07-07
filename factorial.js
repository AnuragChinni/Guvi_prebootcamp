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
  let fact = 1;
  for(i=1;i<=a;++i)
  {
fact = fact*i;
  }
  console.log(fact);
  
});
