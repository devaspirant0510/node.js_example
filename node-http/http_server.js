const http = require("http")
const fs = require("fs").promises;




const port = 8888;
const server = http.createServer(async (req, res) => {
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    const data = await fs.readFile("./index.html");
    // fs.readFile("./index.html",(err, data) => {
    //     res.end(data);
    // });
    res.end(data);


}).listen(port)

server.on("listening",()=>{
    console.log("open server !!");
    console.log("127.0.0.1:"+port);
})
server.on("error",(err)=>{
    console.log(err);
});