import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKzpecMcfGQc1CV-pjgQFgQMKS9DfedrM",
  authDomain: "blozzard.firebaseapp.com",
  projectId: "blozzard",
  storageBucket: "blozzard.appspot.com",
  messagingSenderId: "1023086419199",
  appId: "1:1023086419199:web:4618f7a1cb43640cea00ca"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export default db;