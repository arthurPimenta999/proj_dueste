import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const stylesPromocoes = StyleSheet.create({
  promoAlign: {
    marginTop: height * 0.01,
    alignItems: "center",
  },
  promoText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    textAlign: "center",
  },

  // button

  pressableAlign: {
    alignItems: "center",
    marginVertical: height * 0.025,
  },
  pressableStyle: {
    backgroundColor: "#fcba03",
    padding: 12,
    borderRadius: 15,
  },
  pressableText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
  },
});

export default stylesPromocoes;
