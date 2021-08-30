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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // userAuth holds all the date that we got when user logged in with google

  const userRef = firestore.doc(`users/${userAuth.uid}`); //Check if there is user with this uid (special id from firebase (google)) => we use this as reference of database to add or modify the data

  const snapShot = await userRef.get(); // get the snap of obejct (represent data (copy of the data not autal coonection with database))

  //Create new user
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return { title, items, routeName: encodeURI(title.toLowerCase()), id: doc.id };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
