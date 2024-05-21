import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { FieldValue, arrayUnion, doc, getFirestore, updateDoc } from "firebase/firestore";
import AntDesign from "react-native-vector-icons/AntDesign";


const firebaseConfig = {
    apiKey: "AIzaSyDy2KiQXzy0Ce5CuR83G_LE6UxJLYsWFiA",
  authDomain: "projetodueste.firebaseapp.com",
  databaseURL: "https://projetodueste-default-rtdb.firebaseio.com",
  projectId: "projetodueste",
  storageBucket: "projetodueste.appspot.com",
  messagingSenderId: "989713015226",
  appId: "1:989713015226:web:2185390e6f3eeb4ac93d83",
  measurementId: "G-BH2VJ1FDZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

import { collection, addDoc, deleteDoc, getDoc, setDoc} from "firebase/firestore"; 
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import stylePadrao from "../styles/stylesDefault";

//algumas variaveis para usar posterioremnte ~~ Rafinha

async function UpdatedataP(pPizza: string, nPizza: string, uPizza: string){
  try {
    const docRef = await updateDoc(doc(db, "pizzaCards", "pizzaSal"), {
      pizzaPreco: arrayUnion(pPizza),
      pizzaTitle: arrayUnion(nPizza),
      pizzaURL: arrayUnion(uPizza)
    });
    return ([docRef, console.log("Documento Alterado com sucesso")]);
  } catch (e) {
    console.error("Erro ao alterar documento:", e);
  }
}


//função de adicionar documentos ao firestore ~~ Rafinha
//adicionar USUARIO:  ~~Rafinha
async function writedataU(unome: string, tel: number, email: string, senha: string): Promise<any> {
try {
  const docRef = await addDoc(collection(db, "usuario"), {
    email: email,
    nome: unome,
    telefone: tel,
    senha: senha
  });
  console.log("Documento registrado no ID: ", docRef.id);
} catch (e) {
  console.error("Erro em adicionar documento:", e);
}

}


//função de atualizar um documento no firestore ~~Rafinha
async function updatedataU(id: string, unome: string, tel: number, email: string, senha: string): Promise<any> {
  try {
    const docRef = await setDoc(doc(db,"usuario", id), {
      email: email,
      nome: unome,
      telefone: tel,
      senha: senha
    });
    console.log("Documento do ID: " + id + "alterado");
  } catch (e) {
    console.error("Erro em adicionar documento:", e);
  }
  
  }


//Deletar QUALQUER documento do BD ~~Rafinha
async function DeleteData(colecao: string, id: string) {
    try {
      const docRef = await deleteDoc(doc(db,colecao, id));
      console.log("Documento deletado com sucesso");
    } catch (e) {
      console.error("Erro ao deletar documento do ID:", id)
    }
}


//Ler qualquer documetno do BD ~~Rafinha
async function ReadData(colecao: string, id: string,) {

  const docRef = doc(db, colecao, id);
  const docSnap = await getDoc(docRef)

  try {
      docSnap;
  } catch (e) {
    console.error("Erro ao encontrar documento do ID:", id)
  }

  if (docSnap.exists()) {
    console.log("Documento do ID:" + id + ":", docSnap.data());
  }else {
    console.log("nenhum documento encontrado!");
  }
}




export default [DeleteData,
  updatedataU,
  writedataU,
  UpdatedataP
];