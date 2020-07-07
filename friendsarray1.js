
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 

var friends1 = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
var friends2 = ["Gabbar","Rajinikanth","Mass","Spiderman","Jeff","ET"];
let friends3 = [];
function dataHandling(input){
 friends3 = input.concat(friends2);
 friends3.push("Anurag");
 friends3.unshift("Chinni")

}
dataHandling(friends1);
console.log(friends3[0],friends3[friends3.length - 1],friends3[friends3.length/2]);
console.log(friends3);
console.log(friends3.join(','));


});
