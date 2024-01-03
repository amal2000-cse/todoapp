// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzSkYbGHZwFoJY1-4aw1qkdiSW2YMAlcE",
  authDomain: "todo-app-f42e8.firebaseapp.com",
  projectId: "todo-app-f42e8",
  storageBucket: "todo-app-f42e8.appspot.com",
  messagingSenderId: "1009937704780",
  appId: "1:1009937704780:web:649098adf35605533ed1e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);