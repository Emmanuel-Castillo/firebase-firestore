// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeeIluBkzuHG3wq6G_gjupTkrVDJsmsvc",
  authDomain: "fir-practice-84ca2.firebaseapp.com",
  projectId: "fir-practice-84ca2",
  storageBucket: "fir-practice-84ca2.appspot.com",
  messagingSenderId: "298965364155",
  appId: "1:298965364155:web:89693c417e5b5da47ae89e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()