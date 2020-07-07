const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {


let rows=7;
let columns=7;
let arr=[];
let as ="*";
for(let ind=1;ind<=rows;ind++)
{
    for(let inx=7;inx<=columns;inx++)
    {
        arr.push(as);
        console.log(arr.join(' '));
    }
}
});
