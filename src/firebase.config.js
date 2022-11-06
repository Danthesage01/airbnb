
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCtv7WRYvwtDf9fAmzadhuCHcWCIVFghOU",
  authDomain: "airbnb-ed42b.firebaseapp.com",
  projectId: "airbnb-ed42b",
  storageBucket: "airbnb-ed42b.appspot.com",
  messagingSenderId: "185512044768",
  appId: "1:185512044768:web:f5c29fa0cbae2aa70cc885",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app
