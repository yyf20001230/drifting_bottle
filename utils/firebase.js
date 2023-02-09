import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDNA0vtO8V05tFmkbOQBoI7CowQyu1irPs",
  authDomain: "driftingbottle-776e8.firebaseapp.com",
  databaseURL: "https://driftingbottle-776e8-default-rtdb.firebaseio.com",
  projectId: "driftingbottle-776e8",
  storageBucket: "driftingbottle-776e8.appspot.com",
  messagingSenderId: "174348434230",
  appId: "1:174348434230:web:7f390f3925b59febc91197",
  measurementId: "G-HQ0N1NFW80"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };