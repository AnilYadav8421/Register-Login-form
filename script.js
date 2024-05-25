let x = document.getElementById("login");
let y = document.getElementById("register");
let btn = document.getElementById("button");

function register(){
    x.style.left = "-450px";
    y.style.left = "0";
    btn.style.left = "110px ";
}
function login(){
    x.style.left = "0";
    y.style.left = "450px";
    btn.style.left = "0 ";
}