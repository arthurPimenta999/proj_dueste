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

import { collection, addDoc, deleteDoc, getDoc} from "firebase/firestore"; 

//algumas variaveis para usar posterioremnte ~~ Rafinha
let pnome, ppreco, pimagem, pingredientes;
let lnome, lpreco, limagem;


//função de adicionar documentos ao firestore ~~ Rafinha
//adicionar USUARIO:  ~~Rafinha
async function writedata(unome: string, tel: number, email: string, senha: string): Promise<any> {
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

async function updatedata(unome: string, tel: number, email: string, senha: string): Promise<any> {
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


async function deletedata(collection: string, id: string) {
    try {
      const docRef = await deleteDoc(doc(db,collection, id));
      console.log("Documento deletado com sucesso");
    } catch (e) {
      console.error("Erro ao deletar documento do ID:", id)
    }
}

async function readata(collection: string, id: string,) {

  const docRef = doc(db, collection, id);
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

const dataoperations = {
  deletedata,
  writedata,
  readata
}

export default dataoperations;
