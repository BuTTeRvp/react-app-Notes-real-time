import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpu2YFv79-R2lNlcfCnQKpTeoDxFD3A8M",
  authDomain: "test-d4e95.firebaseapp.com",
  projectId: "test-d4e95",
  storageBucket: "test-d4e95.appspot.com",
  messagingSenderId: "992753482621",
  appId: "1:992753482621:web:fde7d6eb8ad49d72856a14",
  measurementId: "G-0GWGD9HVF5"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const notescollectionRef = collection(database, "Notes");
