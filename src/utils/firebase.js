// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNvc1PBh45hUzNGkfxBXLyXN0tF9v9oNw",
  authDomain: "netlifygpt-663d0.firebaseapp.com",
  projectId: "netlifygpt-663d0",
  storageBucket: "netlifygpt-663d0.firebasestorage.app",
  messagingSenderId: "772568556505",
  appId: "1:772568556505:web:b500c2dd8a562dd2372fc8",
  measurementId: "G-LJ5XQBKYME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);