import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import styles from "../styles/styles";
import { useTheme } from "../components/theme";
import duesteLogo from "../assets/duesteLogo.png";

import AntDesign from "react-native-vector-icons/AntDesign"; // AntDesign
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../apis/firebaseConfig";
import * as SplashScreen from "expo-splash-screen";

export function TelaLogin() {
  const { height } = Dimensions.get("window");
  const style = styles();
  const { theme } = useTheme();

  // useStates de email

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  // função de login

  const login = async () => {
    setLoading(true);
    try {
      const resposta = await signInWithEmailAndPassword(auth, email, senha);
      console.log(resposta);
    } catch (error: any) {
      console.log(error);
      alert("Falha ao entrar.: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // função de cadastro

  const cadastro = async () => {
    setLoading(true);
    try {
      const resposta = await createUserWithEmailAndPassword(auth, email, senha);
      console.log(resposta);
    } catch (error: any) {
      console.log(error);
      alert("Falha no cadastro: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // função de trocar senha caso esquecida ou perdida

  const changePassword = async () => {
    setLoading(true);
    try {
      const resposta = await sendPasswordResetEmail(auth, email);
      console.log(resposta);
    } catch (error: any) {
      console.error(error);
      alert("Falha ao enviar email de troca de senha: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // função de carregamento

  if (loading == true) {
    SplashScreen.preventAutoHideAsync();
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[style.container, { paddingTop: height * 0.05 }]}>
        <View style={style.alignLogo}>
          <Image source={duesteLogo} style={style.logoStyle} />
        </View>

        <View style={style.loginTitleAlign}>
          <Text style={style.loginTitleStyle}>Login ou Cadastro</Text>
        </View>

        <View style={style.loginInputAlign}>
          <View>
            <Text style={style.loginInputTitle}>Email</Text>
            <TextInput
              keyboardType="email-address"
              spellCheck={false}
              style={style.defaultInputStyle}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Email"
              placeholderTextColor={theme.placeholderColor}
              selectionColor={"#d69e04"}
              autoCapitalize="none"
            />
          </View>

          {/* input de senha */}

          <View>
            <Text style={style.loginInputTitle}>Senha</Text>
            <TextInput
              spellCheck={false}
              style={style.defaultInputStyle}
              onChangeText={(text) => setSenha(text)}
              value={senha}
              placeholder="Senha"
              placeholderTextColor={theme.placeholderColor}
              selectionColor={"#d69e04"}
              autoCapitalize="none"
              secureTextEntry={true}
            />
          </View>
        </View>

        <View style={style.loginRowButton}>
          <View style={style.loginAlignButton}>
            <Pressable style={style.defaultButtonStyle} onPress={login}>
              <View style={style.defaultButtonInside}></View>
              <Text style={style.defaultButtonText}>   Entrar   </Text>
            </Pressable>
          </View>

          <View style={style.loginAlignButton}>
            <Pressable style={style.defaultButtonStyle} onPress={cadastro}>
              <View style={style.defaultButtonInside}>
                <Text style={style.defaultButtonText}>Cadastro</Text>
              </View>
            </Pressable>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <Pressable onPress={changePassword}>
            <Text style={style.loginForgotStyle}>Esqueci minha senha</Text>
          </Pressable>
        </View>

        <View style={style.loginSocialAlign}>
          <View style={style.loginSocialSpacing}>
            <Pressable onPress={() => {}}>
              <View style={style.loginFBButton}>
                <AntDesign name="facebook-square" size={25} color={"#fff"} />
                <Text style={[style.loginSocialText, { color: "#fff" }]}>
                  Entrar com Facebook
                </Text>
              </View>
            </Pressable>
          </View>

          <View style={style.loginSocialSpacing}>
            <Pressable onPress={() => {}}>
              <View style={style.loginGoogleButton}>
                <AntDesign name="google" size={25} color={theme.txtColor} />

                <Text
                  style={[style.loginSocialText, { color: theme.txtColor }]}
                >
                  Entrar com Google
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
