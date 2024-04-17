import { StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const marginTopBtn = Platform.OS === "android" ? height * 0.03 : height * 0.01;

const styleHome = StyleSheet.create({
  //amarelo kkkkkkk
  styleYellow: {
    height: height * 0.2,
  },

  // ===== style geral da tela =====

  styleCurve: {
    width: width * 1,
    height: height * 4,
  },

  // ===== botões delivery/reserva =====

  btn: {
    width: 160,
    height: 60,
    backgroundColor: "#fcba03",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  alignBtn: {
    flexDirection: "row",
    gap: 25,
  },
  alignBtnRow: {
    marginHorizontal: width * 0.06,
    marginTop: marginTopBtn,
  },

  //===== banner =====

  bannerStyle: {
    marginTop: 40,
  },
  container: {
    backgroundColor: "white",
  },
  child: {
    width,
    height: 250,
    backgroundColor: "#eee",
  },
  text: {
    fontSize: width * 0.5,
    textAlign: "center",
  },

  //fix linha branca iOS

  fixCinza: {
    backgroundColor: "#fcba03",
  },

  //alinhamento logo

  logoAlign: {
    alignItems: "center",
    marginTop: 25,
  },
  logoStyle: {
    width: 300,
    height: 100,
  },

  //balão de endereço

  pinStyle: {
    marginTop: 10,
    marginLeft: 15,
  },
  localAlign: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 17,
  },
  pinBGstyle: {
    marginTop: 15,
    marginHorizontal: 15,
    backgroundColor: "#d4473d",
    borderRadius: 50,
    height: height * 0.05,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  //aberto/fechado
  restAberto: {
    backgroundColor: "#7cff75",
  },
  restFechado: {
    backgroundColor: "#b52828",
  },

  //fileira de botões abaixo do endereço

  btnRowAlign2: {
    marginHorizontal: width * 0.09,
    marginTop: width * 0.04,
    flexDirection: "row",
    gap: 25,
    justifyContent: "center",
  },
  pressBorder: {
    borderRadius: 50,
    backgroundColor: "#fcba03",
    padding: 20,
  },
  txtBtnAlign: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 55,
  },
});

export default styleHome;
