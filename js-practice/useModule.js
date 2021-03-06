const getModule = require("./myModule")
const {odd,even} = require("./myModule");

//import myM from "./myModule";

//console.log(myM.even)
console.log(odd);
function chekNum(num){
    if (num%2===0){
        return getModule.even;
    }
    else {
        return getModule.odd;
    }
}

console.log(`3 is :${chekNum(3)}`);

console.log(`4 is :${chekNum(4)}`);