import  firebase from 'firebase/compat/app' 
import 'firebase/compat/firestore'
const firebaseConfig = {

    apiKey: "AIzaSyB7yrKRZoE3Rwl-dzvoSAXrk0gPisRKEVw",
    authDomain: "fir-project-8a1dd.firebaseapp.com",
    projectId: "fir-project-8a1dd",
    storageBucket: "fir-project-8a1dd.appspot.com",
    messagingSenderId: "695050694321",
    appId: "1:695050694321:web:279e7fbb3e3c78e1b2fc90",
    measurementId: "G-1DH7M961LE"

};
const Firebase = firebase.initializeApp(firebaseConfig);
export const db = Firebase.firestore();