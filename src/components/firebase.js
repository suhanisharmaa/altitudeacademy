// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDLm79hxCtK_1roaxaouBo9B6vh-aevEGY",
    authDomain: "altitude-academy-70a9b.firebaseapp.com",
    projectId: "altitude-academy-70a9b",
    storageBucket: "altitude-academy-70a9b.appspot.com",
    messagingSenderId: "506136119931",
    appId: "1:506136119931:web:e359f42a5f31c08b2570de",
    measurementId: "G-87G2RF8NBK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };