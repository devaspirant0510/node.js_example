const http = require("http");
const fs = require("fs").promises;
const fs1 = require("fs");


let users ={};
const server = http.createServer((async (req, res) => {
    try {
        // get 메서드를 받아올때
        if (req.method === "GET") {
            if (req.url === '/') {
                const data = await fs.readFile("./index.html");
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);

            } else if (req.url === '/about') {
                const data = await fs.readFile("./about.html");
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            }
            else if (req.url === '/users'){
                res.writeHead(200,{"Content-Type":"application/json; charset=utf-8"});
                return res.end(JSON.stringify(users));
            }
            try {
                const data = await fs.readFile(`.${req.url}`);
                return res.end(data);

            } catch (err) {
            }

        }
        else if (req.method === "POST") {
            console.log("post");
            console.log(req.url);
            if (req.url === "/user") {
                let body = "";
                req.on('data',(data)=>{
                    body+=data;
                })
                req.on("end",()=>{
                    const name  = JSON.parse(body);
                    const id = Date.now();
                    users[id] = name;
                    console.log("JSON 에 저장된 데이터 : ",users);
                })

                res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'})
                return res.end('ok');
            }

        }
        else if (req.method === "PUT"){
            console.log("d");
            if (req.url.startsWith("/users/")){
                const key = req.url.split('/')[2];
                let body = '';
                req.on("data",(data)=>{
                    body+=data;
                });
                return req.on("end",()=>{
                    console.log("put 에서 받은 메서드",body);
                    users[key] = JSON.parse(body);
                    console.log(key);

                    res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});
                    res.end("ok");
                })
            }


        }
        else if (req.method === "DELETE"){
            console.log("d");
            if (req.url.startsWith('/users/')){
                const key = req.url.split('/')[2];
                delete users[key];
                console.log("df");
                res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
                return res.end("ok");
            }
            console.log(req.url);
            if (req.url){

            }
        }
        res.writeHead(404);
        return res.end("Not Found");


    }
    catch (error) {
        res.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"});
        console.log(error);
        res.end("개발자에게 문의해라");
    }

})).listen(8080);

server.on("listening", () => {
    console.log("127.0.0.1:8080");
})
server.on("error", err => {
    console.log(err);
})
