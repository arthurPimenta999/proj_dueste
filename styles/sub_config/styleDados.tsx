import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const styleEditar = StyleSheet.create({
  container: {
    marginHorizontal: width * 0.07,
    flex: 1,
  },
  optionAlign: {
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
  },
  optionTitle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
  },
  nomeStyle: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
  },
  pencilAlign: {
    marginLeft: width * 0.2,
  },

  // facebook

  facebookStyle: {
    marginVertical: height * 0.025,
    backgroundColor: "#1877F2",
    borderRadius: 15,
  },

  alignIconRow: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  FBicon: {
    color: "#fff",
    paddingVertical: "5%",
    paddingLeft: "5%",
  },
  connectText: {
    color: "#fff",
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
    maxWidth: "80%",
  },

  // recomendações

  recomendaAlign: {
    flexDirection: "row",
  },
  recomendaText: {
    fontFamily: "Montserrat_400Regular",
    maxWidth: "90%",
  },
});

export default styleEditar;
