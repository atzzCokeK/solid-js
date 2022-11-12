import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBLrkaQveJ_GY-M0QKav6ti6Z7DcM6sM0",
  authDomain: "wanna-go-to-game-center.firebaseapp.com",
  projectId: "wanna-go-to-game-center",
  storageBucket: "wanna-go-to-game-center.appspot.com",
  messagingSenderId: "943394813907",
  appId: "1:943394813907:web:f3455681bbd15f2d60a126",
  measurementId: "G-78YJBP20EC",
};

export const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);
