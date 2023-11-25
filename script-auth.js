let submitBtn = document.getElementById("form-submit");
let passVisible = document.getElementById("pass-show");

function passShow() {
    let passVisibleIcon = document.getElementsByClassName("icon-password-visible")[0];
    if (passVisibleIcon.classList.contains("icon-password-show")) {
        passVisibleIcon.classList.remove("icon-password-show");
        document.getElementById("password-input").setAttribute("type", "password");
    }
    else {
        passVisibleIcon.classList.add("icon-password-show");
        document.getElementById("password-input").setAttribute("type", "text");
    }
};

function test() {
    alert(document.getElementById("username-input").value);
}

submitBtn.addEventListener("click", test);
passVisible.addEventListener("click", passShow);
