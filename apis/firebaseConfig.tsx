import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getReactNativePersistence,
  initializeAuth,
  sendEmailVerification,
  User,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import * as SplashScreen from "expo-splash-screen";
import stylePadrao from "../styles/stylesDefault";
import { SafeAreaView } from "react-native-safe-area-context";
import FA from "react-native-vector-icons/FontAwesome";
import styleLogin from "../styles/stylesLogin";
import styleSeguranca from "../styles/sub_config/styleSeguranca";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

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

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const db = getFirestore(app);

// export const messaging = getMessaging(app);

// ==========================================================

// =============== TELA DE LOGIN ===============

export function TelaLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

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
            keyboardType="email-address"
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
          SplashScreen.preventAutoHideAsync
        ) : (
          //  botões de login/criar conta

          <View style={styleLogin.alignBtnRow}>
            <View style={stylePadrao.alignBtn}>
              {/* entrar */}

              <Pressable style={stylePadrao.btn} onPress={login}>
                <Text
                  style={{
                    fontFamily: "Mont400",
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
                    fontFamily: "Mont400",
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

      <Pressable>
        <View style={styleLogin.socialAlign}>
          <View style={styleLogin.facebookButton}>
            <FA name="facebook-square" size={40} color={"#fff"} />
            <Text style={styleLogin.loginTextWhite}>Entrar com Facebook</Text>
          </View>
        </View>
      </Pressable>

      {/* google */}

      <Pressable>
        <View>
          <View style={styleLogin.googleButton}>
            <FA name="google" size={40} color={"#000"} />
            <Text style={styleLogin.loginTextBlack}>Entrar com Google</Text>
          </View>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

export function UserEmail() {
  const [email, setEmail] = useState<string | null>(null);

  // retorna email do usuario em formato de string.

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setEmail(user ? user.email : null);
    });

    // Limpar a inscrição ao desmontar
    return () => unsubscribe();
  }, []);

  return email;
}

export function VerifyEmail() {
  const [verificarEmail, setVerificarEmail] = useState<string | null>(null);

  // função que pega o telefone cadastrado do database.
  // SE o usuario tem um telefone, retorna string com telefone.
  // SE o usuario NAO tem um telefone, retorna string 'nenhum nº cadastrado.

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setVerificarEmail(
        user && user.emailVerified
          ? "Email verificado. Autenticação de Dois Fatores Permitida."
          : "Email não verificado. Autenticação de Dois Fatores não permitida."
      );
    });

    // Limpar a inscrição ao desmontar
    return () => unsubscribe();
  }, []);

  return verificarEmail;
}

export function VerifyEmailButton() {
  const [btnName, setBtnName] = useState("Verificar Email");

  const [btnBackground, setBtnBackground] = useState("#fcba04");

  // função que pega o telefone cadastrado do database.
  // SE o usuario tem um telefone, retorna string com telefone.
  // SE o usuario NAO tem um telefone, retorna string 'nenhum nº cadastrado.

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setBtnName(
        user && user.emailVerified ? "Verificado." : "Verificar Email"
      );
      setBtnBackground(user && user.emailVerified ? "#4caf50" : "#fcba04");
    });

    // Limpar a inscrição ao desmontar
    return () => unsubscribe();
  }, []);

  const usuario = auth.currentUser;

  // função executada ao clicar no botão. SE o usuario nao tiver email verificado,
  // ela manda verificação. se tiver, ela não faz nada.

  const verify = () => {
    if (usuario && !usuario.emailVerified) {
      sendEmailVerification(usuario).then(() => alert("Verifique seu email!"));
    } else {
      alert("Email já verificado.");
    }
  };

  return (
    <View style={styleSeguranca.telefoneBtnAlign}>
      <Pressable onPress={verify}>
        <View
          style={[
            styleSeguranca.telefoneBtnStyle,
            { backgroundColor: btnBackground },
          ]}
        >
          <Text style={styleSeguranca.telefoneBtnFont}>{btnName}</Text>
        </View>
      </Pressable>
    </View>
  );
}
