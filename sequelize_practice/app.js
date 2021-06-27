const express = require("express");
const morgan = require("morgan");
const nunjucks = require("nunjucks")
const path = require("path");

const {sequelize,User,Comment} = require("./models");
const mainRoute = require("./routes/mainRoute");
const userRoute = require("./routes/userRoute");
const commentRoute = require("./routes/commentRoute");

const app = express();

app.set("port",process.env.PORT||80);
app.set("view engine","html");
nunjucks.configure(path.join(__dirname,"views"),{
    express:app,
    watch:true
});

app.use(morgan('dev'));
console.log(path.join(__dirname,"public"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

sequelize.sync({force:false}).then(value => {
    console.log("연결 성공");
}).catch(reason => {
    console.log(reason);
});

app.use("/",mainRoute);
app.use("/user",userRoute);
app.use("/comment",commentRoute);


app.listen(app.get("port"),()=>{
    console.log(`127.0.0.1`);

});
