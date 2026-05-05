import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjnuPyhDLZnimKIMaVcp7kGTgq269Gvg4",
  authDomain: "atividade-somativa2.firebaseapp.com",
  projectId: "atividade-somativa2",
  storageBucket: "atividade-somativa2.firebasestorage.app",
  messagingSenderId: "823574980154",
  appId: "1:823574980154:web:9389316baf7967f74f7703",
  measurementId: "G-C853FSKFH5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);