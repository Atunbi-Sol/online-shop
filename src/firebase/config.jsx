import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
	apiKey: "AIzaSyChT153r1z_pJpwcm1uEF-20c_LnIbOn_k",
	authDomain: "ecommerce-6a98f.firebaseapp.com",
	projectId: "ecommerce-6a98f",
	storageBucket: "ecommerce-6a98f.appspot.com",
	messagingSenderId: "543398062299",
	appId: "1:543398062299:web:6c17d253457114bc0d44fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
