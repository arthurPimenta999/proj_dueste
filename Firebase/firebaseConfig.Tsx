// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
//inicializador do google cloud ~~Rafinha
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy2KiQXzy0Ce5CuR83G_LE6UxJLYsWFiA",
  authDomain: "projetodueste.firebaseapp.com",
  databaseURL: "https://projetodueste-default-rtdb.firebaseio.com",
  projectId: "projetodueste",
  storageBucket: "projetodueste.appspot.com",
  messagingSenderId: "989713015226",
  appId: "1:989713015226:web:67490bf47673c43bc93d83",
  measurementId: "G-NCXNWND4EY"
};

//Inicializador do firebase ~~Rafinha
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//Inicializador do Firestore ~~Rafinha
initializeApp({
    credential: applicationDefault()
  });
const db = getFirestore();


export default async function firestroecrud() {

  //caralhada de variável aiKKKKKKKKKKKKKKK ~~Rafinha
  let  id, collection, campo;
  let bairro, cep, cidade, n, rua, email, nome;
  let novoemail, novonome, novobairro, novocep, novocidade, novoN, novorua;



  //referencia para nao fica repetindo codigo ~~Rafinha
  const usuarioRef = db.collection('usuario').doc();


  //adiciona um documento na coleção usuário com os dados definidos ~~Rafinha
  const resadd = await usuarioRef.set({
    email: email,
    nome: nome,
    endereço: {
      cep: cep,
      cidade: cidade,
      bairro: bairro,
      rua: rua,
      numero: n
    }
  }).then(function () {
    console.log('Dados Cadastrados!');
  });

  //alterar um dado de um documento da colecao usuario ~~Rafinha
  //se novoemail ou novonome ou novocep... = 0/nulo; novoemail = email, novonome = nome....~~Rafinha
  const resUpd = await db.collection('usuario').doc(id).update({
    email: novoemail,
    nome: novonome,
    endereço: {
      cep: novocep,
      cidade: novocidade,
      bairro: novobairro,
      rua: novorua,
      numero: novoN
    }
  }).then(function () {
    console.log('Dados Atualizados!');
  });



  //deletar um DOCUMENTO atraves de seu ID ~~Rafinha
  const resDel = await db.collection(collection).doc(id).delete();


  //deletar um CAMPO de um documento da coleção ~~Rafinha
  const redDelCamp = await db.collection(collection).doc(id).update({
          campo: FieldValue.delete()
  })

}



