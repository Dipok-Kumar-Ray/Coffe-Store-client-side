// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVAPUUlJGlzS8dEh_WAQAH4Q8EvmoSBTI",
  authDomain: "coffee-store-auth-ee187.firebaseapp.com",
  projectId: "coffee-store-auth-ee187",
  storageBucket: "coffee-store-auth-ee187.firebasestorage.app",
  messagingSenderId: "120574388894",
  appId: "1:120574388894:web:d4c0bcd0306d3f0c25e98f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);