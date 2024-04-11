import { StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const marginTopOS = Platform.OS === "android" ? height * 0.04 : height * 0;

const stylePerfil = StyleSheet.create({
  // safe area view da tela do perfil não funciona direito no android.
  // função feita pra CASO o celular for android, aplicar esse estilo.
  // caso contrário, não aplicar. :)                         ~Stardust
  AndroidSafeArea: {
    paddingTop: marginTopOS,
  },
  // style da imagem placeholder da foto de perfil do usuário.
  userContentAlign: {
    alignItems: "center",
  },
  usernameStyle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
  },
  // fundo amarelo
  yellow: {
    backgroundColor: "#fcba03",
    paddingVertical: height * 0.02,
    marginTop: height * 0.03,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  // config global dos botões
  alignConfig: {
    marginHorizontal: width * 0.06,
    marginVertical: height * 0.02,
  },
  configSection: {
    backgroundColor: "#eee",
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

export default stylePerfil;
