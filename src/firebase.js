// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr7fGnzfEZXdVcON_xqpsuo2z76e5GSks",
  authDomain: "todo-app-beea6.firebaseapp.com",
  projectId: "todo-app-beea6",
  storageBucket: "todo-app-beea6.appspot.com",
  messagingSenderId: "701938613522",
  appId: "1:701938613522:web:cbeb8cea4b5901e11787cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
