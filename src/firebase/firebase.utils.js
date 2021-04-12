import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDqA6JxD1lwSIBcMz8wsjiz5Q1cFcYHpMs',
    authDomain: 'crwn-clothing-24a7e.firebaseapp.com',
    projectId: 'crwn-clothing-24a7e',
    storageBucket: 'crwn-clothing-24a7e.appspot.com',
    messagingSenderId: '275516433083',
    appId: '1:275516433083:web:5cf050a3a26fce2a17ff9e',
    measurementId: 'G-GP7ZNB76G4',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
