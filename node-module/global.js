console.time("time")

const aa = {
    name:"seungho",
    age:20};
console.log(aa);
console.dir(aa);
console.table(aa);

const time1 = setTimeout(()=>{
    console.log("1초후 실행");
},1000);
const time2 = setInterval(()=>{
    console.log("3초마다 실행");
},3000);
const time3 = setTimeout(()=>{
    console.log("10초후 실행");
    console.log("3초마다 실행되는 녀석 죽임");
    clearInterval(time2);
},10000)
const time4 = setImmediate(()=>{
    console.log("바로 실행");
});
const time5 = setImmediate(()=>{
    console.log('죽음');
})
clearImmediate(time5);
console.timeEnd("time");