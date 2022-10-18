// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChxJf7PuzQrrVdednx95fNhueuD581c_M",
  authDomain: "email-pasward-auth.firebaseapp.com",
  projectId: "email-pasward-auth",
  storageBucket: "email-pasward-auth.appspot.com",
  messagingSenderId: "751553504509",
  appId: "1:751553504509:web:775d8fae57acd209970a94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;