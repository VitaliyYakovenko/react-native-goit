import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: 'AIzaSyDEe7uOpZr8L_3yNCeXs-CbCcckXSoNA0s',
  authDomain: 'go-it-home-work.firebaseapp.com',
  databaseURL: 'https://go-it-home-work.firebaseio.com',
  projectId: 'go-it-home-work',
  storageBucket: 'go-it-home-work.appspot.com',
  messagingSenderId: '100794154703',
  appId: '1:100794154703:android:3b8129c8f3f6720e9881ba',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

