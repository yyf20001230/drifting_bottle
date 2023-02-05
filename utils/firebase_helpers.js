import * as SecureStore from "expo-secure-store";

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes
} from "react-native-google-signin";

import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

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
//const database = firebase.getDatabase();

export const signInWithGoogle = () => {
  const profile_pic = Math.floor(Math.random() * 8);
  signInWithRedirect(getAuth(), new GoogleAuthProvider());
  SecureStore.setItemAsync("loginStatus", "true");
  SecureStore.setItemAsync("profile_pic", profile_pic.toString());
};

export const signOutWithGoogle = () => {
  signOut(getAuth(firebase));
  SecureStore.deleteItemAsync("loginStatus");
  SecureStore.deleteItemAsync("profile_pic");
};
