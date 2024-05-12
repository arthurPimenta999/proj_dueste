import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styleEditar = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: width * 0.05,
  },
  generalFont600: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 30,
  },
  generalFont400: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
  },
});

export default styleEditar;
