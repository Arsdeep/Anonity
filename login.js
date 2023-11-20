const loginfrm = document.getElementById("login-form");
const signupfrm = document.getElementById("signup-form");

const loginSwitchBtn = document.getElementById("loginSwitchBtn");
const signupSwitchBtn = document.getElementById("signupSwitchBtn");

const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

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