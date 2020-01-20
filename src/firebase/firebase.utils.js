import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBjA6i851UVil9h9UwPipvs8fvK-Li7nr8",
  authDomain: "crwn-db-b5eed.firebaseapp.com",
  databaseURL: "https://crwn-db-b5eed.firebaseio.com",
  projectId: "crwn-db-b5eed",
  storageBucket: "crwn-db-b5eed.appspot.com",
  messagingSenderId: "42469355047",
  appId: "1:42469355047:web:f3eb2296cf2d8c5705e802",
  measurementId: "G-YQ6EG3ZFQ4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
