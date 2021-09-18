import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyApwqJ5vYwzpFi8NvrANQtU7MVWScxONoo",
    authDomain: "chat-app-redux-efaf3.firebaseapp.com",
    projectId: "chat-app-redux-efaf3",
    storageBucket: "chat-app-redux-efaf3.appspot.com",
    messagingSenderId: "652548623255",
    appId: "1:652548623255:web:070048129bdbb7504b52d2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };