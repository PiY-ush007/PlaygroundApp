import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAW0YLJBfPYe1FyTuaeobJ2056-bxmjysQ",
  authDomain: "faker-1d165.firebaseapp.com",
  databaseURL: "https://faker-1d165.firebaseio.com",
  projectId: "faker-1d165",
  storageBucket: "faker-1d165.appspot.com",
  messagingSenderId: "599604108935",
  appId: "1:599604108935:web:00cbb1e076d323d8b22222",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
