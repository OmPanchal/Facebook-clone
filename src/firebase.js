import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAqaC3T6Eq5Wut17nUqFW1lDqGdjKH8bho",
  authDomain: "facebook-clone-bc372.firebaseapp.com",
  projectId: "facebook-clone-bc372",
  storageBucket: "facebook-clone-bc372.appspot.com",
  messagingSenderId: "915570668552",
  appId: "1:915570668552:web:17c9eb4abc281bdb188dbd",
  measurementId: "G-FQFKZVG1D4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
