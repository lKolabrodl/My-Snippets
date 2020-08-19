import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBy-CDArcmrUVXl8QhPJhtI48MKBEJbwTE",
  authDomain: "chat-app-c9922.firebaseapp.com",
  databaseURL: "https://chat-app-c9922.firebaseio.com",
  projectId: "chat-app-c9922",
  storageBucket: "chat-app-c9922.appspot.com",
  messagingSenderId: "391063422709",
  appId: "1:391063422709:web:9be5cf51980a187f46a7bc",
};

const fire = firebase.initializeApp(config);
export default fire;
