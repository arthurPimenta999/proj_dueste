import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styleSeguranca from "../../styles/sub_config/styleSeguranca";
import stylePadrao from "../../styles/stylesDefault";
import {
  VerifyEmailButton,
  VerifyEmail,
  auth,
} from "../../apis/firebaseConfig";
import Foundation from "react-native-vector-icons/Foundation";
import BottomSheet from "@gorhom/bottom-sheet";
import styleSettings from "../../styles/stylesSettings";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Switch } from "react-native-switch";
import { User, deleteUser, sendPasswordResetEmail } from "firebase/auth";

function EditarSeguranca() {
  // usuario atual

  const usuario = auth.currentUser;

  const [isLogged, setIslogged] = useState<User | null>(usuario);

  const email = isLogged.email;

  //configurações da modal de info sobre 2FA

  const refInfoAuth = useRef(null);
  const snapPointInfoAuth = useMemo(() => ["20%", "30%"], []);
  const handleOpenInfoAuth = () => refInfoAuth.current?.expand();

  // configurações do switch

  const [twoFA, setTwoFA] = useState(false);

  function deleteUserPress() {
    const deleteUsuario = async () => {
      {
        isLogged ? deleteUser(isLogged) : console.log("null");
      }
    };

    deleteUsuario();
  }

  function updatePasswordPress() {
    const updatePassword = async (email) => {
      {
        isLogged ? sendPasswordResetEmail(auth, email) : console.log("null"),
          alert("Verifique seu email!");
      }
    };

    updatePassword(email);
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={stylePadrao.generalTitleAlign}>
          <Text style={stylePadrao.generalTitleStyle}>Segurança</Text>
        </View>

        <View style={styleSeguranca.container}>
          <View>
            <Text style={styleSeguranca.generalFont600}>Verificar Email:</Text>
            <View style={styleSeguranca.databoxStyle}>
              <Text
                style={[styleSeguranca.generalFont400, { textAlign: "center" }]}
              >
                <VerifyEmail />
              </Text>
            </View>
          </View>
        </View>

        <VerifyEmailButton />

        {/* autenticação de dois fatores. pode ser por email, celular, ou ambos. */}

        <View style={stylePadrao.generalTitleAlign}>
          <View style={styleSeguranca.authIconAlign}>
            <Text style={stylePadrao.generalTitleStyle}>Autenticação</Text>
            <Pressable onPress={handleOpenInfoAuth}>
              <Foundation
                name="info"
                size={25}
                style={{ justifyContent: "flex-end" }}
              />
            </Pressable>
          </View>
        </View>

        <View style={styleSeguranca.switchAlign}>
          <View style={styleSeguranca.switchRow}>
            <Text
              style={[
                styleSeguranca.generalFont400,
                { maxWidth: "50%", textAlign: "center" },
              ]}
            >
              Usar autenticação de dois fatores?
            </Text>
            <Switch
              value={twoFA}
              onValueChange={() => setTwoFA(!twoFA)}
              circleSize={30}
              barHeight={30}
              circleBorderWidth={3}
              activeText={""}
              inActiveText={""}
              backgroundActive={"#4caf50"}
            />
          </View>
        </View>

        <View style={styleSeguranca.bottomSecurityBtns}>
          <View style={styleSeguranca.alignSecurityBtns}>
            <Pressable style={stylePadrao.btn} onPress={updatePasswordPress}>
              <Text
                style={{
                  fontFamily: "Mont400",
                  fontSize: 20,
                  color: "#222",
                  position: "absolute",
                  textAlign: "center",
                }}
              >
                Alterar Senha
              </Text>
            </Pressable>

            <Pressable style={stylePadrao.btn} onPress={deleteUserPress}>
              <Text
                style={{
                  fontFamily: "Mont400",
                  fontSize: 20,
                  color: "#222",
                  position: "absolute",
                  textAlign: "center",
                }}
              >
                Excluir Conta
              </Text>
            </Pressable>
          </View>
        </View>

        {/* 
          modal estilo bottom-sheet ///Sobre
        */}

        <BottomSheet
          ref={refInfoAuth}
          index={-1}
          snapPoints={snapPointInfoAuth}
          enablePanDownToClose={true}
          style={styleSettings.modalStyle}
          backgroundStyle={{ backgroundColor: "#fafafa" }}
        >
          <View style={stylePadrao.modalContentAlign}>
            <View style={stylePadrao.modalTitleAlign}>
              <Text style={stylePadrao.modalTitleStyle}>
                Autenticação de Dois Fatores
              </Text>
            </View>
            <Text style={stylePadrao.modalContentStyle}>
              A autenticação de dois fatores (2FA) adiciona uma camada extra de
              segurança à sua conta. Após inserir sua senha, um segundo fator -
              geralmente um código enviado ao seu email - é necessário para
              acessar sua conta. Isso protege você mesmo que sua senha seja
              comprometida.
            </Text>
          </View>
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default EditarSeguranca;
