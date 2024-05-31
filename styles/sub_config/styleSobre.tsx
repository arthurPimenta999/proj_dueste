import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styleSobre = StyleSheet.create({
  sobreText: {
    fontFamily: "Mont400",
    fontSize: 18,
    textAlign: "center",
  },
});

export default styleSobre;
