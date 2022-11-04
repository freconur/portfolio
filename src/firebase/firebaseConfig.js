// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC_i-fPkGz_P7GC7UYd9yq4_DsOKbNyR1Q",
  authDomain: "devprojects-591c8.firebaseapp.com",
  projectId: "devprojects-591c8",
  storageBucket: "devprojects-591c8.appspot.com",
  messagingSenderId: "994786034226",
  appId: "1:994786034226:web:d73efc9e78ced019baf22b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db

