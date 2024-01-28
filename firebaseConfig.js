// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSRbuRX31UxNPTwpDvpjJ-yHWuXUWAlb8",
  authDomain: "insynclearn.firebaseapp.com",
  projectId: "insynclearn",
  storageBucket: "insynclearn.appspot.com",
  messagingSenderId: "937016879553",
  appId: "1:937016879553:web:0fbfc575e65be66d0ee740",
  measurementId: "G-XFLP3H1MSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);