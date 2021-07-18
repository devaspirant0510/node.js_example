const express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");
const {sequelize} = require("./models");

const webSocket = require("./webSocket");
const indexRouter = require("./router/indexRouter");
const messageRouter = require("./router/messageRouter");

const app = express();

sequelize.sync({force:false}).then(value => {
    console.log("연결 성공");
}).catch(reason => {
    console.log(reason);
});

app.set("port",process.env.PORT||8005);
app.set("view engine","html");
nunjucks.configure(path.join(__dirname,"views"),{
    express:app,
    watch:true
});
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

app.use("/",indexRouter);
app.use("/message",messageRouter);


const server = app.listen(app.get("port"),()=>{
    console.log(`sever is open !! 127.0.0.1:${app.get("port")} `);
});
webSocket(server);
