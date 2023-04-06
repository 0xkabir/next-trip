import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC5wfSmg6gW1bGaZmbgsWVYjbTW9QXM_z4",
  authDomain: "nexttrip-d63d2.firebaseapp.com",
  projectId: "nexttrip-d63d2",
  storageBucket: "nexttrip-d63d2.appspot.com",
  messagingSenderId: "18374522356",
  appId: "1:18374522356:web:348ffc6219ebfab05b75a1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
