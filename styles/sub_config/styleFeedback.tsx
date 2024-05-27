import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styleFeedback = StyleSheet.create({
  // configurações de view geral

  container: {
    flex: 1,
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
    justifyContent: "space-between",
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

  textInputLine: {
    marginVertical: height * 0.01,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#ededed",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 4,
  },

  textInputFeedback: {
    height: height * 0.35,
    marginVertical: height * 0.01,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#ededed",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 4,
  },

  // botão de enviar feedback

  sendButtonRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  sendButtonAlign: {
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: height * 0.05,
  },
});

export default styleFeedback;
