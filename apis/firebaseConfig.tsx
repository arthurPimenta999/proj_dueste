// pra manusear melhor os dados, tudo relacionado
// ao firebase ou firestore será colocado aqui.
// isso inclui tanto funções assíncronas pra
// leitura/gravação de dados, quanto views e
// componentes criados que usam dados do DB. :)

import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import * as SplashScreen from "expo-splash-screen";
import styleCardapio from "../styles/stylesCardapio";

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

// ========== funções exemplo pra ler/gravar dados ==========

async function readData() {
  const querySnapshot = await getDocs(collection(db, "cardapioURL"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

async function writeData() {
  try {
    const docRef = await addDoc(collection(db, "oirsrs"), {
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// ==========================================================

function PizzasSalgadas() {
  const [pizzaURL, setPizzaURL] = useState([]);
  const [pizzaTitle, setPizzaTitle] = useState([]);
  const [pizzaPreco, setPizzaPreco] = useState([]);
  const [loading, setLoading] = useState(false);

  // requisição dos itens de dos cartões de cardapio

  useEffect(() => {
    const fetchData = async () => {
      const cardRef = doc(db, "cardapioCards", "pizzaSal");
      const cardSnap = await getDoc(cardRef);

      // atribuindo os valores obtidos da requisição às variáveis do useState

      if (cardSnap.exists()) {
        setPizzaURL(cardSnap.data().pizzaURL);
        setPizzaTitle(cardSnap.data().pizzaTitle);
        setPizzaPreco(cardSnap.data().pizzaPreco);
      } else {
        console.log("Documento não encontrado.");
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return SplashScreen.preventAutoHideAsync();
  }

  return (
    <View>
      {pizzaTitle.map((title, index) => (
        <View style={styleCardapio.styleCard}>
          <Image
            source={{ uri: pizzaURL[index] }}
            style={styleCardapio.styleImage}
          />
          <View>
            <Text style={styleCardapio.pizzaTitle}>{title}</Text>
            <Text style={styleCardapio.precoAlign}>{pizzaPreco[index]}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

export default PizzasSalgadas;
