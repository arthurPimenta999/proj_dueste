import { StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const marginOS = Platform.OS === "android" ? height * 0.03 : height * 0.01;

const styleCardapio = StyleSheet.create({
  //botão pra voltar pra tela index

  backBtn: {
    width: width * 0.09,
    height: width * 0.09,
    borderRadius: 50,
    borderColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: height * 0.06,
    marginLeft: width * 0.06,
    backgroundColor: "#ccc",
  },

  textTop: {
    fontFamily: "Mont600",
    fontSize: 20,
  },

  // estilo amarelo
  textTopAlign: {
    alignItems: "center",
    marginVertical: marginOS,
  },

  // estilos dos cartões

  pizzaTitleAlign: {
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.02,
  },
  pizzaTitleStyle: {
    fontFamily: "Mont600",
    fontSize: 20,
  },
  styleCard: {
    marginBottom: height * 0.03,
    marginHorizontal: width * 0.05,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  styleImage: {
    width: width * 0.3,
    height: height * 0.15,
    borderRadius: 25,
  },
  pizzaTitle: {
    fontFamily: "Mont600",
    fontSize: 18,
    marginLeft: width * 0.07,
    marginVertical: height * 0.003,
    maxWidth: "70%",
  },
  precoAlign: {
    fontFamily: "Mont400",
    marginLeft: width * 0.07,
  },
});

export default styleCardapio;
