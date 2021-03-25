import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASpePIHQfo3-ACYsq99w3e-JI70E_s_i0",
  authDomain: "friendzone-e0bfc.firebaseapp.com",
  projectId: "friendzone-e0bfc",
  storageBucket: "friendzone-e0bfc.appspot.com",
  messagingSenderId: "825193746077",
  appId: "1:825193746077:web:641f9aa362e542299b0e74",
  measurementId: "G-8KSPB9503C",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("error creating user: ", error.message);
    }
  }
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
  auth
    .signInWithPopup(provider)
    .then((res) => console.log(res.user))
    .catch((err) => console.error(err.message));

export default db;
