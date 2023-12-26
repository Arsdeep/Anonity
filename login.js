const loginfrm = document.getElementById("login-form");
const signupfrm = document.getElementById("signup-form");

const loginSwitchBtn = document.getElementById("loginSwitchBtn");
const signupSwitchBtn = document.getElementById("signupSwitchBtn");

const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");

loginfrm.onsubmit = (e) =>{
    e.preventDefault();
}

signupfrm.onsubmit = (e) =>{
    e.preventDefault();
}

loginBtn.onclick = () =>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST","loginPHP/login.php",true);
    xhr.onload = () =>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                console.log(data);
                if(data == "Successful Login"){
                    location.href = "index.php";
                }else if(data == "admin login"){
                    location.href = "admin.php";
                }
            }
        }   
    }
    let formData = new FormData(loginfrm);
    xhr.send(formData);
}

signupBtn.onclick = () =>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST","loginPHP/signup.php",true);
    xhr.onload = () =>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                if(data != "Created"){
                    popup2.style.display = 'flex';
                    popup2.innerHTML = data;
                }
                else{
                    popup2.style.display = 'flex';
                    popup2.innerHTML = "User " + data;
                    popup2.style.background = "#08ff00e3";
                }
                console.log(data);
            }
        }
    }
    let formData = new FormData(signupfrm);
    xhr.send(formData);
}


loginSwitchBtn.onclick = () =>{
    signupfrm.style.display = "none";
    loginfrm.style.display = "flex";
    loginSwitchBtn.style.color = "Lime";
    signupSwitchBtn.style.color = "White";
}

signupSwitchBtn.onclick = () =>{
    signupfrm.style.display = "flex";
    loginfrm.style.display = "none";
    loginSwitchBtn.style.color = "White";
    signupSwitchBtn.style.color = "Lime";
}

function hidePopup(){
    document.getElementById('popupOverlay').style.display = 'none';
}