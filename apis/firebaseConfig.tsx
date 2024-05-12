import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import styleCardapio from "../styles/stylesCardapio";
import AppLoading from "expo-app-loading";
import stylePadrao from "../styles/stylesDefault";
import AntDesign from "react-native-vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import FA from "react-native-vector-icons/FontAwesome";
import styleLogin from "../styles/stylesLogin";

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

export const auth = getAuth(app);

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
      first: "Allan",
      middle: "Diniz Raposo Moreira",
      last: "de Góes",
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// ==========================================================

function PizzasSalgadas() {
  const [pizzaURL, setPizzaURL] = useState<string[]>([]);
  const [pizzaTitle, setPizzaTitle] = useState([]);
  const [pizzaPreco, setPizzaPreco] = useState([]);
  const [loading, setLoading] = useState(false);

  // requisição dos itens de dos cartões de cardapio

  useEffect(() => {
    const fetchData = async () => {
      const cardRef = doc(db, "pizzaCards", "pizzaSal");
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
    return <AppLoading />;
  }
  const [busca, setBusca] = useState("");

  const pizzasFiltradas = pizzaTitle
    .map(String)
    .filter((title) => title.startsWith(busca));

  return (
    <View>
      <View style={stylePadrao.searchBarAlign}>
        <View style={stylePadrao.searchBar}>
          <View style={stylePadrao.alignInput}>
            <AntDesign name="search1" size={20} color={"#333"} />
            <TextInput
              selectionColor={"#d69e04"}
              style={stylePadrao.inputStyle}
              autoCorrect={false}
              value={busca}
              onChangeText={(busca) => setBusca(busca)}
            />
          </View>
        </View>
      </View>
      {pizzasFiltradas.map((title, index) => (
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

// =============== TELA DE LOGIN ===============

export function TelaLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const autenticacao = auth;

  const login = async () => {
    setLoading(true);
    try {
      const resposta = await signInWithEmailAndPassword(auth, email, senha);
      console.log(resposta);
      alert("Verifique seu email!");
    } catch (error: any) {
      console.log(error);
      alert("Falha ao entrar.: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const cadastro = async () => {
    setLoading(true);
    try {
      const resposta = await createUserWithEmailAndPassword(auth, email, senha);
      console.log(resposta);
      alert("Verifique seu email!");
    } catch (error: any) {
      console.log(error);
      alert("Falha no cadastro: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styleLogin.container}>
      <View>
        <Text style={styleLogin.titleStyle}>Login</Text>
      </View>

      {/* inputs de email, senha e botões de login/cadastro */}

      <KeyboardAvoidingView>
        {/* input de email */}

        <View>
          <Text style={styleLogin.inputTitle}>Email</Text>
          <TextInput
            spellCheck={false}
            style={styleLogin.inputStyle}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Email"
            autoCapitalize="none"
          />
        </View>

        {/* input de senha */}

        <View>
          <Text style={styleLogin.inputTitle}>Senha</Text>
          <TextInput
            spellCheck={false}
            style={styleLogin.inputStyle}
            onChangeText={(text) => setSenha(text)}
            value={senha}
            placeholder="Senha"
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </View>

        {loading ? (
          <AppLoading />
        ) : (
          //  botões de login/criar conta

          <View style={styleLogin.alignBtnRow}>
            <View style={stylePadrao.alignBtn}>
              {/* entrar */}

              <Pressable style={stylePadrao.btn} onPress={login}>
                <Text
                  style={{
                    fontFamily: "Montserrat_400Regular",
                    fontSize: 20,
                    color: "#222",
                  }}
                >
                  Entrar
                </Text>
              </Pressable>

              {/* criar conta */}

              <Pressable style={stylePadrao.btn} onPress={cadastro}>
                <Text
                  style={{
                    fontFamily: "Montserrat_400Regular",
                    fontSize: 20,
                    color: "#222",
                  }}
                >
                  Criar conta
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </KeyboardAvoidingView>

      {/* botões para login externo */}

      {/* facebook */}

      <View style={styleLogin.socialAlign}>
        <Pressable>
          <View style={styleLogin.facebookButton}>
            <FA name="facebook-square" size={40} color={"#fff"} />
            <Text style={styleLogin.loginTextWhite}>Entrar com Facebook</Text>
          </View>
        </Pressable>
      </View>

      {/* google */}

      <View>
        <Pressable>
          <View style={styleLogin.googleButton}>
            <FA name="google" size={40} color={"#000"} />
            <Text style={styleLogin.loginTextBlack}>Entrar com Google</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export function Username() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setEmail(user ? user.email : null);
    });

    // Limpar a inscrição ao desmontar
    return () => unsubscribe();
  }, []);

  return <Text>Email Cadastrado: {email}</Text>;
}

export default PizzasSalgadas;
