// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Import Firebase Authentication

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_API_KEY,
//     authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_SENDER_ID,
//     appId: import.meta.env.VITE_APP_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyA71J4XC_HrDax-_v_fjrd1iysPxJj76_Y",
  authDomain: "projetformation-2aaf2.firebaseapp.com",
  projectId: "projetformation-2aaf2",
  storageBucket: "projetformation-2aaf2.appspot.com",
  messagingSenderId: "23951204225",
  appId: "1:23951204225:web:ccc459c64ee5dc72149280",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore database
export const db = getFirestore(app);

// authenticate
export const auth = getAuth(app);

// Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

// storage
export const storage = getStorage(app);


