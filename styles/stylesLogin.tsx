import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styleLogin = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: width * 0.07,
    marginTop: height * 0.025,
  },

  // titulo

  titleStyle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 30,
  },

  // TextInputs

  inputTitle: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 15,
    marginTop: height * 0.025,
  },

  inputStyle: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#ddd",
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
    borderRadius: 15,
    marginTop: 5,
  },

  // botões de login/criar conta

  alignBtnRow: {
    marginVertical: height * 0.025,
  },

  // login por redes sociais
  socialAlign: {
    marginTop: height * 0.23,
  },

  loginTextWhite: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
    color: "#fff",
  },
  loginTextBlack: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
    color: "#000",
  },

  // facebook

  facebookButton: {
    backgroundColor: "#1877F2",
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 20,
    marginBottom: height * 0.025,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  // google

  googleButton: {
    backgroundColor: "#fff",
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 20,
    marginBottom: height * 0.025,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});

export default styleLogin;
