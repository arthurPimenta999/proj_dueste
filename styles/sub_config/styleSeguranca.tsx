import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const styleSeguranca = StyleSheet.create({
  // configs universais de seção

  container: {
    flex: 1,
    marginHorizontal: width * 0.05,
  },
  titleText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
  },

  sectionAlign: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: height * 0.03,
  },

  sectionTitle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
  },

  sectionContentText2: {
    fontSize: 20,
    backgroundColor: "#dcdcdc",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 7,
  },

  sectionContentText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
    backgroundColor: "#dcdcdc",
    padding: 10,
    borderRadius: 7,
  },
  sectionContent: {
    backgroundColor: "#aaa",
  },

  iconAlign: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },

  // btn senha

  senhaButton: {
    backgroundColor: "#fcba03",
    borderRadius: 8,
    padding: 10,
  },
  sideText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
  },
  sideMargin: {
    marginHorizontal: width * 0.01,
  },

  // telefone verificado?

  telefoneButton: {
    backgroundColor: "#33b249",
    borderRadius: 8,
    padding: 10,
  },
});

export default styleSeguranca;
