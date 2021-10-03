// import {initializeApp} from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/storage";
import "firebase/database";
import {getFirestore} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth();

// Firebase Storage
const storage = getStorage(app);

const storageRef = ref(storage);

// Firestore
const db = getFirestore(app)

export { storage, storageRef, auth, firebase, db, app as default };
