import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";

const firebaseConfig = {
  
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const notescollectionRef = collection(database, "Notes");
