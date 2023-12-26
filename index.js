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

const LSBContentTitle = document.getElementById("LSBContentTitle");

var OTHERNAME = "";

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
    
    OTHERNAME = thisdiv.textContent;
}

// LSB CONTENT SHIFTER \\

msgBtn.onclick = () =>{
    addCol.style.display = "none";
    friendCol.style.display = "none";
    msgCol.style.display = "block";
    LSBContentTitle.innerHTML = "Global List";
}

addBtn.onclick = () =>{
    friendCol.style.display = "none";
    msgCol.style.display = "none";
    addCol.style.display = "block";
    LSBContentTitle.innerHTML = "Add";
}

friendBtn.onclick = () =>{
    addCol.style.display = "none";
    msgCol.style.display = "none";
    friendCol.style.display = "block";
    LSBContentTitle.innerHTML = "Friends";
}


// ALL USER LOADER \\

setInterval(()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST","backend/userList.php",true);
    xhr.onload = () =>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                msgCol.innerHTML = data;
                }
            }
        }
    var data = JSON.stringify({username: MainTitle.textContent});
    xhr.send(data);
},2000)

setInterval(()=>{
    if(OTHERNAME != ""){
    let xhr = new XMLHttpRequest();
        xhr.open("POST","backend/msg.php",true);
        xhr.onload = () =>{
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status === 200){
                    let data = xhr.response;
                    if(data != "Error" && data != ""){
                        data = data.split(',');
                            for(let i = MsgContainer.children.length ; i<data.length ; i++){
                            let tmp = data[i].split('@$:$@');
                            const newDiv = document.createElement("div");
                            newDiv.textContent = tmp[1];
                            if (tmp[0] == MainTitle.textContent) {
                                newDiv.classList.add("MyMsg");
                            } else {
                                newDiv.classList.add("OtherMsg");
                            }
                            document.getElementById("MsgContainer").appendChild(newDiv);
                        }
                            
                    }
                }
            }
        }
        var data = JSON.stringify({othername: OTHERNAME , username: MainTitle.textContent});
        xhr.send(data);
    }
},500)

// MESSAGE SEND LOGIC \\
function SendMsg() {
    let msgText = MsgInputBox.value
    if(msgText == "")
        return

    let xhr = new XMLHttpRequest();
    xhr.open("POST","backend/send.php",true);
    xhr.onload = () =>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                    console.log(data);
                }
            }
        }
    var data = JSON.stringify({othername: OTHERNAME , username: MainTitle.textContent, text: MsgInputBox.value});
    xhr.send(data);

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