// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRp9nI_aEa4E03Q8UHg-fiIQtJd7EaXVc",
  authDomain: "netflixgpt-444eb.firebaseapp.com",
  projectId: "netflixgpt-444eb",
  storageBucket: "netflixgpt-444eb.appspot.com",
  messagingSenderId: "88531453437",
  appId: "1:88531453437:web:951b7cbc8bcd0e52224594",
  measurementId: "G-0RY7461FL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();