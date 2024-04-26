import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

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

async function readData() {
  const querySnapshot = await getDocs(collection(db, "cardapioData"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

async function writeData() {
  try {
    const docRef = await addDoc(collection(db, "teste"), {
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default readData;
