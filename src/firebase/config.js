import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzwG91n8FYT61-P5bM2s2t2tB6tcFNd9w",
    authDomain: "docapp-149ae.firebaseapp.com",
    projectId: "docapp-149ae",
    storageBucket: "docapp-149ae.appspot.com",
    messagingSenderId: "831822940059",
    appId: "1:831822940059:web:546e44cb0464f756d8833e",
    measurementId: "G-07H9GWF115"
  };

 const app = initializeApp(firebaseConfig)
 export const db = getFirestore(app)