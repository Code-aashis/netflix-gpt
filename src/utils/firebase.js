// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6dP0QHYZZ2YN5R-6CNMuWykBUWBBvUV8",
  authDomain: "netflixgpt-583fe.firebaseapp.com",
  projectId: "netflixgpt-583fe",
  storageBucket: "netflixgpt-583fe.firebasestorage.app",
  messagingSenderId: "373312329113",
  appId: "1:373312329113:web:c37a3cb8c6377063ba6f08",
  measurementId: "G-0XBTH3SYSK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
