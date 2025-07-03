import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDseEN3FmfW6M8eHZZeBIkXTOT-FK0sK-o",
    authDomain: "chat-with-pdf-26531.firebaseapp.com",
    projectId: "chat-with-pdf-26531",
    storageBucket: "chat-with-pdf-26531.firebasestorage.app",
    messagingSenderId: "513318647206",
    appId: "1:513318647206:web:0df641ff792a3f56488b67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };