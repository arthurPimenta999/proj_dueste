import { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  // styles gerais
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // styles de botão padrão

  defaultButtonStyle: {
    backgroundColor: "#fcba04",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  defaultButtonInside: {
    alignItems: "center",
  },

  //=========================================
  //==============TELA INICIAL===============
  //=========================================

  // imagem de fundo

  backgroundImageAlign: {
    position: "absolute",
    backgroundColor: "#fff",
  },

  backgroundImage: {
    width: width,
    height: height * 0.4,
    opacity: 0.75,
  },

  // alinhar texto inicial de boas vindas

  alignGreetings: {
    marginTop: height * 0.08,
    marginBottom: height * 0.025,
    marginHorizontal: width * 0.1,
  },

  // linha de botões de funções do app.

  alignButtonRow: {
    marginVertical: height * 0.01,
    flexDirection: "row",
    gap: 15,
  },

  // --- resto da tela, depois do cumprimento e da imagem de fundo

  // --- logo Dueste ---

  alignLogo: {
    alignItems: "center",
    marginVertical: 10,
  },

  logoStyle: {
    objectFit: "contain",
    width: 300,
    height: 100,
  },

  borderView: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  // --- banner/carousel de imagens ---

  bannerView: {
    flex: 1,
    justifyContent: "center",
  },
  child: {
    height: 250,
  },

  // --- balão de endereço da pizzaria ---

  pinBGstyle: {
    alignItems: "center",
    justifyContent: "center",
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

  // botões circulares.
  roundButtonAlign: {
    alignItems: "center",
    marginVertical: 20,
  },

  roundButtonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  roundButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#fcba04",
    padding: 15,
    width: 60,
    height: 60,
  },

  // -- alinhar cartões e texto de sugestões

  alignSuggestion: {
    marginHorizontal: width * 0.05,
  },

  // ----- IMPORTANTE: ESTILO DOS CARTÕES ------

  pizzaTitleAlign: {
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.02,
  },
  pizzaTitleStyle: {
    fontFamily: "Mont600",
    fontSize: 20,
  },
  styleCard: {
    marginBottom: height * 0.03,
    marginHorizontal: width * 0.05,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  styleImage: {
    width: width * 0.3,
    height: height * 0.15,
    borderRadius: 25,
  },
  pizzaTitle: {
    fontFamily: "Mont600",
    fontSize: 18,
    marginLeft: width * 0.07,
    marginVertical: height * 0.003,
    maxWidth: "70%",
  },
  precoAlign: {
    fontFamily: "Mont400",
    marginLeft: width * 0.07,
  },

  //=========================================
  //==============TELA CONFIGS===============
  //=========================================
});

export default styles;
