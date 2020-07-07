
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
let friends = [ "Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAKchandran"];
function dataHandling(input){
for (var i = 0; i < input.length; i++) {
input[0]="Anurag";
input[1]="Chinni";
input[2]="venkat";
input[3]="krishna";
}
}
dataHandling(friends);
console.log(friends);
});
