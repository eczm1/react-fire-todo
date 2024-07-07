import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB-445Gn4NMyTDUkkQhYl2MnRcFKJ7ay2U",
  authDomain: "tasker-c1ed2.firebaseapp.com",
  projectId: "tasker-c1ed2",
  storageBucket: "tasker-c1ed2.appspot.com",
  messagingSenderId: "537283067984",
  appId: "1:537283067984:web:1d2ed6bca0411cc4629155"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);