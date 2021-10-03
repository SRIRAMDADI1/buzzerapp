import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCdkAY4HnboKykMfYiGtlI5Po0OyvN2ig",
  authDomain: "buzzerapp-3b8c2.firebaseapp.com",
  databaseURL: "https://buzzerapp-3b8c2-default-rtdb.firebaseio.com",
  projectId: "buzzerapp-3b8c2",
  storageBucket: "buzzerapp-3b8c2.appspot.com",
  messagingSenderId: "250184999708",
  appId: "1:250184999708:web:a78d948f7b137982ae50d9"
};
// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
