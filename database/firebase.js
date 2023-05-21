// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBngyYszC3mdsgQ0RsWnNu7Go3wpLM_gVk",
  authDomain: "nft-marketplace-d54bc.firebaseapp.com",
  projectId: "nft-marketplace-d54bc",
  storageBucket: "nft-marketplace-d54bc.appspot.com",
  messagingSenderId: "235187590207",
  appId: "1:235187590207:web:afb4e540168115ce19d48a",
  measurementId: "G-5PGWE3NP5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;