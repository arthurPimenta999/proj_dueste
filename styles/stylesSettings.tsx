import { StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const marginOS = Platform.OS === "android" ? height * 0.03 : height * 0.01;
const marginScrollOS =
  Platform.OS === "android" ? height * 0.091 : height * 0.0091;

const styleSettings = StyleSheet.create({
  //título
  textTopAlign: {
    alignItems: "center",
    marginVertical: marginOS,
  },

  textTop: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
  },

  //botão pra voltar pra tela index

  backBtn: {
    width: width * 0.09,
    height: width * 0.09,
    borderRadius: 50,
    borderColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: height * 0.06,
    marginLeft: width * 0.06,
    backgroundColor: "#ccc",
  },

  //barra de pesquisa da tela de configurações
  searchBarAlign: {
    marginHorizontal: width * 0.06,
    marginVertical: height * 0.03,
  },
  searchBar: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  //styles global de título de configs

  configTitleAlign: {
    marginLeft: width * 0.06,
    marginTop: height * 0.03,
  },
  configTitle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
    marginVertical: height * 0.005,
  },
  alignConfig: {
    marginHorizontal: width * 0.06,
    marginVertical: height * 0.02,
  },
  configSection: {
    backgroundColor: "#ddd",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  pressableSpace: {
    marginVertical: height * 0.03,
    marginLeft: width * 0.05,
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
});

export default styleSettings;
