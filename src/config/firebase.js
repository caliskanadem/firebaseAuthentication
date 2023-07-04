import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateCurrentUser,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgeHZejyYaSBcoZgyP1c6htRNFZdrHqIM",
  authDomain: "products-40391.firebaseapp.com",
  projectId: "products-40391",
  storageBucket: "products-40391.appspot.com",
  messagingSenderId: "1069072701465",
  appId: "1:1069072701465:web:1486df7054ea1640f47288",
  measurementId: "G-4N9QPWM6KX",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app);

export const signUp = async (name, email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
  await updateCurrentUser(auth, { displayName: name });
};

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};
