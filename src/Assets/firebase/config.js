import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsS0ucWZt58Oj065nie-41jhyLXcC_sWQ",
  authDomain: "chatrayans.firebaseapp.com",
  projectId: "chatrayans",
  storageBucket: "chatrayans.appspot.com",
  messagingSenderId: "858626124353",
  appId: "1:858626124353:web:bb8be3d87a3047dea674c0"
};

  const app =initializeApp(firebaseConfig);

  export const storage = getStorage(app);

  const db= getFirestore();
  export {db}