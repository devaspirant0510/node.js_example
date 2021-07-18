const sendButton = document.querySelector("#chat-submit");
const sendForm = document.querySelector("#chat-form");
const messageInput = document.querySelector("#chat-message");
const chatBody = document.querySelector("#chat-body");

const webSocket = new WebSocket("ws://localhost:8005")

webSocket.onopen = function (){
    console.log("웹소켓 연결 성공");
}

sendForm.addEventListener("submit",async (evt)=>{
    evt.preventDefault();
    if (messageInput.value!==""){
        webSocket.send(messageInput.value);
        messageInput.value = "";
    }else{
        alert("텍스트를 입력해주세요");
    }
});

webSocket.onmessage = async function (evt){
    console.log(`받은 메시지 : ${evt.data}`);
    const div = document.createElement("div");
    div.classList.add("chat-item-other");
    div.textContent = evt.data;
    chatBody.append(div)

}
webSocket.onclose = function (){
    console.log("웹소켓 닫음");

}
