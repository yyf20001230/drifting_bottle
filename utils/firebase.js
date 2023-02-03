import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as SecureStore from 'expo-secure-store';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDNA0vtO8V05tFmkbOQBoI7CowQyu1irPs",
  authDomain: "driftingbottle-776e8.firebaseapp.com",
  projectId: "driftingbottle-776e8",
  storageBucket: "driftingbottle-776e8.appspot.com",
  messagingSenderId: "174348434230",
  appId: "1:174348434230:web:61233fb44bc65779c91197",
  measurementId: "G-BLTC64PXJL"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const profile_pic = Math.floor(Math.random() * 8);

  firebase.auth().signInWithPopup(provider);
  SecureStore.setItemAsync('loginStatus', 'true');
  SecureStore.setItemAsync('profile_pic', profile_pic.toString());
}

export function signOutWithGoogle() {
  firebase.auth().signOut();
  SecureStore.deleteItemAsync('loginStatus');
  SecureStore.deleteItemAsync('profile_pic');
}