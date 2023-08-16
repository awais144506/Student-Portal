// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS2KIDzYN6uKYKekPnQ5P528s8vRp0eOo",
  authDomain: "student-portal-50f4b.firebaseapp.com",
  projectId: "student-portal-50f4b",
  storageBucket: "student-portal-50f4b.appspot.com",
  messagingSenderId: "928336995505",
  appId: "1:928336995505:web:ed8ba16308ac0bf03f6e90"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export const firestore = getFirestore(app);
