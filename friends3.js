
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 

const friendsInfo = [6, 12, "Mari", 1, "true", "Munnabai", 200, "CaptianAmerica", 8, 10];
let arr=[];
let sum =0;
for(let ind=0;ind<friendsInfo.length;ind++)
{
   if(typeof(friendsInfo[ind])==="number")
   arr.push(friendsInfo[ind]);
   
}
for(let ind=0;ind<arr.length;ind++)
{
    sum = sum +arr[ind];
    
}
let avg = sum/arr.length;
console.log(arr,avg);

});
