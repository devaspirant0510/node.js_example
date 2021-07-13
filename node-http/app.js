const http = require("http")
const path = require("path");
const fs = require("fs").promises;

const session = {};

function parseCookie(ck) {
    const box = {};
    if (ck) {
        ck.split(";").map(v => {
            box[v.split("=")[0].trim()] = decodeURIComponent(v.split("=")[1]);
        });
        return box;
    }
    return {};
}

const port = 8888;
const postRequest = function (req, res) {
    if (req.url === "/") {
        let body = "";
        // form tag body 가져옴
        req.on("data", data => {
            body += data;
        });
        // 전부 가져왔을때 콜백
        req.on("end", () => {
            // json 형태로 변환함
            body = JSON.parse(body);
            //쿠키에 넣을 데이터
            const date = new Date().getTime();
            session[date] = body.userid;
            res.writeHead(200,{"Set-Cookie":`userid=${date};Max-age=10`})
            console.log(session)
            res.end(body.userid);
        });
    }
}
let cookie = "";
const getRequest = async function (req, res) {
    try {
        cookie = parseCookie(req.headers.cookie);

        console.log(cookie)
        if (req.url === "/") {

            if(session[cookie.userid]){
                console.log("get")
                console.log(session[cookie.userid],"님 안녕")
                res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
                res.end(session[cookie.userid]+"님 안녕")
            }else{
                console.log("get")
                const data = await fs.readFile(path.join(__dirname, "index.html"));
                cookie = parseCookie(req.headers.cookie);
                console.log(cookie)
                res.end(data);


            }
        }
    } catch (e) {
        res.end(e.message)

    }
}
const server = http.createServer(async (req, res) => {
    try {
        if (req.method === "POST") {
            postRequest(req, res);
        } else if (req.method === "GET") {
            await getRequest(req, res);
        }
    } catch (err) {
        console.log(err);
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(err.message);
    }


}).listen(port)

server.on("listening", () => {
    console.log("open server !!");
    console.log("127.0.0.1:" + port);
})
server.on("error", (err) => {
    console.log(err);
});