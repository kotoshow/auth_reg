//импорт инициализированного объекта firebase
import { app } from "./firebase.js";
//импорт функций авторизации
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

//объект кнопки "Зарегистрироваться"
let submit_btn = document.getElementById("form-submit");
//объект кнопки "Показать/скрыть пароль"
let pass_visible = document.getElementsByClassName("password-visible")[0];
//поле ввода пароля
let password = document.getElementById("password");
//поле повторного ввода пароля
let password_repeat = document.getElementById("password-repeat");
//объект сообщения
let msg = document.getElementsByClassName("msg")[0];

//функция регистрации нового пользователя
function regUser(email, password) {
    createUserWithEmailAndPassword(getAuth(app), email, password)
    .then((userCredential) => {
        const user = userCredential.user;

        msg.textContent = "Регистрация прошла успешно";
        msg.classList.add("msg-success");
        msg.classList.remove("hide", "msg-error");

        setTimeout(() => {
            window.location.replace("login.html");
        }, 2000);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        msg.textContent = "Ошибка: " + errorCode;
        msg.classList.add("msg-error");
        msg.classList.remove("hide", "msg-success");
    })
};

//функция отображения пароля в поле ввода
function passShow() {
    if (this.childNodes[1].classList.contains("icon-password-show")) {
        this.childNodes[1].classList.toggle("icon-password-show");
        password.setAttribute("type", "password");
        password_repeat.setAttribute("type", "password");
    }
    else {
        this.childNodes[1].classList.toggle("icon-password-show");
        password.setAttribute("type", "text");
        password_repeat.setAttribute("type", "text");
    }
};

//обработчик события нажатия на кнопку "Зарегистрироваться"
submit_btn.addEventListener("click", () => {
    let email = document.getElementById("username-input").value;
    let pass = password.value;
    let pass_repeat = document.getElementById("password-repeat").value;
    let loading = document.getElementsByClassName("loading")[0];

    loading.classList.remove("display-hide");
    submit_btn.childNodes[1].classList.add("display-hide");

    if (email == "" || pass == "" || pass_repeat == "") {
        msg.textContent = "Не все поля заполнены";
        msg.classList.add("msg-error");
        msg.classList.remove("hide", "msg-success");
    }
    else if (pass != pass_repeat) {
        msg.textContent = "Пароли не совпадают";
        msg.classList.add("msg-error");
        msg.classList.remove("hide", "msg-success");
    }
    else {
        regUser(email, pass);
    }

    loading.classList.add("display-hide");
    submit_btn.childNodes[1].classList.remove("display-hide");
});

//обработчик события нажатия на кнопку "Показать/скрыть пароль"
pass_visible.addEventListener("click", passShow);