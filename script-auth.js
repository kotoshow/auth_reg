//импорт инициализированного объекта firebase
import { app } from "./firebase.js";
//импорт функций авторизации
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

//объект кнопки "Войти"
let submit_btn = document.getElementById("form-submit");
//поле ввода пароля
let password = document.getElementById("password");
//объект кнопки "Показать/скрыть пароль"
let pass_visible = document.getElementById("pass-show");
//объект сообщения
let msg = document.getElementsByClassName("msg")[0];

//функция авторизации
function signInUser(email, password) {
    signInWithEmailAndPassword(getAuth(app), email, password)
    .then((userCredential) => {
        const user = userCredential.user;

        msg.textContent = "Авторизация прошла успешно";
        msg.classList.add("msg-success");
        msg.classList.remove("hide", "msg-error");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        msg.textContent = "Неверное имя пользователя или пароль";
        msg.classList.add("msg-error");
        msg.classList.remove("hide", "msg-success");
    })
  };

  //функция отображения пароля в поле ввода
function passShow() {
    if (this.childNodes[1].classList.contains("icon-password-show")) {
        this.childNodes[1].classList.toggle("icon-password-show");
        password.setAttribute("type", "password");
    }
    else {
        this.childNodes[1].classList.toggle("icon-password-show");
        password.setAttribute("type", "text");
    }
};

//обработчик события нажатия на кнопку "Войти"
submit_btn.addEventListener("click", () => {
    let email = document.getElementById("username-input").value;
    let password = document.getElementById("password").value;
    let loading = document.getElementsByClassName("loading")[0];

    loading.classList.remove("display-hide");
    submit_btn.childNodes[1].classList.add("display-hide");

    if (email == "" || password == "") {
        msg.textContent = "Не все поля заполнены";
        msg.classList.add("msg-error");
        msg.classList.remove("hide", "msg-success");
    }
    else {
        signInUser(email, password);
    }

    loading.classList.add("display-hide");
    submit_btn.childNodes[1].classList.remove("display-hide");
});

//обработчик события нажантия на кнопку "Показать/скрыть пароль"
pass_visible.addEventListener("click", passShow);
