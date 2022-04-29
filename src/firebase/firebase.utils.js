// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/app'
import 'firebase/firestore' // For Database
import 'firebase/auth' // For Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9lVS3zX5Jk5WgdYYdonFb7xhSJn4sU-k",
  authDomain: "kellton-ecommerce-3316b.firebaseapp.com",
  projectId: "kellton-ecommerce-3316b",
  storageBucket: "kellton-ecommerce-3316b.appspot.com",
  messagingSenderId: "1057118913497",
  appId: "1:1057118913497:web:09a6d6394451ca4ff5cfc8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Authentication
export const auth = firebase.auth();

//Firestore Database
export const fireStore = firebase.fireStore();

//to use google auth
const provider = new firebawse.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;