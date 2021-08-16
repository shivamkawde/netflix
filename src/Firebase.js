import firebase from "firebase/app"
import 'firebase/firestore';
import "firebase/auth"
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB90VXRNIwoqfmm9KmrGaf_bGvqMLIV3J0",
    authDomain: "netflix-clone-8d8e4.firebaseapp.com",
    projectId: "netflix-clone-8d8e4",
    storageBucket: "netflix-clone-8d8e4.appspot.com",
    messagingSenderId: "158228094310",
    appId: "1:158228094310:web:a9df8b48e6f3c3e3f6fca7"
  };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  export const auth=firebase.auth();
  let provider=new firebase.auth.GoogleAuthProvider()
  export const firestore= firebase.firestore();
  export const signInWithGoogle=()=>auth.signInWithPopup(provider)
 export default firebase;

 