// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIKhosoEAfK8Vrf4rSgLqZ6lI-bsaPiOE",
  authDomain: "portofolio-34c1d.firebaseapp.com",
  projectId: "portofolio-34c1d",
  storageBucket: "portofolio-34c1d.firebasestorage.app",
  messagingSenderId: "506380845426",
  appId: "1:506380845426:web:aa9d159a67bceab21c5deb",
  measurementId: "G-WVK2HRHKCB"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
