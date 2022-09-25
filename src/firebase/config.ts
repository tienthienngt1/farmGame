import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB8sz1pX0CvdactUYasS9m7_mVkmhX-jcM",
	authDomain: "farm-game-ac9ce.firebaseapp.com",
	projectId: "farm-game-ac9ce",
	storageBucket: "farm-game-ac9ce.appspot.com",
	messagingSenderId: "144580988407",
	appId: "1:144580988407:web:898b509304a8a4771f32f2",
	measurementId: "G-J56DYQK2W1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
