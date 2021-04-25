import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBvzc0HHxWgUVe62zot1k17zyK_P8Yy7lA",
  authDomain: "privatechatapp-15768.firebaseapp.com",
  projectId: "privatechatapp-15768",
  storageBucket: "privatechatapp-15768.appspot.com",
  messagingSenderId: "795607460755",
  appId: "1:795607460755:web:55e8fb9b8773eee9719666",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
