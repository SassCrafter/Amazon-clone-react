import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBdzW0uVBBBuRYnRg6zt4b66Bv9IcMeRBQ",
  authDomain: "clone-6a6d9.firebaseapp.com",
  projectId: "clone-6a6d9",
  storageBucket: "clone-6a6d9.appspot.com",
  messagingSenderId: "21818982299",
  appId: "1:21818982299:web:9d542a28f999cca72d2b3e"
});


const db = firebase.firestore();

export { db }
