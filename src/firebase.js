import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8NADLvel5GF3A7QwdBiWInn1xhyr1TJc",
  authDomain: "chatapp-5254b.firebaseapp.com",
  projectId: "chatapp-5254b",
  storageBucket: "chatapp-5254b.appspot.com",
  messagingSenderId: "130426934947",
  appId: "1:130426934947:web:c643e423f5dc913d5d1116"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();