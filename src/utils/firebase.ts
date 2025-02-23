// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// ✅ Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCRA5rTVW-FwkIDZQdSKOMibs3LfUVv7eU",
  authDomain: "pacerquest-auth.firebaseapp.com",
  projectId: "pacerquest-auth",
  storageBucket: "pacerquest-auth.appspot.com", // ✅ FIXED
  messagingSenderId: "293784538806",
  appId: "1:293784538806:web:4a578fe458f94be7d06017",
  measurementId: "G-FJSLD999VW",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Google Sign-in Function
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};

// ✅ Logout Function
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Sign Out Error:", error);
  }
};

// ✅ Exports
export { auth, app };
