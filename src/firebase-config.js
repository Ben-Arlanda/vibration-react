import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth' // importing from authentcation library on firebase
const firebaseConfig = {
    apiKey: "AIzaSyBWz1dywe3PoObhJyvHoPcd53ev5Vlj9Ag",
    authDomain: "vibration-5956b.firebaseapp.com",
    projectId: "vibration-5956b",
    storageBucket: "vibration-5956b.appspot.com",
    messagingSenderId: "111299648420",
    appId: "1:111299648420:web:de3d28529336bf7ab57f31",
    measurementId: "G-FY7M712PTV"
};

const app = initializeApp(firebaseConfig)


// passing getAuth to say app has authentication 
export const auth = getAuth(app)