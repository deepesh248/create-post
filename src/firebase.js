import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMvNfmIAuClNTeGyXwiHNrCiegLH45Fak",
  authDomain: "createpost-c0586.firebaseapp.com",
  projectId: "createpost-c0586",
  storageBucket: "createpost-c0586.appspot.com",
  messagingSenderId: "327469455269",
  appId: "1:327469455269:web:a823d744a6f54f7d863a4c"
};


firebase.initializeApp(firebaseConfig);
const db = getFirestore();
const firestore = firebase.firestore();
export {db, firestore};