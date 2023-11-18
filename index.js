const frm = document.querySelector(".login-form");
const submitBtn = document.getElementById("loginBtn");

frm.onsubmit = (e) =>{
    e.preventDefault()
}

submitBtn.onclick = () =>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST","loginPHP/login.php",true);
    xhr.onload = () =>{

    }
}