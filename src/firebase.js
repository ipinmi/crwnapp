import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBtJOXcmLxUBg5qlkJlNH9JdIoZ-kYrvUc",
    authDomain: "crwn-db-3808f.firebaseapp.com",
    databaseURL: "https://crwn-db-3808f.firebaseio.com",
    projectId: "crwn-db-3808f",
    storageBucket: "crwn-db-3808f.appspot.com",
    messagingSenderId: "344321665843",
    appId: "1:344321665843:web:7bc83d3cd640100340ac46",
    measurementId: "G-32XN05CGR3"
};

// async because of an API  request
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // to create the snapshot
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        // propertis to store
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;