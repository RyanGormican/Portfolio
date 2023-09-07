// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7fsxaEpGU9gPYSw1k4Rbj8bb8VyB65Qc",
  authDomain: "ryangormicanportfolio.firebaseapp.com",
  projectId: "ryangormicanportfolio",
  storageBucket: "ryangormicanportfolio.appspot.com",
  messagingSenderId: "573958152401",
  appId: "1:573958152401:web:56c91ec41a9b4a9cd7e5f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);