import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
const firebaseApp=initializeApp({
    apiKey: "AIzaSyD0rymbLVFg8UNmMbgHjr7Sdx0mLRiJI04",
    authDomain: "instawarm-ae860.firebaseapp.com",
    projectId: "instawarm-ae860",
    storageBucket: "instawarm-ae860.appspot.com",
    messagingSenderId: "481295036239",
    appId: "1:481295036239:web:d2659a7c50ff5b3ef89f3a",
    measurementId: "G-QXZJEZ0DFB"
  });
  
const db = getFirestore();
  
 export default db