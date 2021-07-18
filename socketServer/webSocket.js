const WebSocket = require("ws");
const User = require("./models").User
const {Chat} = require("./models");
const axios = require("axios");

module.exports = (server) => {
    const wss = new WebSocket.Server({server});
    wss.on("connection", async (ws, req) => {
        try {
            const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            console.log(`접속 ip : ${ip}`);
            ws.on("message", (message) => {
                console.log(`${ip} 에서 보냄${message}`);
                ws.send(message);
            });
            ws.on("error", () => {
                console.log("error!!!!!");
            })
            ws.on("close", () => {
                console.log(`${ip} 에서 연결이 끊김`);
            });
        } catch (e) {
            console.log(e);
        }
    });
}
