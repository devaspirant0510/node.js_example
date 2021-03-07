const odd = "odd";
const even = "even";
function hello(){
    console.log("hello");
}
//*------------불러올개 하나일때------------*//
// ex) 이때 const a = require("...") 했을때
// a는 odd 가 됨
//module.exports = odd;



//*----------여러가지 불러와야할때----------*//
//*이 방법에선 한가지만불러오든 여러개를 불러오든 상관x
// 주의 해야할점 : 둘중에 하나의 방법으로만 써야됨
//1.--------------------------------------
// 여러가지를 exports 해와야 할때
// 모듈 exports 의 참조 관계 유지됨
// exports.odd = odd;
// exports.even = even;

//2.--------------------------------------
// 이런식으로 객체형태로 쓸수 있음
module.exports={
    odd:odd,
    even:even
}
// key 값과 value 값이 같을경우 하나로 생략가능
// module.exports={
//     odd,
//     even
// }
