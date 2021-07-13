const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const dotenv = require("dotenv");
const nunjucks = require("nunjucks");
const multer = require("multer");

dotenv.config();



const router = express.Router();
const app = express();

app.set("port",process.env.PORT || 3000);
// app.engine('pug', require('pug').__express)
// app.set("views",path.join(__dirname,"views"));
app.set("view engine","html");

const indexRouter = require("./router/index_router");
const upload = multer({
    storage:multer.diskStorage({
        destination(req,res,done){
            done(null,"uploads/");
        },
        filename(req,file,done){
            const ext = path.extname(file.originalname);
            done(null,path.basename(file.originalname,ext)+Date.now+ext);
        }
    }),
    limits:{fileSize:5*1024*1024},
});

// 서버에 들어온 요청과 응답을 기록함
// dev, combined
// dev 는 요청,응답,응답시간 정도만 기록하고
// combined 는 ip 주소 브라우저 등 더 자세하게 기록함
// 개발용은 dev 배포용은 combined 가 적합하다고 함
app.use(morgan("combined"));
app.use("/",express.static(path.join(__dirname,"public")));
app.use("/img",express.static(path.join(__dirname,"public","img")));
app.use(express.json());
app.use(express.urlencoded({extended:true})); // true 면 qs false 면 queryString  결론적으로 true 가 더 강력함
app.use(cookieParser());
app.use("/index",indexRouter);

nunjucks.configure("views",{
    express :app,
    watch:true
});

app.use((req,resm,next)=>{
    console.log("모든 요청");
    next();
});

app.get("/",(req, res) => {
    res.send("<h1>Hello NodeJS</h1>");
});

app.get("/upload",(req, res) => {
    res.sendFile(path.join(__dirname,"engine.html"),err => {
        console.log(err);
    });
});

app.post("/upload",(req, res) => {
    console.log(req.file);
    res.send("ok");
});

// html 서빙하기 express 는 sendFile 로 대체 가능
app.get('/',(req, res,next) => {
    // path.join 으로 운영체제에 따라 경로 설정
    // 리눅스는 / 윈도우는 \
    console.log(path.join(__dirname,'engine.html'));
    res.sendFile(path.join(__dirname,'engine.html'));
});

app.get('/error',(req, res, next) => {
    console.log("error 남");
    next();
},(req,res)=>{
    throw new Error("에러처리 미들웨어");
});

app.get("/about",(req, res) => {
    res.send("about");
});

app.get("/list/9",((req, res) => {
    res.send("글루 가면 안돼요");
}));

app.get("/list/:id",((req, res) => {
    console.log(req.params.id);
    res.send(`인덱스 번호는 ${req.params.id}`);
}));

app.get("/json",(req, res) => {
    res.json({name:"seungHo"});
});
// 라우트 그룹화
router.route("/group")
    .get((req, res) => {

    })
    .post((req, res) => {

    });

app.get("/engine",((req, res,next) => {
    const data= [{id:0,title:" python"},{id:1,title:" javascript"},{id:2,title: " c++"}];
    res.render("engine",{title:"express",list:data});
}));

app.use("/",(req,res,next)=>{
    res.send("잘못된 주소입니다.");
});

// 에러처리는 next 가 꼭 들어가야함
app.use((err,req,res,next)=>{
    console.log(err);
    // 404 에러로 취약점을 분석할수 있기때문에 오류가 나더라도 200 으로 띄움
    res.status(200).send("오류났다.");
})


app.listen(app.get("port"),()=>{
    console.log(`127.0.0.1:${app.get("port")}`);
});