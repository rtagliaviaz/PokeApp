import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCDdCf-B_KkJsvj3g6zTOA_ryyflkeTGuA",
  authDomain: "pokedb-app.firebaseapp.com",
  databaseURL: "https://pokedb-app.firebaseio.com",
  projectId: "pokedb-app",
  storageBucket: "pokedb-app.appspot.com",
  messagingSenderId: "982661480422",
  appId: "1:982661480422:web:ee7df1c5eb3247e9112027"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase;