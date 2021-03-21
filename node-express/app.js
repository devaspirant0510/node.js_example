const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

app.set("port",port);
app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));

})
app.get("/about",(req, res) => {
    res.send("about");
})
app.listen(app.get("port"),()=>{
    console.log(`127.0.0.1:${app.get("port")}`);
});