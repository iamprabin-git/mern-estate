// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-63b7c.firebaseapp.com",
  projectId: "mern-estate-63b7c",
  storageBucket: "mern-estate-63b7c.firebasestorage.app",
  messagingSenderId: "700023684524",
  appId: "1:700023684524:web:e8145fe50cca9cb7958e09",
  measurementId: "G-WLSDLB28Z2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);