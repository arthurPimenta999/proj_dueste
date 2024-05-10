import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
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
const db = getFirestore(app);

import { collection, addDoc, deleteDoc, getDoc, setDoc} from "firebase/firestore"; 

//algumas variaveis para usar posterioremnte ~~ Rafinha
let pnome, ppreco, pimagem, pingredientes;
let lnome, lpreco, limagem;

async function updatedataP(colecao: string, id: string, preco: number, titulo: string, url: string): Promise<any> {

  const [pURL, setPizzaURL] = useState([]);
  const [pTitle, setPizzaTitle] = useState([]);
  const [pPreco, setPizzaPreco] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {

      const cardRef = doc(db, colecao , id);
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

  try {
    const docRef = await setDoc(doc(db, colecao, id), {
        pizzaPreco: {pPreco, preco},
        pizzaTitle: {pTitle, titulo},
        pizzaURL: {pURL, url}
    });
    console.log("Documento" + id + "Alterado com sucesso")
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
async function deletedata(colecao: string, id: string) {
    try {
      const docRef = await deleteDoc(doc(db,colecao, id));
      console.log("Documento deletado com sucesso");
    } catch (e) {
      console.error("Erro ao deletar documento do ID:", id)
    }
}


//Ler qualquer documetno do BD ~~Rafinha
async function readata(colecao: string, id: string,) {

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

//junção de todas as opreções
const dataoperations = {
  deletedata,
  updatedataU,
  updatedataP,
  writedataU,
  readata
}

export default dataoperations;
