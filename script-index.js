let frame = document.getElementById("main-frame");
let loginBtn = document.getElementById("login_btn");
let regBtn = document.getElementById("reg_btn");
let menu = document.getElementById("menu");

loginBtn.addEventListener("click", () => {
    frame.setAttribute("src", "login.html");
    frame.style.zIndex = 0;
    menu.style.display = "none";
})

regBtn.addEventListener("click", () => {
    frame.setAttribute("src", "registration.html");
    frame.style.zIndex = 0;
    menu.style.display = "none";
})