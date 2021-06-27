const submit_user = document.querySelector("#user-create");
const submit_comment = document.querySelector("#creat-comment");
const table_row = document.querySelectorAll("#user-list tr")
table_row.forEach(async (el) => {
    try {
        el.addEventListener("click", () => {
            const thisId = el.querySelector("td").textContent;
            getComment(thisId);
        });
    } catch (e) {

    }
});

async function getComment(id) {
    try {
        console.log(id);
        const comment = await axios.get(`/comment/${id}`);
        const getDatas = comment.data;
        console.log(getDatas);
        const tbody = document.querySelector("#comment-list tbody");
        tbody.innerHTML = "";
        getDatas.map((data) => {
            console.log(data);
            const tr = document.createElement("tr");
            const tdId = document.createElement("td");
            tdId.textContent = data.id;

            const tdComment = document.createElement("td");
            tdComment.textContent = data.comment;

            const tdCommenter = document.createElement("td");
            tdCommenter.textContent = data.commenterId;

            const tdDel = document.createElement("td");
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "삭제";
            tdDel.appendChild(deleteBtn);

            const tdUpdate= document.createElement("td");
            const updateBtn = document.createElement("button");
            updateBtn.textContent = "수정";
            tdUpdate.appendChild(updateBtn);

            deleteBtn.addEventListener("click", async () => {
                console.log("afsd",data.id);
                const delData = await axios.delete(`/comment/${data.id}`,
                    {
                        id1: data.id
                    });
                console.log(delData);
                console.log(data.commenterid);
                await getComment(data.commenterId);
            });
            updateBtn.addEventListener("click", async () => {
                const updateData = await axios.put(`comment/${data.id}`,
                    {
                        id: data.id,
                    });

            });
            tr.append(tdId, tdComment, tdCommenter, tdUpdate, tdDel);
            tbody.appendChild(tr);


        })


    } catch (e) {
        console.log(e)
    }

}

async function getUser() {
    try {
        let res = await axios.get('/user');
        const getData = res.data;
        console.log(getData);
        const dom = document.querySelector("#user-list tbody");
        dom.innerHTML = ""
        getData.map((data) => {
            const tr = document.createElement("tr");
            const tdId = document.createElement("td");
            tdId.addEventListener("click", async () => {
                await getComment(tdId.textContent);
            })
            tdId.textContent = data.id;
            const tdName = document.createElement("td");
            tdName.textContent = data.name;
            const tdUserId = document.createElement("td");
            tdUserId.textContent = data.userId;
            console.log(data.userId);
            const tdUserAge = document.createElement("td");
            tdUserAge.textContent = data.age;
            tr.append(tdId, tdName, tdUserId, tdUserAge);
            dom.append(tr);
        });
        //console.log(userList);
    } catch (e) {
        console.log(e)
    }
}

submit_user.addEventListener("submit", async (evt) => {
    try {
        evt.preventDefault();
        const userName = evt.target.username.value;
        const userId = evt.target.userid.value;
        const userAge = evt.target.userage.value
        await axios.post('/user',
            {
                userName: userName,
                userId: userId,
                userAge: userAge
            });
        evt.target.username.value = "";
        evt.target.userid.value = "";
        evt.target.userage.value = "";
        await getUser();
    } catch (e) {
        console.log(e.message);

    }
});

submit_comment.addEventListener("submit", async (evt) => {
    evt.preventDefault();
    const data = await axios.post("/comment", {
        commenterid: evt.target.commentid.value,
        comment: evt.target.commentcontent.value
    });
    console.log(evt.target.commentid.value);
    await getComment(evt.target.commentid.value);
    evt.target.commentid.value = "";
    evt.target.commentcontent.value = "";



})
