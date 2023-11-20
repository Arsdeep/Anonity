// CONSTANTS \\
const linkPattern = /http[s]?:\/\/(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+/;
const emoji_list = ["😄","😃","😀","😁","😆","😅","😂","🤣","🥲","🥹","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🥸","🤩","🥳","😏","😒","😞","😔","😟","😕","🙁","☹️","😣","😖","😫","😩","🥺","😢","😭","😮‍💨","😤","😠","😡","🤬","🤯","😳","🥵","🥶","😱","😨","😰","😥","😓","🫣","🤗","🫡","🤔","🫢","🤭","🤫","🤥","😶","😶‍🌫️","😐","😑","😬","🫠","🙄","😯","😦","😧","😮","😲","🥱","😴","🤤","😪","😵","😵‍💫","🫥","🤐","🥴","🤢","🤮","🤧","😷","🤒","🤕","🤑","🤠","😈","👿","👹","👺","🤡","💩","👻","💀","☠️","👽","👾","🤖","🎃","😺","😸","😹","😻","😼","😽","🙀","😿","😾"];
const MsgContainer = document.getElementById("MsgContainer");
const MsgInputBox = document.getElementById("MsgInputBox");
const TBHName = document.getElementById("TBHName");
const ProfileImg = document.getElementById("ProfileImg");
const EmojiBox = document.getElementById("EmojiBox");

const MainTitle = document.getElementById("MainTitle");

const addBtn = document.getElementById("addBtn");
const friendBtn = document.getElementById("friendsBtn");
const msgBtn = document.getElementById("msgBtn");

const addCol = document.getElementById("add");
const friendCol = document.getElementById("friends");
const msgCol = document.getElementById("msg");


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
    MsgContainer.innerHTML = "";
    TBHName.textContent = thisdiv.textContent;
    ProfileImg.style.display = "block";                 // Implement PFP here
    
    let xhr = new XMLHttpRequest();
    xhr.open("POST","backend/msg.php",true);
    xhr.onload = () =>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                
                if(data != "Error"){
                    data = data.split(',');
                        data.forEach(element => {
                            let tmp = element.split(':');
                            const newDiv = document.createElement("div");
                            newDiv.textContent = tmp[1];
                            if (tmp[0] == MainTitle.textContent) {
                                newDiv.classList.add("MyMsg");
                            } else {
                                newDiv.classList.add("OtherMsg");
                            }
                            document.getElementById("MsgContainer").appendChild(newDiv);
                        });
                }
            }
        }
    }
    var data = JSON.stringify({othername: thisdiv.textContent , username: MainTitle.textContent});
    xhr.send(data);
}

msgBtn.onclick = () =>{
    addCol.style.display = "none";
    friendCol.style.display = "none";
    msgCol.style.display = "block";

}

addBtn.onclick = () =>{
    addCol.style.display = "block";
    friendCol.style.display = "none";
    addCol.style.display = "none";

}

friendBtn.onclick = () =>{
    addCol.style.display = "none";
    friendCol.style.display = "block";
    msgCol.style.display = "none";

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