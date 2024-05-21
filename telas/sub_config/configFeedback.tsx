import React, { useMemo, useRef, useState } from "react";
import { View, Text, Pressable, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styleFeedback from "../../styles/sub_config/styleFeedback";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../apis/firebaseConfig";
import stylePadrao from "../../styles/stylesDefault";
import BottomSheet from "@gorhom/bottom-sheet";
import Foundation from "react-native-vector-icons/Foundation";

function TelaFeedback() {
  // configurações da modal de info sobre 2FA

  const refInfo = useRef(null);
  const snapPointInfo = useMemo(() => ["20%", "27%"], []);
  const handleOpenInfo = () => refInfo.current?.expand();

  // configurações que recebem conteúdo do feedback.

  const [nome, setNome] = useState("");
  const [title, setTitle] = useState("");
  const [feedback, setFeedback] = useState("");

  async function enviarFeedback() {
    if (title === "" || feedback === "" || nome === "") {
      alert("Preencha todos os campos antes de prosseguir.");
    } else {
      try {
        const docRef = await addDoc(collection(db, "pizzaFeedback"), {
          feedbackNome: nome,
          feedbackTitle: title,
          feedbackContent: feedback,
        });

        console.log("Document written with ID: ", docRef.id);

        alert("Feedback enviado com sucesso. Obrigado!");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={stylePadrao.generalTitleAlign}>
        <Text style={stylePadrao.generalTitleStyle}>Feedback</Text>
      </View>

      <View style={styleFeedback.container}>
        <View style={styleFeedback.alignInfoIcon}>
          <Text style={styleFeedback.descriptionStyle}>
            Escreva aqui seu feedback:
          </Text>

          <Pressable onPress={handleOpenInfo}>
            <Foundation name="info" size={25} />
          </Pressable>
        </View>

        <View style={styleFeedback.feedbackSectionAlign}>
          <View>
            <Text style={styleFeedback.feedbackSectionTitle}>Nome:</Text>
            <View style={styleFeedback.titleInputStyle}>
              <TextInput
                selectionColor={"#d69e04"}
                style={stylePadrao.generalFont400}
                autoCorrect={false}
                value={nome}
                onChangeText={(nome) => setNome(nome)}
              />
            </View>
          </View>

          <View>
            <Text style={styleFeedback.feedbackSectionTitle}>Título:</Text>
            <View style={styleFeedback.titleInputStyle}>
              <TextInput
                selectionColor={"#d69e04"}
                style={stylePadrao.generalFont400}
                autoCorrect={false}
                value={title}
                onChangeText={(title) => setTitle(title)}
              />
            </View>
          </View>

          <View>
            <Text style={styleFeedback.feedbackSectionTitle}>Conteúdo:</Text>
            <View style={styleFeedback.feedbackInputStyle}>
              <TextInput
                selectionColor={"#d69e04"}
                style={stylePadrao.generalFont400}
                autoCorrect={false}
                value={feedback}
                onChangeText={(feedback) => setFeedback(feedback)}
                multiline
              />
            </View>
          </View>

          {/* botão de enviar feedback */}

          <View style={styleFeedback.alignSendButton}>
            <View style={stylePadrao.alignBtn}>
              <Pressable style={stylePadrao.btn} onPress={enviarFeedback}>
                <Text
                  style={{
                    fontFamily: "Montserrat_400Regular",
                    fontSize: 20,
                    color: "#222",
                  }}
                >
                  Enviar
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      {/* 
        bottom sheet de informação de feedback.
        não é levada em consideração na renderização da
        tela ao abrir a mesma e só aparece quando o botão
        de info é pressionado.
      */}

      <BottomSheet
        ref={refInfo}
        index={-1}
        snapPoints={snapPointInfo}
        enablePanDownToClose={true}
        style={stylePadrao.modalStyle}
        backgroundStyle={{ backgroundColor: "#fafafa" }}
      >
        <View style={stylePadrao.modalContentAlign}>
          <View style={stylePadrao.modalTitleAlign}>
            <Text style={stylePadrao.modalTitleStyle}>Feedback</Text>
          </View>
          <Text style={stylePadrao.modalContentStyle}>
            Feedback é a informação fornecida a uma pessoa ou grupo sobre seu
            desempenho ou comportamento. Seu objetivo é ajudar na melhoria
            contínua, corrigindo falhas ou reforçando comportamentos positivos.
            Para ser eficaz, deve ser claro, específico e construtivo.
          </Text>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
}

export default TelaFeedback;
