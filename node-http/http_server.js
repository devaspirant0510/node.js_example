const http = require("http")

const port = 8888;
const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
    res.write("<h1>Hello Node</h1>")
    res.write("<p>hello Server</p>")
    res.end("<p>hello 3.14썬</p>")


}).listen(port)

server.on("listening",()=>{
    console.log("open server !!");
    console.log("127.0.0.1:"+port);
})
server.on("error",(err)=>{
    console.log(err);
});