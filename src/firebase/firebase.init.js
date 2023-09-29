/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMX4zBmYhz30rOECnezkSbNR7zYqYAEqE",
  authDomain: "simple-firebase-8b7fb.firebaseapp.com",
  projectId: "simple-firebase-8b7fb",
  storageBucket: "simple-firebase-8b7fb.appspot.com",
  messagingSenderId: "254177112587",
  appId: "1:254177112587:web:6cd9d4d5824caa7d2c0d0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;