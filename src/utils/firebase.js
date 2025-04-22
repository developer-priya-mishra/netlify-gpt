// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRFiKdNA2YnlgR1bB_1Bs2tD25H46YcrY",
  authDomain: "netlify-gpt-f20c3.firebaseapp.com",
  projectId: "netlify-gpt-f20c3",
  storageBucket: "netlify-gpt-f20c3.firebasestorage.app",
  messagingSenderId: "998075629777",
  appId: "1:998075629777:web:13ce8bbb8dfab5d8c045f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
