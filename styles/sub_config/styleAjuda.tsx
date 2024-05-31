import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styleAjuda = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleAlign: {
    marginVertical: height * 0.025,
    marginHorizontal: width * 0.05,
  },
  titleStyle: {
    fontFamily: "Mont600",
    fontSize: 30,
  },

  // accordion

  accordionIcon: {
    flexDirection: "row",
    gap: 2,
  },

  accordionTitle: {
    fontFamily: "Mont400",
    fontSize: 18,
  },

  // accordion content

  accordionContentAlign: {
    marginHorizontal: width * 0.05,
    marginBottom: height * 0.025,
  },
  accordionContentText: {
    fontFamily: "Mont400",
    fontSize: 16,
  },
  accordionContentBG: {
    backgroundColor: "#fff",
  },
});

export default styleAjuda;
