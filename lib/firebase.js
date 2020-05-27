import * as firebase from "firebase";

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: "AIzaSyDxCfdLm0mUvNOBMNkbgF1d3evWbKjHa7Y",
    authDomain: "tgc-build.firebaseapp.com",
    databaseURL: "https://tgc-build.firebaseio.com",
    projectId: "tgc-build",
    storageBucket: "tgc-build.appspot.com",
    messagingSenderId: "564304444331",
    appId: "1:564304444331:web:a6688a36ca8bd1af3ef0ee",
  });
}

export default firebase;
