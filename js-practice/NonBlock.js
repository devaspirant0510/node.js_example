const time = setTimeout(() => {
    console.log("hello")

}, 3000)
const a = 123;


function prom() {
    const pro = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a === 123) {
                resolve("good");
            } else {
                reject(new Error("bad"));
            }

        }, 1500);

    });
    return pro;
}
function haha(){
    const ha = new Promise((resolve,reject)=>{
        if (a===1293){
            resolve("a");
        }
        else{
            reject("gg");
        }
    });
    return ha;

}
prom().then( suc =>{
    console.log(suc);
    return haha();
}).then(suc=>{
    console.log(suc);
}).catch(err=>{
    console.log(err);
})
async function start(){
    return "as";

}

start().then(console.log)