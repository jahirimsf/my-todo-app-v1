
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyC9pcuQeV_HGbucmqZN37R4p_zqdcku_-w",
    authDomain: "my-todo-app-v1.firebaseapp.com",
    databaseURL: "https://my-todo-app-v1.firebaseio.com",
    projectId: "my-todo-app-v1",
    storageBucket: "my-todo-app-v1.appspot.com",
    messagingSenderId: "368588158853",
    appId: "1:368588158853:web:9c60e7dadf20a45ab136ec"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;