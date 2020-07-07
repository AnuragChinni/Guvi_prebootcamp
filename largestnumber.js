const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {


let  a = userInput[0];
 let b = userInput[1];
  let c = userInput[2];
 
    if(a>b && a>c)
      console.log(a);
  if(b>a && b>c)
      console.log(b);
  if(c>a && c>b)
      console.log(c);
  
  
});
