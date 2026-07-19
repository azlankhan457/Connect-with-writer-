// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0P5kPN100-7pkWu9zprgjvDw59-h5Ohk",
  authDomain: "connectwithwriter-cww.firebaseapp.com",
  projectId: "connectwithwriter-cww",
  storageBucket: "connectwithwriter-cww.firebasestorage.app",
  messagingSenderId: "373551487388",
  appId: "1:373551487388:web:a40206807bcade0b0e9059",
  measurementId: "G-NVCRL62S08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);