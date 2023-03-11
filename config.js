import firebase from "firebase";
//require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBys8dWym0t5ZKMJhWhzC9kwzKKngBWqxU",
  authDomain: "eride-bab8f.firebaseapp.com",
  projectId: "eride-bab8f",
  storageBucket: "eride-bab8f.appspot.com",
  messagingSenderId: "7069881370",
  appId: "1:7069881370:web:cd194f354b203efc15ada3"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
