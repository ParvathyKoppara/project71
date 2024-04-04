import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDN_8ROq0pEfyC0bjScMD8nXSiwhohMDu8",
    authDomain: "project71-2f4cf.firebaseapp.com",
    projectId: "project71-2f4cf",
    storageBucket: "project71-2f4cf.appspot.com",
    messagingSenderId: "551907127040",
    appId: "1:551907127040:web:07d4745a0278b156360de5"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
