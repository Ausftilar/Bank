import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDQhrzUXu8mqex6e0NZcem_i3_nDgG2Gm8",
  authDomain: "tinkoffcopyapp.firebaseapp.com",
  projectId: "tinkoffcopyapp",
  storageBucket: "tinkoffcopyapp.appspot.com",
  messagingSenderId: "306427379700",
  appId: "1:306427379700:web:81f43c6e330d620ce9c3a1"
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();