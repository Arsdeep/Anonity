// CONSTANTS \\
const ME = "Adam";
const linkPattern = /http[s]?:\/\/(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+/;
const emoji_list = ["😄","😃","😀","😁","😆","😅","😂","🤣","🥲","🥹","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🥸","🤩","🥳","😏","😒","😞","😔","😟","😕","🙁","☹️","😣","😖","😫","😩","🥺","😢","😭","😮‍💨","😤","😠","😡","🤬","🤯","😳","🥵","🥶","😱","😨","😰","😥","😓","🫣","🤗","🫡","🤔","🫢","🤭","🤫","🤥","😶","😶‍🌫️","😐","😑","😬","🫠","🙄","😯","😦","😧","😮","😲","🥱","😴","🤤","😪","😵","😵‍💫","🫥","🤐","🥴","🤢","🤮","🤧","😷","🤒","🤕","🤑","🤠","😈","👿","👹","👺","🤡","💩","👻","💀","☠️","👽","👾","🤖","🎃","😺","😸","😹","😻","😼","😽","🙀","😿","😾"];
const MsgContainer = document.getElementById("MsgContainer");
const MsgInputBox = document.getElementById("MsgInputBox");
const TBHName = document.getElementById("TBHName");
const EmojiBox = document.getElementById("EmojiBox");


// EMOJIS \\
for (let i = 0; i < emoji_list.length; i++) { // Add Emoji from list above
    EmojiBox.innerHTML += `<div class="Emoji"><h1 id="EmojiH1" onclick="AddEmoji(this.innerHTML)">${emoji_list[i]}</h1></div>`;
}

function AddEmoji(emoj){
    MsgInputBox.value += emoj
}

function EmojiDivDisplay() {
    if (EmojiBox.style.display == "none") {
        EmojiBox.style.display = "flex";
    } else {
        EmojiBox.style.display = "none";
    }
}

// CHAT LOADER \\
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


// MESSAGE SEND LOGIC \\
function SendMsg() {
    let msgText = MsgInputBox.value
    if(msgText == "")
        return
    if(lnkcheck(msgText)){
        const link = document.createElement("a")
        link.textContent = msgText
        link.href = msgText
        link.classList.add("MyMsg")
        document.getElementById("MsgContainer").appendChild(link);
        MsgContainer.scrollTop = MsgContainer.scrollHeight;
    }
    else{
        const newDiv = document.createElement("div");
        let tmpTxt = ""
        msgText = msgText.trim();
        for (let i = 0; i < msgText.length; i++) {
            if(msgText[i] == " ")
                tmpTxt += "&nbsp;"
            else            
                tmpTxt += msgText[i]
        }
        newDiv.innerHTML = tmpTxt;
        newDiv.classList.add("MyMsg");
        document.getElementById("MsgContainer").appendChild(newDiv);
        MsgContainer.scrollTop = MsgContainer.scrollHeight;
    }
    MsgInputBox.value = "";
}

MsgInputBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        SendMsg();
    }
});

function lnkcheck(text){
    if (linkPattern.test(text))
        return true
    return false
}

MsgContainer.onclick = () => (EmojiBox.style.display = "none")