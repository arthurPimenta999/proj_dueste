import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, Pressable, Dimensions, Modal } from "react-native";
import { Switch } from "react-native-switch";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import styles from "../../styles/styles";
import { Divider } from "react-native-paper";
import { auth } from "../../apis/firebaseConfig";
import {
  User,
  deleteUser,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import Foundation from "react-native-vector-icons/Foundation"; // Icon - Foundation
import { useTheme } from "../../components/theme";

export default function EditarSeguranca() {
  const style = styles();

  const { theme } = useTheme();

  const { height } = Dimensions.get("window");

  // usuario atual
  const usuario = auth.currentUser;

  const [isLogged, setIslogged] = useState<User | null>(usuario);

  const email = "isLogged.email;";

  //configurações da modal de info sobre 2FA

  const refInfoAuth = useRef(null);
  const snapPointInfoAuth = useMemo(() => ["20%", "30%"], []);
  const handleOpenInfoAuth = () => refInfoAuth.current?.expand();

  //configurações da modal de deletar conta

  const refInfoDeleteAcc = useRef(null);
  const snapPointInfoDeleteAcc = useMemo(() => ["30%", "40%"], []);
  const handleOpenInfoDeleteAcc = () => refInfoDeleteAcc.current?.expand();
  const handleCloseInfoDeleteAcc = () => refInfoDeleteAcc.current?.close();

  // configurações do switch

  const [twoFA, setTwoFA] = useState(false);

  // ----- deleta a conta do usuário -----

  function deleteUserPress() {
    const deleteUsuario = async () => {
      {
        isLogged ? deleteUser(isLogged) : console.log("null");
      }
    };

    deleteUsuario();
  }

  // ----- botão que atualiza a senha do usuário -----

  function updatePasswordPress() {
    const updatePassword = async (email: string) => {
      {
        isLogged ? sendPasswordResetEmail(auth, email) : console.log("null"),
          alert("Verifique seu email!");
      }
    };

    updatePassword(email);
  }

  // ----- botão que envia código de verificação de conta pro email do usuário -----

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
      setBtnBackground(
        user && user.emailVerified ? theme.verifyConfirm : theme.yellow
      );
    });

    // Limpar a inscrição ao desmontar
    return () => unsubscribe();
  }, []);

  // função executada ao clicar no botão. SE o usuario nao tiver email verificado,
  // ela manda verificação. se tiver, ela não faz nada.

  const verify = () => {
    if (usuario && !usuario.emailVerified) {
      sendEmailVerification(usuario).then(() => alert("Verifique seu email!"));
    } else {
      alert("Email já verificado.");
    }
  };

  function VerifyEmail() {
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

  return (
    <GestureHandlerRootView
      style={[style.container, { paddingTop: height * 0.04 }]}
    >
      <View>
        <View style={style.topTitleAlign}>
          <Text style={style.topTitleStyle}>Segurança</Text>
        </View>

        <Divider />
      </View>

      <View style={style.securityAlign}>
        <View>
          <Text style={style.generalFont600}>Verificar Email:</Text>
          <View style={style.securityDataboxStyle}>
            <Text style={[style.generalFont400, { textAlign: "center" }]}>
              <VerifyEmail />
            </Text>
          </View>

          <View style={style.securityDataboxButtonAlign}>
            <Pressable onPress={verify}>
              <View
                style={[
                  style.securityButton,
                  { backgroundColor: btnBackground },
                ]}
              >
                <Text style={style.defaultButtonText}>{btnName}</Text>
              </View>
            </Pressable>
          </View>
        </View>

        <View style={style.security2FAlign}>
          <View style={style.security2FIconRow}>
            <Text style={style.generalFont600}>Autenticação 2FA:</Text>
            <Pressable onPress={handleOpenInfoAuth}>
              <Foundation
                name="info"
                size={25}
                style={{ justifyContent: "flex-end" }}
                color={theme.txtColor}
              />
            </Pressable>
          </View>

          <View style={style.security2FASwitchRow}>
            <Text
              style={[
                style.generalFont400,
                { maxWidth: "60%", textAlign: "center" },
              ]}
            >
              Deseja ativar Autenticação de Dois Fatores?
            </Text>
            <Switch
              value={twoFA}
              onValueChange={() => setTwoFA(!twoFA)}
              circleSize={30}
              barHeight={30}
              circleBorderWidth={2}
              activeText={""}
              inActiveText={""}
              backgroundActive={"#4caf50"}
            />
          </View>
        </View>

        <View style={style.securityBaseButtonsAlign}>
          <View style={style.securityBaseButtonsRow}>
            <Pressable onPress={handleOpenInfoDeleteAcc}>
              <View style={style.securityButton}>
                <Text style={style.defaultButtonText}>Excluir Conta</Text>
              </View>
            </Pressable>

            <Pressable onPress={updatePasswordPress}>
              <View style={style.securityButton}>
                <Text style={style.defaultButtonText}>Alterar Senha</Text>
              </View>
            </Pressable>
          </View>
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
        style={style.modalStyle}
        backgroundStyle={{ backgroundColor: theme.screenColor }}
        handleIndicatorStyle={{ backgroundColor: theme.txtColor }}
        backdropComponent={BottomSheetBackdrop}
      >
        <View style={style.modalContentAlign}>
          <View style={style.modalTitleAlign}>
            <Text style={style.modalTitleStyle}>
              Autenticação de Dois Fatores
            </Text>
          </View>
          <Text style={style.modalContentStyle}>
            A autenticação de dois fatores (2FA) adiciona uma camada extra de
            segurança à sua conta. Após inserir sua senha, um segundo fator -
            geralmente um código enviado ao seu email - é necessário para
            acessar sua conta. Isso protege você mesmo que sua senha seja
            comprometida.
          </Text>
        </View>
      </BottomSheet>

      <BottomSheet
        ref={refInfoDeleteAcc}
        index={-1}
        snapPoints={snapPointInfoDeleteAcc}
        enablePanDownToClose={true}
        style={style.modalStyle}
        backgroundStyle={{ backgroundColor: theme.screenColor }}
        handleIndicatorStyle={{ backgroundColor: theme.txtColor }}
        backdropComponent={BottomSheetBackdrop}
      >
        <View style={style.securityModalDeleteAcc}>
          <View style={style.modalTitleAlign}>
            <Text style={style.modalTitleStyle}>Deletar Conta</Text>
          </View>

          <View style={style.securityModalWarning}>
            <Text style={style.generalFont400}>
              Tem certeza de que deseja deletar sua conta? Isso removerá
              permanentemente todos os seus dados do nosso sistema. Você não
              poderá recuperar sua conta ou informações associadas a ela.
            </Text>
          </View>

          <View style={style.securityBaseButtonsAlign}>
            <View style={style.securityBaseButtonsRow}>
              <Pressable onPress={handleCloseInfoDeleteAcc}>
                <View style={style.securityButton}>
                  <Text style={style.defaultButtonText}>Cancelar</Text>
                </View>
              </Pressable>

              <Pressable onPress={deleteUserPress}>
                <View style={style.securityButton}>
                  <Text style={style.defaultButtonText}>Excluir Conta</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}
