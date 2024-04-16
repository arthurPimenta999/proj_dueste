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
    fontFamily: "Montserrat_600SemiBold",
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
    marginVertical: height * 0.01,
  },
  pizzaTitleStyle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
  },
  cardsAlign: {
    marginVertical: height * 0.01,
  },

  styleCard: {
    width: width * 0.4,
    height: height * 0.3,
  },

  iconSpace: {
    flexDirection: "row",
    gap: width * 0.4,
    justifyContent: "center",
  },

  cardTitle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
  },
  cardRow: {
    justifyContent: "center",
    flexDirection: "row",
    gap: width * 0.08,
    marginBottom: height * 0.04,
  },
  styleCover: {
    width: width * 0.4,
    height: height * 0.2,
  },
});

export default styleCardapio;
