
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
const friends = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff",
"AAK chandran"];
function dataHandling(input, name){


if(input.includes(name))
console.log("found");
else
console.log("not found");

}
dataHandling(friends,"Anurag");

});
