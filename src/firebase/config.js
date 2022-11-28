import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCgHMUWH4ZpZXLxrp_bMrU8beEKpKGS1Hs",
    authDomain: "feed-arena.firebaseapp.com",
    projectId: "feed-arena",
    storageBucket: "feed-arena.appspot.com",
    messagingSenderId: "432806169989",
    appId: "1:432806169989:web:f87c9aad64aa80333888ec"
  };

  //init app
  firebase.initializeApp(firebaseConfig)

  //init firestore
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectFirestore, timestamp}