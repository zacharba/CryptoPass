// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFireStore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = {
  apiKey: "AIzaSyAHYh_IWXPp_mcbA-g71NXCIKN6pz9L0U4",
  authDomain: "cryptopass-81d7d.firebaseapp.com",
  databaseURL: "https://cryptopass-81d7d-default-rtdb.firebaseio.com",
  projectId: "cryptopass-81d7d",
  storageBucket: "cryptopass-81d7d.appspot.com",
  messagingSenderId: "22180737663",
  appId: "1:22180737663:web:109d78966f1ec23d3e854a",
  measurementId: "G-8W7F63WX8R"
};

// Initialize Firebase
const app = initializeApp(firebaseApp);
const analytics = getAnalytics(app);
const auth = getAuth(firebaseApp);
const db = getFireStore(firebaseApp);
const todosCol = collection(db);
const snapshot = await getDocs(todosCol);
