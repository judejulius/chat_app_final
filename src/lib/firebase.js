import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPbq2tcXAUQTeJtNbvpz6EAkyvwOExQ7k",
  authDomain: "pikiegram.firebaseapp.com",
  databaseURL: "https://pikiegram-default-rtdb.firebaseio.com",
  projectId: "pikiegram",
  storageBucket: "pikiegram.appspot.com",
  messagingSenderId: "22835758892",
  appId: "1:22835758892:web:223dc212ae4fedc84bce89"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()