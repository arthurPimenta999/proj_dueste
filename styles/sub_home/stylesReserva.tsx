import { StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const marginOS = Platform.OS === "android" ? height * 0.03 : height * 0.01;
const safeAreaAndroid = Platform.OS === "android" ? height * 0.05 : height * 0;

const styleReserva = StyleSheet.create({
  // safe area
  safeArea: {
    flex: 1,
    marginTop: safeAreaAndroid,
  },

  // style scroll view

  scrollStyle: {},

  // estilos de descrição pro datetime

  descriptionStyle: {
    marginBottom: height * 0.025,
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
  },

  // alinhar datetimepicker

  marginAlign: {
    marginHorizontal: width * 0.05,
  },

  // input de quantia de pessoas

  inputStyle: {
    backgroundColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: height * 0.025,
  },

  // btn reservar

  alignReservaBtn: {
    alignItems: "center",
    marginBottom: height * 0.025,
  },
});

export default styleReserva;
