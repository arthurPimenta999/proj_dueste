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

import { collection, addDoc, updateDoc, deleteField } from "firebase/firestore"; 


let IDu, unome, email, tel, senha,unnome, nemail, ntel, nsenha;
let pnome, ppreco, pimagem, pingredientes;
let lnome, lpreco, limagem;


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



try {
    const docRef = await updateDoc(doc(db, "usuario", IDu), {
      email: nemail,
      nome: unnome,
      telefone: ntel,
      senha: nsenha
    });
    console.log("Documento registrado no ID: ", docRef.id);
  } catch (e) {
    console.error("Erro em adicionar documento:", e);
  }
  


