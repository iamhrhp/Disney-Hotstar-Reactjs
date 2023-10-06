// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBJMgks-lABEZfHdp4LdD0W7TVIat6T-t8',
  authDomain: 'hotstar-clone-6bfe2.firebaseapp.com',
  projectId: 'hotstar-clone-6bfe2',
  storageBucket: 'hotstar-clone-6bfe2.appspot.com',
  messagingSenderId: '906835665693',
  appId: '1:906835665693:web:d59958a77502121524f7f4',
  measurementId: 'G-MERYT51WSS',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// export const storage = getStorage(app);
