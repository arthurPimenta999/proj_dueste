import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy2KiQXzy0Ce5CuR83G_LE6UxJLYsWFiA",
  authDomain: "projetodueste.firebaseapp.com",
  databaseURL: "https://projetodueste-default-rtdb.firebaseio.com",
  projectId: "projetodueste",
  storageBucket: "projetodueste.appspot.com",
  messagingSenderId: "989713015226",
  appId: "1:989713015226:web:2185390e6f3eeb4ac93d83",
  measurementId: "G-BH2VJ1FDZN",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

try {
  const docRef = await addDoc(collection(db, "pizzaSal"), {
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWaGD5ipO5-S6j1KPluu9nQeBMv-9cv7DIozP1F5vZQ&s",
    precoPizza: "R$40,00",
    titlePizza: "Pizza Bauru",
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
