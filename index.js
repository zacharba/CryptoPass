// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseApp = {
  apiKey: "AIzaSyAHYh_IWXPp_mcbA-g71NXCIKN6pz9L0U4",
  authDomain: "cryptopass-81d7d.firebaseapp.com",
  databaseURL: "https://cryptopass-81d7d-default-rtdb.firebaseio.com",
  projectId: "cryptopass-81d7d",
  storageBucket: "cryptopass-81d7d.appspot.com",
  messagingSenderId: "22180737663",
  appId: "1:22180737663:web:109d78966f1ec23d3e854a",
  measurementId: "G-8W7F63WX8R",
  databaseURL: "https://cryptopass-81d7d-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseApp);
const database = getDatabase(app);


function writeAccount(userId, website, uname, stat, pass) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    url: website,
    username: uname,
    password: pass,
    status: stat
  });
}

writeAccount("Brandon", "www.example.com", "test@example.com", "test123")