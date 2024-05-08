import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styleSobre = StyleSheet.create({
  sobreText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    textAlign: "center",
  },
});

export default styleSobre;
