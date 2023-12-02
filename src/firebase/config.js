import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2x-GB7OTV_BV8XgT_1LEMUL0t_7SwzkA",
  authDomain: "book-list-with-firebase-1b6ad.firebaseapp.com",
  projectId: "book-list-with-firebase-1b6ad",
  storageBucket: "book-list-with-firebase-1b6ad.appspot.com",
  messagingSenderId: "268924107749",
  appId: "1:268924107749:web:67adf9f2434d24ea680d0c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
