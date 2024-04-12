import { StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const marginOS = Platform.OS === "android" ? height * 0.03 : height * 0.01;
const marginTopOS = Platform.OS === "android" ? height * 0.04 : height * 0;

const stylePadrao = StyleSheet.create({
  // safe area view da tela do perfil não funciona direito no android.
  // função feita pra CASO o celular for android, aplicar esse estilo.
  // caso contrário, não aplicar. :)                         ~Stardust
  AndroidSafeArea: {
    paddingTop: marginTopOS,
  },

  styleHome: {
    backgroundColor: "#fff",
    color: "#fff",
    width: "100%",
    height: "100%",
    borderWidth: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  // titulo da pagina

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
});

export default stylePadrao;
