import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
  } from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBY_ru65wHQW4xFiB_6ClmbbJ-NPS-uy5w",
  authDomain: "react-gb-b277c.firebaseapp.com",
  databaseURL:
    'https://react-gb-b277c-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: "react-gb-b277c",
  storageBucket: "react-gb-b277c.appspot.com",
  messagingSenderId: "183174673385",
  appId: "1:183174673385:web:929585693c7e9f26645178"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(firebaseAuth, email, password);

export const logIn = async (email: string, password: string) =>
  await signInWithEmailAndPassword(firebaseAuth, email, password);

export const logOut = async () => await signOut(firebaseAuth);

export const db = getDatabase(app);

export const getChats = () => ref(db, 'chats');