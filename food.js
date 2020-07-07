
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 
let food=[];
let foods=userInput[0].split(" ");
for(let ind=0;ind<foods.length;ind++)
{
    food[ind]=foods[ind];
}
let i=0;
let len=0;
while(food[i]!==undefined)
{
    len+=1;
    i++;
}
console.log(len);
console.log(food[4]);
console.log(food.length);
});
