import { StyleSheet, Dimensions } from "react-native";
import { useTheme } from "../components/theme";

export function styles() {
  const { width, height } = Dimensions.get("window");

  const { theme } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.screenColor,
    },
    generalFont600: {
      fontFamily: "Mont600",
      fontSize: 23,
      color: theme.txtColor,
    },
    generalFont400: {
      fontFamily: "Mont400",
      fontSize: 16,
      color: theme.txtColor,
    },
    topTitleAlign: {
      marginTop: height * 0.025,
      marginHorizontal: width * 0.05,
    },
    topTitleStyle: {
      fontFamily: "Mont600",
      fontSize: 35,
      color: theme.txtColor,
      paddingBottom: height * 0.025,
    },
    themeTxtColor: {
      color: theme.txtColor,
    },

    // ----- input geral ------

    defaultInputStyle: {
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: theme.bgColor,
      color: theme.txtColor,
      paddingVertical: 10,
      paddingHorizontal: 20,
      fontFamily: "Mont400",
      fontSize: 15,
      borderRadius: 15,
      marginTop: 5,
    },

    // estilos da modal bottom-sheet
    modalStyle: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 100,
      },
      shadowOpacity: 0.5,
      shadowRadius: 24,
      elevation: 10,
    },

    modalContentAlign: {
      marginTop: height * 0.0025,
      marginHorizontal: width * 0.08,
    },
    modalContentStyle: {
      fontFamily: "Mont400",
      fontSize: 16,
      color: theme.txtColor,
      textAlign: "center",
    },
    modalTitleAlign: {
      marginVertical: height * 0.015,
      alignItems: "center",
    },
    modalTitleStyle: {
      fontFamily: "Mont600",
      fontSize: 18,
      color: theme.txtColor,
    },

    // styles de botão padrão

    defaultButtonStyle: {
      backgroundColor: theme.yellow,
      borderRadius: 15,
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    defaultButtonInside: {
      alignItems: "center",
    },
    defaultButtonText: {
      fontFamily: "Mont600",
      fontSize: 18,
      color: theme.inverTxtColor,
    },

    //=========================================
    //==============TELA INICIAL===============
    //=========================================

    // imagem de fundo

    backgroundImageAlign: {
      position: "absolute",
      backgroundColor: theme.imageHomeBG,
    },
    backgroundImage: {
      width: width,
      height: height * 0.4,
      opacity: theme.imageTransparency,
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
      tintColor: theme.txtColor,
    },
    borderView: {
      flex: 1,
      paddingTop: 25,
      backgroundColor: theme.screenColor,
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
      backgroundColor: theme.red,
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
      backgroundColor: theme.yellow,
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
      backgroundColor: theme.cardBG,
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
      color: theme.txtColor,
    },
    precoAlign: {
      fontFamily: "Mont400",
      marginLeft: width * 0.07,
      color: theme.txtColor,
    },

    //=========================================
    //==============TELA CONFIGS===============
    //=========================================

    // alinhar seções a margem da tela
    settingsSectionAlign: {
      marginHorizontal: width * 0.05,
      marginVertical: height * 0.01,
    },
    // ----- titulo e subtitulo de seção -----
    settingsSectionTitle: {
      fontFamily: "Mont600",
      fontSize: 18,
      color: theme.txtColor,
    },
    settingsSectionSubtitle: {
      fontFamily: "Mont400",
      fontSize: 16,
      color: theme.txtColor,
    },

    // ----- estilos gerais de seção -----

    settingsSectionStyle: {
      marginVertical: height * 0.015,
      paddingHorizontal: width * 0.05,
      paddingVertical: height * 0.015,
      backgroundColor: theme.bgColor,
      borderRadius: 10,
    },

    // ========== estilos de sub-seção ==========

    settingsSubsectionAlign: {
      marginVertical: height * 0.015,
    },
    settingsSubsectionTitle: {
      fontFamily: "Mont600",
      fontSize: 16,
      color: theme.txtColor,
    },
    settingsSubsectionIconRow: {
      alignItems: "center",
      flexDirection: "row",
      gap: width * 0.025,
    },
    settingsSubsectionArrowRow: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },

    //=========================================
    //=============TELA CARDAPIO===============
    //=========================================

    // ----- BARRA DE PESQUISA -----

    searchBarAlign: {
      marginBottom: height * 0.025,
      marginHorizontal: width * 0.06,
    },
    searchBar: {
      backgroundColor: theme.bgColor,
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
    inputStyle: {
      flex: 1,
      fontFamily: "Mont400",
      fontSize: 18,
      height: height * 0.025,
      marginLeft: width * 0.02,
      color: theme.txtColor,
    },

    // ----- TITULOS DE SEÇÕES -----

    cardapioTitleAlign: {
      marginVertical: height * 0.025,
      marginHorizontal: width * 0.05,
    },
    cardapioTitleStyle: {
      fontFamily: "Mont600",
      fontSize: 20,
      color: theme.txtColor,
    },

    //=========================================
    //===============TELA LOGIN================
    //=========================================

    // ----- titulo ------

    loginTitleAlign: {
      alignItems: "center",
      marginVertical: height * 0.025,
    },
    loginTitleStyle: {
      fontFamily: "Mont600",
      fontSize: 25,
      color: theme.txtColor,
    },

    // ----- estilos de input email/senha -----

    loginInputAlign: {
      marginHorizontal: width * 0.05,
    },
    loginInputTitle: {
      fontFamily: "Mont600",
      fontSize: 15,
      marginTop: height * 0.025,
      color: theme.txtColor,
    },

    // ----- alinhar botão de entrar -----
    loginRowButton: {
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    loginAlignButton: {
      marginVertical: height * 0.025,
      marginHorizontal: width * 0.05,
    },

    // ----- esqueceu a senha? -----

    loginForgotStyle: {
      fontFamily: "Mont400",
      fontSize: 16,
      color: theme.txtColor,
    },

    // ======= SOCIAL MEDIA LOGIN =======

    loginSocialAlign: {
      flex: 1,
      justifyContent: "flex-end",
      marginHorizontal: width * 0.1,
      marginVertical: height * 0.015,
    },
    loginSocialText: {
      fontFamily: "Mont600",
      fontSize: 18,
    },
    loginSocialSpacing: {
      marginVertical: height * 0.015,
    },

    // ----- FACEBOOK LOGIN -----

    loginFBButton: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-evenly",
      backgroundColor: theme.facebook,
      padding: 15,
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

    // ----- GOOGLE LOGIN -----

    loginGoogleButton: {
      alignItems: "center",

      flexDirection: "row",
      justifyContent: "space-evenly",
      backgroundColor: theme.cardBG,
      padding: 15,
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

    //=========================================
    //=============TELA SEGURANÇA==============
    //=========================================

    securityAlign: {
      flex: 1,
      marginVertical: height * 0.025,
      marginHorizontal: width * 0.05,
    },

    // ----- caixa de texto (email verificado) -----

    securityDataboxStyle: {
      backgroundColor: theme.bgColor,
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginVertical: height * 0.01,
      borderRadius: 15,
    },
    securityDataboxButtonAlign: {
      alignItems: "center",
      marginHorizontal: width * 0.05,
    },
    securityButton: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.yellow,
      width: 150,
      height: 40,
      borderRadius: 10,
    },

    // ----- autenticação de dois fatores -----

    security2FAlign: {
      marginVertical: height * 0.025,
    },
    security2FIconRow: {
      flexDirection: "row",
      justifyContent: "space-between",
    },

    // ----- switch de 2FA -----

    security2FASwitchRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: height * 0.025,
    },

    // ----- botões na base da tela -----

    securityBaseButtonsAlign: {
      flex: 1,
      justifyContent: "flex-end",
      marginBottom: height * 0.01,
    },
    securityBaseButtonsRow: {
      flexDirection: "row",
      justifyContent: "space-around",
    },

    securityModalDeleteAcc: {
      marginVertical: height * 0.025,
      marginHorizontal: width * 0.05,
      backgroundColor: theme.screenColor,
    },
    securityModalWarning: {
      backgroundColor: theme.red,
      padding: 15,
      borderRadius: 15,
      marginBottom: 15,
    },

    //=========================================
    //==============TELA PERFIL================
    //=========================================

    // ----- alinhar subtítulo -----

    profileItensAlign: {
      marginVertical: height * 0.025,
      marginHorizontal: width * 0.05,
    },

    // ----- campo de email cadastrado -----

    profileEmailBubbleAlign: {
      marginHorizontal: width * 0.05,
    },
    profileEmailBubble: {
      backgroundColor: theme.bgColor,
      padding: 15,
      borderRadius: 10,
    },

    // ----- bubble de avaliar na playstore/appstore -----

    profileReviewAlign: {
      marginHorizontal: width * 0.05,
    },
    profileReviewRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    profileReviewStyle: {
      backgroundColor: theme.bgColor,
      padding: 20,
      borderRadius: 10,
    },

    // ----- alinhar botões da base da tela em linha -----

    profileButtonRow: {
      flexDirection: "row",
      justifyContent: "space-around",
    },

    // ----- botão de abrir modal de alterar email -----

    profileUpdateEmailAlign: {
      flex: 1,
      justifyContent: "flex-end",
      marginBottom: 25,
      marginHorizontal: width * 0.05,
    },

    // input de email novo

    profileNewEmailAlign: {
      marginHorizontal: width * 0.05,
      marginBottom: 25,
    },
    profileNewEmailStyle: {
      backgroundColor: theme.bgColor,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
    },
    profileNewEmailInput: {
      fontFamily: "Mont400",
      fontSize: 20,
      color: theme.txtColor,
    },

    //=========================================
    //=============TELA CARDAPIO===============
    //=========================================

    // ----- subtitulos ------

    reservaSubtitleAlign: {
      marginHorizontal: width * 0.05,
      marginTop: height * 0.025,
      marginBottom: height * 0.01,
    },
    reservaInfoIconAlign: {
      flexDirection: "row",
      justifyContent: "space-between",
    },

    // ----- inputs de dados -----

    reservaInputAlign: {
      marginHorizontal: width * 0.05,
    },
    reservaUserEmail: {
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: theme.bgColor,
      color: theme.txtColor,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 15,
      marginTop: 5,
    },

    // ----- datetimepicker -----

    reservaDTPAlign: {
      marginHorizontal: width * 0.05,
    },

    // ----- aviso de horário -----

    reservaHorarioAlign: {
      marginTop: height * 0.025,
      marginHorizontal: width * 0.05,
    },
    reservaHorarioStyle: {
      alignItems: "center",
      backgroundColor: theme.red,
      paddingVertical: 20,
      paddingHorizontal: 40,
      borderRadius: 10,
    },
    reservaHorarioRow: {
      alignItems: "center",
      flexDirection: "row",
      gap: 15,
    },

    // ----- botão de finalizar reserva -----

    reservaFinishButtonAlign: {
      alignItems: "center",
      marginVertical: height * 0.025,
    },

    //=========================================
    //===============TELA AJUDA================
    //=========================================

    // ----- accordion -----

    AjudaAccordionIcon: {
      flexDirection: "row",
      gap: 2,
    },
    AjudaAccordionTitle: {
      fontFamily: "Mont400",
      fontSize: 18,
      color: theme.txtColor,
    },
    AjudaAccordionContentAlign: {
      marginHorizontal: width * 0.05,
      marginBottom: height * 0.025,
    },
    AjudaAccordionContentText: {
      fontFamily: "Mont400",
      fontSize: 16,
      color: theme.txtColor,
    },
    AjudaAccordionContentBG: {
      backgroundColor: theme.screenColor,
    },

    //=========================================
    //==============TELA PERFIL================
    //=========================================

    notifyAlignIconText: {
      alignItems: "center",
      flexDirection: "row",
      gap: 7,
    },
    notifyAlignTitleSwitch: {
      marginVertical: height * 0.025,
      marginHorizontal: width * 0.025,
      flexDirection: "row",
      justifyContent: "space-between",
    },

    //=========================================
    //==============TELA FEEDBACK==============
    //=========================================

    // ----- alinhar tela -----

    feedbackContentAlign: {
      marginBottom: height * 0.025,
      marginHorizontal: width * 0.05,
    },

    // ----- alinhar em linha o título e o botão de info -----

    feedbackTitleIconRow: {
      flexDirection: "row",
      justifyContent: "space-between",
    },

    // ----- título dos inputs -----

    feedbackInputAlign: {
      marginHorizontal: width * 0.05,
    },
    feedbackInputTitle: {
      fontFamily: "Mont600",
      fontSize: 15,
      marginTop: height * 0.025,
      color: theme.txtColor,
    },

    // ----- alinhar botão de enviar feedback -----

    feedbackSendButtonAlign: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      marginBottom: 20,
    },
  });
}

export default styles;
