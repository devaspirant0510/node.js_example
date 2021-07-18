const express = require("express");
const path = require("path");

const socket = require("./socketIOServer");
const app = express();

app.set("port",process.env.PORT||8005);

app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname,"views","index.html"));
})
const server = app.listen(app.get("port"),()=>{
    console.log(`server is open 127.0.0.1:${app.get("port")}`);
});
socket(server);

