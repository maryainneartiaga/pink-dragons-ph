import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjGxufNylffGf0TOiR2cdPTd5wSXFka84",
  authDomain: "pinkdragonsph.firebaseapp.com",
  projectId: "pinkdragonsph",
  storageBucket: "pinkdragonsph.firebasestorage.app",
  messagingSenderId: "1070255294265",
  appId: "1:1070255294265:web:f1cdb094ad4c1d751f8ae8",
  measurementId: "G-REQ1LJ42GF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
