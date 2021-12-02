import { getStorage, ref } from "firebase/storage";
import firebase from "firebase/compat/app"
import "firebase/storage";
import "firebase/database";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import "firebase/auth"

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
// export const db = getFirestore(app)
export const db = getFirestore(app)


export { storage, storageRef, auth, app as default };


