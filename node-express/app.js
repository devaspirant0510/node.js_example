const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

app.set("port",port);



app.use((req, res, next) => {
    console.log("미들웨어");
    next();

}/*, (req,res,next)=>{
  throw new Error("에러났다.");
}*/);

app.get('/',(req, res,next) => {
    res.sendFile(path.join(__dirname,'index.html'));
    //res.json({hello:"seungho"});
    next("route");

});

app.get('/',((req, res) => {
    console.log("next 함수");
}))

app.get("/about",(req, res) => {
    res.send("about");
});

// 위 사항이 포함되지 않는 모든경우에 쓰임
// app.use('*',(req, res) => {
//     res.send("전부다 실행");
// });

// 에러처리
// 사용자에게 에러코드를 보여주지 않고 콘솔에만 보여줌
app.use((err,req, res, next) => {
    console.error(err);
    res.status(200).send("에러입니다");
});


app.listen(app.get("port"),()=>{
    console.log(`127.0.0.1:${app.get("port")}`);
});