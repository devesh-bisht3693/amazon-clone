// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDtIr_7s6DczOTWQlrTDXytfCfqwzFLlT8",
  authDomain: "clone-7738e.firebaseapp.com",
  projectId: "clone-7738e",
  storageBucket: "clone-7738e.appspot.com",
  messagingSenderId: "919675951055",
  appId: "1:919675951055:web:aaadd8f3bfc81942afa4ba",
  measurementId: "G-5C005G3EN8"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };