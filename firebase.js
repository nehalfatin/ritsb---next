// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk86F24UPCi-uMt2E5qnh_iig3XWs8NR4",
  authDomain: "rits-browser-26f01.firebaseapp.com",
  projectId: "rits-browser-26f01",
  storageBucket: "rits-browser-26f01.appspot.com",
  messagingSenderId: "8025615781",
  appId: "1:8025615781:web:2e3d6238d2032c5a89cc4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export {db}