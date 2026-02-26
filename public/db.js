// db.js - The Connection Hub
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// ADDED: query and where are now included here
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, onSnapshot, arrayUnion, getDoc, query, where, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- PASTE YOUR FIREBASE CONFIG HERE ---
// (Make sure to keep your existing config keys here!)
const firebaseConfig = {
  // ... your keys ...
  apiKey: "AIzaSyCSfybxZgCrnrW-9hSfXxMoIQz0-NaqK1Q",
  authDomain: "workermanager-cc63f.firebaseapp.com",
  projectId: "workermanager-cc63f",
  storageBucket: "workermanager-cc63f.firebasestorage.app",
  messagingSenderId: "697657088066",
  appId: "1:697657088066:web:517ce305809c32deb5b5db"
};
// ---------------------------------------

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export tools so other pages can use them
// ADDED: query and where are exported here
export { db, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, onSnapshot, arrayUnion, getDoc, query, where, orderBy };