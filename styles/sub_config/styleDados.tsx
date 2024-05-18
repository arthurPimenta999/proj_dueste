import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styleEditar = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: width * 0.05,
  },
  generalFont600: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 23,
  },
  generalFont400: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
  },

  // caixas com dados do usuário

  databoxAlign: {
    marginVertical: height * 0.01,
  },
  databoxStyle: {
    backgroundColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: height * 0.01,
    borderRadius: 15,
  },

  // alinhar botão de sair

  alignSair: {
    position: "absolute",
    marginHorizontal: width * 0.25,
    marginTop: height * 0.7,
  },
});

export default styleEditar;
