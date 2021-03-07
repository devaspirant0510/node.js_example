// 전역해서 this 를 하면 빈객체
console.log(this);
console.log(global);

// 함수안에서 this 를 하면 global
function aa (){
    console.log(this);
}
aa();