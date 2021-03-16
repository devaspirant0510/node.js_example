async function getUser() {
    try {
        const res = await axios.get("/users");
        const userInfo = res.data;
        const list = document.querySelector("#list");
        list.innerHTML = "";
        Object.keys(userInfo).map(function (key) {
            console.log(key);
            const div_tag = document.createElement("div");
            const span_tag = document.createElement("span");
            span_tag.textContent = userInfo[key].userName;
            const updateBtn = document.createElement("button");
            updateBtn.textContent = "update";
            updateBtn.addEventListener("click",async (e)=>{
                const userName = prompt("입력하세요");
                if (userName.length === 0){
                    return alert("입력하라고");
                }

                try {
                    await axios.put(`/users/${key}`,{userName});
                    getUser();

                }catch (e){
                    console.log(e);
                }
            })
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "delete";
            deleteBtn.addEventListener("click",async (e)=>{
                try {
                    await axios.delete(`/users/${key}`);
                    await getUser();
                }catch (e){
                    console.log(e);
                }
            })

            div_tag.append(span_tag);
            div_tag.append(updateBtn);
            div_tag.append(deleteBtn);
            list.append(div_tag);

        });


    } catch (e) {

    }

}
window.onload = getUser;

const form = document.getElementById("form");
const name = document.querySelector("#name");

document.getElementById('form').addEventListener("submit", async (e) => {
    e.preventDefault();
    let userName = name.value;
    console.log(userName);
    if (userName.length === 0) {
        alert("입력하");
    }
    try {
        await axios.post("/user", {userName});
        getUser();

    } catch (e) {

    }
    name.value="";
});
