import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyANP1K9zDeGH8DbbvQM289sf4OhrZs0Jxo",
  authDomain: "linkedin-clone-yt-b68b3.firebaseapp.com",
  projectId: "linkedin-clone-yt-b68b3",
  storageBucket: "linkedin-clone-yt-b68b3.appspot.com",
  messagingSenderId: "277235785712",
  appId: "1:277235785712:web:a733223505029a03910735"
}; 


const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();


export { db ,  auth };

