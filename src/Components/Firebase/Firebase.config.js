// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmqmlZn5bt7mLf115hku54CO3HX3dK4vk",
  authDomain: "land-house.firebaseapp.com",
  projectId: "land-house",
  storageBucket: "land-house.appspot.com",
  messagingSenderId: "11010214087",
  appId: "1:11010214087:web:128e6581310f73036596e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;