import React, { useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import styles from "../../styles/styles";
import { Divider } from "react-native-paper";
import { useTheme } from "../../components/theme";
import Foundation from "react-native-vector-icons/Foundation";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../apis/firebaseConfig";

export default function TelaFeedback() {
  const style = styles();
  const { height } = Dimensions.get("window");
  const { theme } = useTheme();

  // ----- funções da modal de informações de feedback -----

  const refFeedback = useRef(null);
  const snapPointFeedback = useMemo(() => ["25%", "30%"], []);
  const handleOpenFeedback = () => refFeedback.current?.expand();

  // ----- useStates dos inputs -----

  const [nome, setNome] = useState("");
  const [titulo, setTitulo] = useState("");
  const [content, setContent] = useState("");

  // ----- função de enviar feedback -----

  const userEmail = auth.currentUser?.email;

  async function enviarFeedback() {
    if (titulo === "" || content === "" || nome === "") {
      alert("Preencha todos os campos antes de prosseguir.");
    } else {
      try {
        const docRef = await addDoc(collection(db, "pizzaFeedback"), {
          feedbackNome: nome,
          feedbackTitle: titulo,
          feedbackContent: content,
          feedbackEmail: userEmail,
        });

        console.log("Document written with ID: ", docRef.id);

        alert("Feedback enviado com sucesso. Obrigado!");

        setNome("");
        setTitulo("");
        setContent("");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <GestureHandlerRootView
        style={[style.container, { paddingTop: height * 0.04 }]}
      >
        <View style={style.topTitleAlign}>
          <View style={style.feedbackTitleIconRow}>
            <Text style={style.topTitleStyle}>Feedback</Text>

            <Pressable onPress={handleOpenFeedback}>
              <Foundation
                name="info"
                size={30}
                style={{ marginTop: height * 0.01 }}
                color={theme.txtColor}
              />
            </Pressable>
          </View>
        </View>

        <Divider />

        {/* ----- view inteira ----- */}

        <View style={style.feedbackContentAlign}>
          {/* input de nome */}

          <View>
            <Text style={style.loginInputTitle}>Nome</Text>
            <TextInput
              keyboardType="email-address"
              spellCheck={false}
              style={style.defaultInputStyle}
              onChangeText={(text) => setNome(text)}
              value={nome}
              placeholder="Digite seu nome"
              placeholderTextColor={theme.placeholderColor}
              selectionColor={"#d69e04"}
              autoCapitalize="none"
            />
          </View>

          {/* input de titulo */}

          <View>
            <Text style={style.loginInputTitle}>Título</Text>
            <TextInput
              keyboardType="email-address"
              spellCheck={false}
              style={style.defaultInputStyle}
              onChangeText={(text) => setTitulo(text)}
              value={titulo}
              placeholder="Digite o título do feedback"
              placeholderTextColor={theme.placeholderColor}
              selectionColor={"#d69e04"}
              autoCapitalize="none"
            />
          </View>

          {/* input de conteúdo do feedback */}

          <View>
            <Text style={style.loginInputTitle}>Conteúdo</Text>
            <TextInput
              keyboardType="email-address"
              spellCheck={false}
              style={style.defaultInputStyle}
              onChangeText={(text) => setContent(text)}
              value={content}
              placeholder="Digite o assunto do feedback"
              placeholderTextColor={theme.placeholderColor}
              selectionColor={"#d69e04"}
              autoCapitalize="none"
              multiline
            />
          </View>
        </View>

        <View style={style.feedbackSendButtonAlign}>
          <Pressable style={style.defaultButtonStyle} onPress={enviarFeedback}>
            <View style={style.defaultButtonInside}></View>
            <Text style={style.defaultButtonText}>   Enviar   </Text>
          </Pressable>
        </View>

        <BottomSheet
          ref={refFeedback}
          index={-1}
          snapPoints={snapPointFeedback}
          enablePanDownToClose={true}
          style={style.modalStyle}
          backgroundStyle={{ backgroundColor: theme.screenColor }}
          handleIndicatorStyle={{ backgroundColor: theme.txtColor }}
          backdropComponent={BottomSheetBackdrop}
        >
          <View style={style.modalContentAlign}>
            <View style={style.modalTitleAlign}>
              <Text style={style.modalTitleStyle}>Feedback</Text>
            </View>
            <Text style={style.modalContentStyle}>
              Feedback é a informação fornecida a uma pessoa ou grupo sobre seu
              desempenho ou comportamento. Seu objetivo é ajudar na melhoria
              contínua, corrigindo falhas ou reforçando comportamentos
              positivos. Para ser eficaz, deve ser claro, específico e
              construtivo.
            </Text>
          </View>
        </BottomSheet>
      </GestureHandlerRootView>
    </TouchableWithoutFeedback>
  );
}
