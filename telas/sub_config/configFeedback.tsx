import React, { useMemo, useRef, useState } from "react";
import { View, Text, Pressable, TextInput, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styleFeedback from "../../styles/sub_config/styleFeedback";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../apis/firebaseConfig";
import stylePadrao from "../../styles/stylesDefault";
import BottomSheet from "@gorhom/bottom-sheet";
import Foundation from "react-native-vector-icons/Foundation";
import MI from "react-native-vector-icons/MaterialIcons";

function TelaFeedback() {
  const { width, height } = Dimensions.get("window");

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

        <View style={{ marginTop: 15 }}>
          <View>
            <Text style={styleFeedback.feedbackSectionTitle}>Nome:</Text>
          </View>

          <View style={styleFeedback.textInputLine}>
            <TextInput
              style={stylePadrao.generalFont400}
              selectionColor={"#d69e04"}
              autoCorrect={false}
              value={nome}
              onChangeText={(nome) => setNome(nome)}
            />
          </View>
        </View>

        <View>
          <View>
            <Text style={styleFeedback.feedbackSectionTitle}>Título:</Text>
          </View>

          <View style={styleFeedback.textInputLine}>
            <TextInput
              style={stylePadrao.generalFont400}
              selectionColor={"#d69e04"}
              autoCorrect={false}
              value={title}
              onChangeText={(title) => setTitle(title)}
            />
          </View>
        </View>

        <View>
          <View>
            <Text style={styleFeedback.feedbackSectionTitle}>Feedback:</Text>
          </View>

          <View style={styleFeedback.textInputFeedback}>
            <TextInput
              style={stylePadrao.generalFont400}
              selectionColor={"#d69e04"}
              autoCorrect={false}
              value={feedback}
              onChangeText={(feedback) => setFeedback(feedback)}
              multiline
            />
          </View>
        </View>
      </View>

      <View style={styleFeedback.sendButtonAlign}>
        <Pressable style={stylePadrao.btn} onPress={enviarFeedback}>
          <View style={styleFeedback.sendButtonRow}>
            <MI name="arrow-upward" size={18} />
            <Text style={[stylePadrao.generalFont400, { fontSize: 20 }]}>
              Enviar
            </Text>
          </View>
        </Pressable>
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
