import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAeuvF2cji9680LdkSobRq1dueR96wo_rQ",

  authDomain: "crwn-db-ea788.firebaseapp.com",

  projectId: "crwn-db-ea788",

  storageBucket: "crwn-db-ea788.appspot.com",

  messagingSenderId: "231454465839",

  appId: "1:231454465839:web:208d673c10a339ed2c8bda",

  measurementId: "G-LNJ8GJK30Q",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
