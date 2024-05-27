import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const styleNotificacoes = StyleSheet.create({
  // margem do topo da tela

  container: {
    flex: 1,
    marginTop: height * 0.01,
  },

  // estilo do divider (linha que divide seções da tela)

  dividerMargin: {
    marginVertical: height * 0.025,
  },

  // estilo de texto

  notificationTitle: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
  },

  // alinhar icones, textos e switches

  alignIconText: {
    alignItems: "center",
    flexDirection: "row",
    gap: 7,
  },

  alignTitleSwitch: {
    marginVertical: height * 0.025,
    marginHorizontal: width * 0.025,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styleNotificacoes;
