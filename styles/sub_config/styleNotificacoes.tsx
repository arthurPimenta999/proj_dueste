import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const switchMarginVertical =
  Platform.OS === "android" ? height * 0 : height * 0.01;

const switchMarginLeft =
  Platform.OS === "android" ? height * 0.12 : height * 0.08;

const singleSwitchMarginLeft =
  Platform.OS === "android" ? height * 0.183 : height * 0.143;

const singleMarginTop =
  Platform.OS === "android" ? height * 0.017 : height * 0.007;

const styleNotificacoes = StyleSheet.create({
  dividerMargin: {
    marginVertical: height * 0.03,
  },
  alignSections: {
    marginVertical: height * 0.016,
  },
  alignIcon: {
    flexDirection: "row",
    gap: 5,
  },
  titleStyle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
  },
  switchAlign: {
    flexDirection: "row",
  },
  switchSpacing: {
    marginVertical: switchMarginVertical,
    marginLeft: switchMarginLeft,
  },

  // espaçamento individual de notificações gerais

  singleSwitchSpacing: {
    marginLeft: singleSwitchMarginLeft,
  },
  singleAlignIcon: {
    marginTop: singleMarginTop,
    flexDirection: "row",
    gap: 5,
  },
});

export default styleNotificacoes;
