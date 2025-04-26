// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.API_KEY_FIREBASE,
  authDomain: "test-793cf.firebaseapp.com",
  projectId: "test-793cf",
  storageBucket: "test-793cf.firebasestorage.app",
  messagingSenderId: "496107245638",
  appId: "1:496107245638:web:2d3807fcc8db4af1a7fa47",
  measurementId: "G-RGXRZTTCB9",
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
