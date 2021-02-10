import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD-zmbjWqClQeNBzE5JKIpnAcGFHuVggiU",
    authDomain: "linkedin-clone-53263.firebaseapp.com",
    projectId: "linkedin-clone-53263",
    storageBucket: "linkedin-clone-53263.appspot.com",
    messagingSenderId: "383766605756",
    appId: "1:383766605756:web:93ae9859f1c5c59d3085b9",
    measurementId: "G-ZGYC13HHJ2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};