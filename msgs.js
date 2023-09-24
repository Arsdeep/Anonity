const ME = "Adam";

const MsgContainer = document.getElementById("MsgContainer");
const MsgInputBox = document.getElementById("MsgInputBox");
const TBHName = document.getElementById("TBHName");

function LoadChats(thisdiv) {
    const jsonFilePath = "data/" + thisdiv.textContent + ".json";
    MsgContainer.innerHTML = "";
    TBHName.textContent = thisdiv.textContent;
    fetch(jsonFilePath)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((Msgs) => {
            Msgs.forEach((Msg) => {
                const newDiv = document.createElement("div");
                newDiv.textContent = Msg.content;
                if (Msg.author == ME) {
                    newDiv.classList.add("MyMsg");
                } else {
                    newDiv.classList.add("OtherMsg");
                }
                document.getElementById("MsgContainer").appendChild(newDiv);
            });
        })
        .catch((error) => {
            console.error(
                "There was a problem fetching or parsing the JSON file:",
                error
            );
        });
}

function SendMsg() {
    const newDiv = document.createElement("div");
    newDiv.textContent = MsgInputBox.value;
    newDiv.classList.add("MyMsg");
    document.getElementById("MsgContainer").appendChild(newDiv);
    MsgContainer.scrollTop = MsgContainer.scrollHeight;
    // MsgInputBox.value = "";
}

MsgInputBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        SendMsg();
    }
});
