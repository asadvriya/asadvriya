// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8YvlZCnF1qxrF8PiOZlH8YAeWGlymVsI",
  authDomain: "asadnriya.firebaseapp.com",
  databaseURL: "https://asadnriya-default-rtdb.firebaseio.com",
  projectId: "asadnriya",
  storageBucket: "asadnriya.appspot.com",
  messagingSenderId: "1040636972476",
  appId: "1:1040636972476:web:b050184a192ea2722e6fb9",
  measurementId: "G-CJ9XY7E1EV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);