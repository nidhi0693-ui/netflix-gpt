// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7mDzD2Otu03ittQc6CC2g8r2wX3f1hDg",
  authDomain: "netflixgpt-f4425.firebaseapp.com",
  projectId: "netflixgpt-f4425",
  storageBucket: "netflixgpt-f4425.appspot.com",
  messagingSenderId: "985359477779",
  appId: "1:985359477779:web:9291faeb5ebaec880323e6",
  measurementId: "G-QREL7E5GTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();