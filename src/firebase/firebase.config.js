// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEURNOMBjHraIpcpQMPLshgN6rrjUEIwQ",
  authDomain: "bistro-boss-32eac.firebaseapp.com",
  projectId: "bistro-boss-32eac",
  storageBucket: "bistro-boss-32eac.appspot.com",
  messagingSenderId: "872933454683",
  appId: "1:872933454683:web:c62b47b7b0bb1b8314e07e"
};
console.log(firebaseConfig)
console.log(import.meta.env.Vite_apiKey)
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;