import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyDVbGdh8A_N-jVwAJHjIHhAKQ2oPlTm6bk",
  authDomain: "ans-modul9.firebaseapp.com",
  databaseURL: "https://ans-modul9-default-rtdb.firebaseio.com",
  projectId: "ans-modul9",
  storageBucket: "ans-modul9.appspot.com",
  messagingSenderId: "1766852191",
  appId: "1:1766852191:web:e9b1183416c167bd5ffdea"
});

const FIREBASE = firebase;

export default FIREBASE;
