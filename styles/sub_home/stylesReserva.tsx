import { StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const marginOS = Platform.OS === "android" ? height * 0.03 : height * 0.01;

const styleReserva = StyleSheet.create({
  // safe area
  safeArea: {
    flex: 1,
  },
});

export default styleReserva;
