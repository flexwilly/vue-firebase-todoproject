// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
//import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBADdBFkp5HwbBvq_70Bq4IsuNNMT9CnfU",
  authDomain: "todo-ninja-6cf8f.firebaseapp.com",
  projectId: "todo-ninja-6cf8f",
  storageBucket: "todo-ninja-6cf8f.appspot.com",
  messagingSenderId: "69660069351",
  appId: "1:69660069351:web:b2a7dc347bb2adc6314142",
  measurementId: "G-GK2RFFXMJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//init firestore
const db = getFirestore();
export default db;