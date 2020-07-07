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
let b = 1;
let c = [];
for(i=1;i<=a;i = i+1)
{
    b = 9*i;
    c.push(b);

}
console.log(c.join(' '));
});
