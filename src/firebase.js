
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBcHs_-MZhYmMK9NZCYbuyurBdSaP0b9bs",
  authDomain: "dark-patterns-learning-tool.firebaseapp.com",
  projectId: "dark-patterns-learning-tool",
  storageBucket: "dark-patterns-learning-tool.appspot.com",
  messagingSenderId: "946237301800",
  appId: "1:946237301800:web:dbde13c612f4d45d15011d",
  measurementId: "G-7GDEF64GMJ"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };