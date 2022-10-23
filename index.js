// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);