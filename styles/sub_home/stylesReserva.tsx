import { StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const marginOS = Platform.OS === "android" ? height * 0.03 : height * 0.01;

const styleReserva = StyleSheet.create({
  // tela de aviso  de horário
  styleAviso: {
    backgroundColor: "#e82e38",
    marginHorizontal: width * 0.05,
    padding: 15,
    borderRadius: 25,
  },
  alignContentAviso: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  textAviso: {
    flex: 1,
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    color: "#fff",
  },
});

export default styleReserva;
