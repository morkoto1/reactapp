import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC6rtqy0_C1_rScwvzDBXBD0dtoDa__rFM",
    authDomain: "crwn-db-a7b64.firebaseapp.com",
    projectId: "crwn-db-a7b64",
    storageBucket: "crwn-db-a7b64.appspot.com",
    messagingSenderId: "845428079557",
    appId: "1:845428079557:web:5e971178ca2501f0d0a9ac",
    measurementId: "G-7S510PD9ME"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
