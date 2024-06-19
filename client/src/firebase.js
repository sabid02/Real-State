// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-b9ecb.firebaseapp.com",
  projectId: "realestate-b9ecb",
  storageBucket: "realestate-b9ecb.appspot.com",
  messagingSenderId: "145439353087",
  appId: "1:145439353087:web:3b9ef5bcb67d7f2084c4ca",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
