//before
var example = {a:123,b:{c:135,d:146}};
var a = example.a;
var b = example.b;
var c = example.b.c;
var d = example.b.d;
console.log(`a:${a},b:${b},c:${c},d:${d}`);
//after
var {a,b,b:{c},b:{d}} = example;
console.log(`a:${a},b:${b},c:${c},d:${d}`);

//before
var arr = [1,2,3,4,5];
var x = arr[0];
var y = arr[3];
var z = arr[4];
console.log(x,y,z);
//after
var [x,,,y,z] = arr;
console.log(x,y,z);