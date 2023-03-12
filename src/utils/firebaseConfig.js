// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB2nWLdezYHcdczmUt4BUD3vvyTez6FdqU',
  authDomain: 'moviemarketmiraculous.firebaseapp.com',
  projectId: 'moviemarketmiraculous',
  storageBucket: 'moviemarketmiraculous.appspot.com',
  messagingSenderId: '355798515416',
  appId: '1:355798515416:web:0ba81ee08608082f99a1ad',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const db = getFirestore(app);
