import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styleFeedback = StyleSheet.create({
  // configurações de view geral

  container: {
    marginHorizontal: width * 0.05,
  },

  // style descrição

  descriptionStyle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
  },

  // alinhar botão que abre info sobre o feedback.

  alignInfoIcon: {
    flexDirection: "row",
    gap: width * 0.2,
  },

  // ========== styles das seções de feedback ==========

  // alinhar seção de feedback

  feedbackSectionAlign: {
    marginVertical: height * 0.025,
  },

  // style de titulo da seção

  feedbackSectionTitle: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
  },

  // estilo do input de titulo

  titleInputStyle: {
    marginVertical: height * 0.01,
    backgroundColor: "#ccc",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  // estilo do input de feedback

  feedbackInputStyle: {
    marginVertical: height * 0.01,
    backgroundColor: "#ccc",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  // alinhar botão de enviar feedback

  alignSendButton: {
    position: "absolute",
    marginTop: height * 0.653,
    marginHorizontal: width * 0.25,
  },
});

export default styleFeedback;
