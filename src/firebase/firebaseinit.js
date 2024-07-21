// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA955EBQuOJ0LVixXBOWJ7zUVZQL--o6Y",
  authDomain: "sxcsf-34032.firebaseapp.com",
  projectId: "sxcsf-34032",
  storageBucket: "sxcsf-34032.appspot.com",
  messagingSenderId: "869936471272",
  appId: "1:869936471272:web:f773dea76d72b8fabcbd5d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;
