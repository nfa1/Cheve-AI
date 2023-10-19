// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

export const firebaseConfig = {
    authDomain: "cheve-ai-71b54.firebaseapp.com",
    projectId: "cheve-ai-71b54",
    storageBucket: "cheve-ai-71b54.appspot.com",
    messagingSenderId: "1062329630560",
    appId: "1:1062329630560:web:6b3eca2841f8ce178c2805",
    apiKey: "AIzaSyADiq7dEsz8S-sLvAMTrYVH8_DEcgBi6j4",
    };

    export const uiConfig = {
        signInFlow: "popup",
        signInSuccessUrl: "/",
        signInOptions: [GoogleAuthProvider.PROVIDER_ID]
    };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);