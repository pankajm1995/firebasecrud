// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWxnvVBSWlPRV38TTPjzOVEbchJuHR6gM",
  authDomain: "gitfire-65789.firebaseapp.com",
  projectId: "gitfire-65789",
  storageBucket: "gitfire-65789.appspot.com",
  messagingSenderId: "489088067604",
  appId: "1:489088067604:web:150334832c51ceb8d31f01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database= new getFirestore(app)