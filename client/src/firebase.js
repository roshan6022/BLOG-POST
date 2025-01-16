// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-50a1f.firebaseapp.com",
  projectId: "mern-blog-50a1f",
  storageBucket: "mern-blog-50a1f.firebasestorage.app",
  messagingSenderId: "494649158053",
  appId: "1:494649158053:web:edcf8466310945ae8f604c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
