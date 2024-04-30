import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const styleSeguranca = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: width * 0.07,
  },
});

export default styleSeguranca;
