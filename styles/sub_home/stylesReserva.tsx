import { StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const marginOS = Platform.OS === "android" ? height * 0.03 : height * 0.01;

const styleReserva = StyleSheet.create({
  // safe area
  safeArea: {
    flex: 1,
    marginHorizontal: width * 0.05,
  },
  //title
  titleAlign: {
    marginVertical: height * 0.025,
    marginHorizontal: width * 0.01,
  },
  titleFont: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 30,
  },
});

export default styleReserva;
