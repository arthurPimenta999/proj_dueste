import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const stylesHistorico = StyleSheet.create({
  historicoAlign: {
    marginTop: height * 0.01,
    alignItems: "center",
  },
  historicoText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    textAlign: "center",
  },
});

export default stylesHistorico;
