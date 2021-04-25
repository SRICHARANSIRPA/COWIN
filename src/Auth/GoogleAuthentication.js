import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCaYr2cHbU59Vij-RcNgrHZwf0QONo-aEg",
  authDomain: "cowin-4e7fe.firebaseapp.com",
  projectId: "cowin-4e7fe",
  storageBucket: "cowin-4e7fe.appspot.com",
  messagingSenderId: "867488584494",
  appId: "1:867488584494:web:89b00a8d52eb597eda20bf",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
