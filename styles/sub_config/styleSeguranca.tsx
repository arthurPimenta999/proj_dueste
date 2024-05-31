import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const styleSeguranca = StyleSheet.create({
  // configs universais

  container: {
    marginHorizontal: width * 0.05,
  },
  generalFont600: {
    fontFamily: "Mont600",
    fontSize: 23,
  },
  generalFont400: {
    fontFamily: "Mont400",
    fontSize: 16,
  },

  // campo com info do usuário.

  databoxStyle: {
    backgroundColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: height * 0.01,
    borderRadius: 15,
  },

  // botão pra cadastrar telefone

  telefoneBtnAlign: {
    marginTop: height * 0.01,
    alignItems: "center",
  },
  telefoneBtnStyle: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: "#fcba04",
  },
  telefoneBtnFont: {
    fontFamily: "Mont400",
    fontSize: 15,
  },

  // icone de info de autenticação

  authIconAlign: {
    flexDirection: "row",
    gap: width * 0.35,
    alignItems: "center",
  },

  // alinhar margem do conteudo da modal de info.

  modalContentAlign: {
    marginTop: height * 0.0025,
    marginHorizontal: width * 0.08,
  },
  modalContentStyle: {
    fontFamily: "Mont400",
    fontSize: 16,
    textAlign: "center",
  },
  modalTitleAlign: {
    marginBottom: height * 0.01,
    alignItems: "center",
  },
  modalTitleStyle: {
    fontFamily: "Mont600",
    fontSize: 18,
  },

  // switch 2FA

  switchRow: {
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
    gap: width * 0.3,
  },
  switchAlign: {
    marginHorizontal: width * 0.05,
  },

  // alihar botões de excluir conta e alterar senha

  alignSecurityBtns: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  bottomSecurityBtns: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: height * 0.025,
  },
});

export default styleSeguranca;
