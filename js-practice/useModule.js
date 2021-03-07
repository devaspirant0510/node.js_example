//const {odd,even} = require("./myModule");
const myModule  = require("./myModule");

//import myM from "./myModule";

//console.log(myM.even)

//불러올개 한개일때
//
// console.log(myModule);

// 불러올개 여러개일떄
console.log(myModule.odd);
function chekNum(num){
    if (num%2===0){
        return myModule.even;
    }
    else {
        return myModule.odd;
    }
}

console.log(`3 is :${chekNum(3)}`);

console.log(`4 is :${chekNum(4)}`);