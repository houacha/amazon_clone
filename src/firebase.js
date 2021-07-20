import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyANGUpNOpgIb0HTnEpW4-rGvHY4YfDhsPs",
  authDomain: "clone-47aa3.firebaseapp.com",
  projectId: "clone-47aa3",
  storageBucket: "clone-47aa3.appspot.com",
  messagingSenderId: "658844532466",
  appId: "1:658844532466:web:a7cc3143858d7f5f6a5a6b",
  measurementId: "G-9RM857P2G8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
