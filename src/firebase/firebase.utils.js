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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
