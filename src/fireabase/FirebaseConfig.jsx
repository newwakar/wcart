// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbXl24Y46nqjcXGLfeTH43mU_0VHe-HnA",
  authDomain: "wakar-cart.firebaseapp.com",
  projectId: "wakar-cart",
  storageBucket: "wakar-cart.appspot.com",
  messagingSenderId: "773547913009",
  appId: "1:773547913009:web:8ec70ce8dd08ff2d180a10",
  measurementId: "G-8JFYLZQY2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}
