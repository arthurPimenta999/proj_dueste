import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const marginOS = Platform.OS === "android" ? height * 0.03 : height * 0.01;
const marginTopOS = Platform.OS === "android" ? height * 0.04 : height * 0;
const marginScrollOS =
  Platform.OS === "android" ? height * 0.091 : height * 0.0091;

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
    width: width,
    height: height,
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

  // ajustes scrollView

  scrollStyle: {
    marginBottom: marginScrollOS,
  },

  //barra de pesquisa
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
  alignInput: {
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    height: height * 0.025,
    marginLeft: width * 0.02,
  },

  // modal

  container: {
    flex: 1,
    marginHorizontal: width * 0.1,
  },
  titleAlign: {
    marginVertical: height * 0.01,
    alignItems: "center",
  },
  title: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
  },
  contentAlign: {
    marginTop: height * 0.025,
    alignItems: "center",
  },

  // botões amarelos

  btn: {
    width: 160,
    height: 60,
    backgroundColor: "#fcba03",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  alignBtn: {
    flexDirection: "row",
    gap: 25,
  },

  // titulo geral das telas. canto superior esquerdo.

  generalTitleAlign: {
    marginVertical: height * 0.025,
    marginHorizontal: width * 0.05,
  },
  generalTitleStyle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 30,
  },
});

export default stylePadrao;
