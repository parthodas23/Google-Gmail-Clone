import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH2eF-K5KwaNkJx1nxsHLsb2boS3fNdk0",
  authDomain: "clone-90105.firebaseapp.com",
  projectId: "clone-90105",
  storageBucket: "clone-90105.firebasestorage.app",
  messagingSenderId: "387770696353",
  appId: "1:387770696353:web:df932d44a04f4feeb266e0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();