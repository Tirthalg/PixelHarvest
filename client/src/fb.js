// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail,signOut,} from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc, } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAAIGqUlUseZe7f2OuU-Ksz_WXViJbG-LA",
    authDomain: "pixel-harvest-2ed1b.firebaseapp.com",
    projectId: "pixel-harvest-2ed1b",
    storageBucket: "pixel-harvest-2ed1b.appspot.com",
    messagingSenderId: "35218776827",
    appId: "1:35218776827:web:3041108c6caf1b0c62065e",
    measurementId: "G-R8Q8FH8YEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const logout = () => {
    signOut(auth);
    
};
export {auth,db,signInWithGoogle,logInWithEmailAndPassword,registerWithEmailAndPassword,sendPasswordReset,logout,};