
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
let i =0;
while(input[i]!=="CaptianAmerica")
{console.log(input[i]);
i++;
}
}

dataHandling(friends);

});
