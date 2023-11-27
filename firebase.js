import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";

//конфиг firebase
const firebaseConfig = {
  apiKey: "AIzaSyBhVhqzorEG78iWJDa9AIT0ur9DF4ui95o",
  authDomain: "tsu-dk.firebaseapp.com",
  projectId: "tsu-dk",
  storageBucket: "tsu-dk.appspot.com",
  messagingSenderId: "454163346474",
  appId: "1:454163346474:web:f2827ba89617da0cdfbf53",
  measurementId: "G-6E7VJKZEJ0"
};

//инициализация firebase
const app = initializeApp(firebaseConfig);

export { app };