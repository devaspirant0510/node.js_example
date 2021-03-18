const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.method === "GET"){
        if (req.url === "/"){
            fs.readFile("./index.html",(err, data) => {
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);

            });

        }
        else{
            console.log(req.url);
            fs.readFile(`.${req.url}`,(err, data) => {
                res.writeHead(200,{"Content-Type":"text/css; charset=utf-8"})
                return res.end(data);
            })
        }
    }
}).listen(8181)

server.on("listening", () => {
    console.log("로컬호스트에 접속하세요 포트번호 : 8181");
})
