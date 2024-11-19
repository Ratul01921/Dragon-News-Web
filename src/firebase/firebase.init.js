// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwfmhp9QAtHzdtMfe2aiDn42ZtuixWyAI",
  authDomain: "dragon-news-7cae0.firebaseapp.com",
  projectId: "dragon-news-7cae0",
  storageBucket: "dragon-news-7cae0.firebasestorage.app",
  messagingSenderId: "815375725970",
  appId: "1:815375725970:web:e6b6eafba14bf371ed3d4b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
