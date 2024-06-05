import React, { useState, useEffect, useMemo, useRef } from "react";
import { View, Text, Pressable, ScrollView, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "../styles/styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { User, onAuthStateChanged } from "firebase/auth";
import { Switch } from "react-native-switch";
import { useTheme } from "../components/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import de telas
import TelaFeedback from "./sub_config/configFeedback";
import TelaAjuda from "./sub_config/configAjuda";
import EditarDados from "./sub_config/configDados";
import { auth } from "../apis/firebaseConfig";
import EditarSeguranca from "./sub_config/configSeguranca";
import TelaNotificacoes from "./sub_config/configNotificacoes";
import TelaHistorico from "./sub_config/configHistorico";
import TelaSobre from "./sub_config/configSobre";

// import de icones

import MCI from "react-native-vector-icons/MaterialCommunityIcons"; //  Material Community Icons
import Ionicon from "react-native-vector-icons/Ionicons"; // Ionicons
import MI from "react-native-vector-icons/MaterialIcons";
import { Divider } from "react-native-paper";
import { TelaLogin } from "./telaLogin";

function TelaConfigs() {
  const { height } = Dimensions.get("window");

  const navigation = useNavigation();

  const { theme, toggleTheme } = useTheme(theme === "light");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const style = styles();

  if (theme === "dark") {
    setIsDarkMode(true);
  } else if (theme === "light") {
    setIsDarkMode(false);
  }

  useEffect(() => {
    const loadDarkModeState = async () => {
      try {
        const darkModeState = await AsyncStorage.getItem("darkModeState");
        if (darkModeState !== null) {
          setIsDarkMode(JSON.parse(darkModeState));
        }
      } catch (error) {
        console.error(
          "Erro ao pegar estado armazenado do modo escuro: ",
          error
        );
      }
    };

    loadDarkModeState();
  }, []);

  const handleChange = async () => {
    try {
      const newDarkModeState = !isDarkMode;
      setIsDarkMode(newDarkModeState);
      await AsyncStorage.setItem(
        "darkModeState",
        JSON.stringify(newDarkModeState)
      );
    } catch (error) {
      console.error("Erro ao pegar estado armazenado do modo escuro: ", error);
    }

    toggleTheme();
  };
  // =============== MODALS ===============

  //configurações da modal ///segurança

  const refNotificacoes = useRef(null);
  const snapPointNotificacoes = useMemo(() => ["40%", "60%"], []);
  const handleOpenNotificacoes = () => refNotificacoes.current?.expand();

  //configurações da modal ///promoções

  const refPromocoes = useRef(null);
  const snapPointPromocoes = useMemo(() => ["35%", "50%"], []);
  const handleOpenPromocoes = () => refPromocoes.current?.expand();
  const handleClosePromocoes = () => refPromocoes.current?.close();

  //configurações da modal ///histórico

  const refHistorico = useRef(null);
  const snapPointHistorico = useMemo(() => ["35%", "60%"], []);
  const handleOpenHistorico = () => refHistorico.current?.expand();

  //configurações da modal ///sobre

  const refSobre = useRef(null);
  const snapPointSobre = useMemo(() => ["35%", "45%"], []);
  const handleOpenSobre = () => refSobre.current?.expand();

  // =============== FIM DAS MODALS ===============

  return (
    <GestureHandlerRootView
      style={[style.container, { paddingTop: height * 0.04 }]}
    >
      <View>
        <View style={style.topTitleAlign}>
          <Text style={style.topTitleStyle}>Configurações</Text>
        </View>

        <Divider />
      </View>

      {/* view inteira */}

      <ScrollView style={{ flex: 1, paddingVertical: 10 }}>
        {/* ===== SEÇÃO DE CONFIGURAÇÕES - CONTA ===== */}
        <View style={style.settingsSectionAlign}>
          {/* --- titulo e subtitulo --- */}
          <Text style={style.settingsSectionTitle}>Conta</Text>
          <Text style={style.settingsSectionSubtitle}>
            Informações de login e dados da conta.
          </Text>

          {/* seção de itens clicáveis */}
          <View style={style.settingsSectionStyle}>
            {/* subseção: perfil */}
            <View style={style.settingsSubsectionAlign}>
              <Pressable onPress={() => navigation.navigate("User")}>
                {/* view que containeriza (icone+texto) e seta de seção. */}
                <View style={style.settingsSubsectionArrowRow}>
                  <View>
                    {/* view que containeriza icone e texto de seção */}
                    <View style={style.settingsSubsectionIconRow}>
                      <MCI
                        name="account-circle"
                        size={18}
                        color={theme.txtColor}
                      />
                      <Text style={style.settingsSubsectionTitle}>Perfil</Text>
                    </View>
                  </View>
                  <MCI name="chevron-right" size={25} color={theme.txtColor} />
                </View>
              </Pressable>
            </View>

            {/* subseção: segurança */}
            <View style={style.settingsSubsectionAlign}>
              <Pressable onPress={() => navigation.navigate("Seguranca")}>
                {/* view que containeriza (icone+texto) e seta de seção. */}
                <View style={style.settingsSubsectionArrowRow}>
                  <View>
                    {/* view que containeriza icone e texto de seção */}
                    <View style={style.settingsSubsectionIconRow}>
                      <MCI name="security" size={18} color={theme.txtColor} />
                      <Text style={style.settingsSubsectionTitle}>
                        Segurança
                      </Text>
                    </View>
                  </View>
                  <MCI name="chevron-right" size={25} color={theme.txtColor} />
                </View>
              </Pressable>
            </View>

            {/* subseção: notificações */}
            <View style={style.settingsSubsectionAlign}>
              <Pressable onPress={handleOpenNotificacoes}>
                {/* view que containeriza (icone+texto) e seta de seção. */}
                <View style={style.settingsSubsectionArrowRow}>
                  <View>
                    {/* view que containeriza icone e texto de seção */}
                    <View style={style.settingsSubsectionIconRow}>
                      <MCI name="bell" size={18} color={theme.txtColor} />
                      <Text style={style.settingsSubsectionTitle}>
                        Notificações
                      </Text>
                    </View>
                  </View>
                  <MCI name="chevron-right" size={25} color={theme.txtColor} />
                </View>
              </Pressable>
            </View>
          </View>
        </View>

        {/* ===== SEÇÃO DE CONFIGURAÇÕES - PREFERÊNCIAS ===== */}
        <View style={style.settingsSectionAlign}>
          {/* --- titulo e subtitulo --- */}
          <Text style={style.settingsSectionTitle}>Preferências</Text>
          <Text style={style.settingsSectionSubtitle}>
            Configurações do aplicativo.
          </Text>

          {/* seção de itens clicáveis */}
          <View style={style.settingsSectionStyle}>
            {/* subseção: modo escuro */}
            <View style={style.settingsSubsectionAlign}>
              {/* view que containeriza (icone+texto) e seta de seção. */}
              <View style={style.settingsSubsectionArrowRow}>
                <View>
                  {/* view que containeriza icone e texto de seção */}
                  <View style={style.settingsSubsectionIconRow}>
                    <MCI
                      name="theme-light-dark"
                      size={18}
                      color={theme.txtColor}
                    />
                    <Text style={style.settingsSubsectionTitle}>
                      Modo Escuro
                    </Text>
                  </View>
                </View>
                <Switch
                  value={isDarkMode}
                  onValueChange={handleChange}
                  circleSize={30}
                  barHeight={30}
                  circleBorderWidth={2}
                  activeText={""}
                  inActiveText={""}
                  backgroundActive={"#4caf50"}
                  renderInsideCircle={() => (
                    <Ionicon name={theme.themeIcon} size={18} color="#555" />
                  )}
                />
              </View>
            </View>

            {/* subseção: promoções */}
            <View style={style.settingsSubsectionAlign}>
              <Pressable onPress={handleOpenPromocoes}>
                {/* view que containeriza (icone+texto) e seta de seção. */}
                <View style={style.settingsSubsectionArrowRow}>
                  <View>
                    {/* view que containeriza icone e texto de seção */}
                    <View style={style.settingsSubsectionIconRow}>
                      <MCI name="sale" size={18} color={theme.txtColor} />
                      <Text style={style.settingsSubsectionTitle}>
                        Promoções
                      </Text>
                    </View>
                  </View>
                  <MCI name="chevron-right" size={25} color={theme.txtColor} />
                </View>
              </Pressable>
            </View>

            {/* subseção: histórico */}
            <View style={style.settingsSubsectionAlign}>
              <Pressable onPress={handleOpenHistorico}>
                {/* view que containeriza (icone+texto) e seta de seção. */}
                <View style={style.settingsSubsectionArrowRow}>
                  <View>
                    {/* view que containeriza icone e texto de seção */}
                    <View style={style.settingsSubsectionIconRow}>
                      <MCI name="history" size={18} color={theme.txtColor} />
                      <Text style={style.settingsSubsectionTitle}>
                        Histórico
                      </Text>
                    </View>
                  </View>
                  <MCI name="chevron-right" size={25} color={theme.txtColor} />
                </View>
              </Pressable>
            </View>
          </View>
        </View>

        {/* ===== SEÇÃO DE CONFIGURAÇÕES - AJUDA E FEEDBACK ===== */}
        <View style={style.settingsSectionAlign}>
          {/* --- titulo e subtitulo --- */}
          <Text style={style.settingsSectionTitle}>Ajuda e Feedback</Text>
          <Text style={style.settingsSectionSubtitle}>
            Suporte e perguntas frequentes.
          </Text>

          {/* seção de itens clicáveis */}
          <View style={style.settingsSectionStyle}>
            {/* subseção: ajuda */}
            <View style={style.settingsSubsectionAlign}>
              <Pressable onPress={() => navigation.navigate("Ajuda")}>
                {/* view que containeriza (icone+texto) e seta de seção. */}
                <View style={style.settingsSubsectionArrowRow}>
                  <View>
                    {/* view que containeriza icone e texto de seção */}
                    <View style={style.settingsSubsectionIconRow}>
                      <MCI
                        name="help-circle"
                        size={18}
                        color={theme.txtColor}
                      />
                      <Text style={style.settingsSubsectionTitle}>Ajuda</Text>
                    </View>
                  </View>
                  <MCI name="chevron-right" size={25} color={theme.txtColor} />
                </View>
              </Pressable>
            </View>

            {/* subseção: segurança */}
            <View style={style.settingsSubsectionAlign}>
              <Pressable onPress={() => navigation.navigate("Feedback")}>
                {/* view que containeriza (icone+texto) e seta de seção. */}
                <View style={style.settingsSubsectionArrowRow}>
                  <View>
                    {/* view que containeriza icone e texto de seção */}
                    <View style={style.settingsSubsectionIconRow}>
                      <MI name="feedback" size={18} color={theme.txtColor} />
                      <Text style={style.settingsSubsectionTitle}>
                        Feedback
                      </Text>
                    </View>
                  </View>
                  <MCI name="chevron-right" size={25} color={theme.txtColor} />
                </View>
              </Pressable>
            </View>

            {/* subseção: notificações */}
            <View style={style.settingsSubsectionAlign}>
              <Pressable onPress={handleOpenSobre}>
                {/* view que containeriza (icone+texto) e seta de seção. */}
                <View style={style.settingsSubsectionArrowRow}>
                  <View>
                    {/* view que containeriza icone e texto de seção */}
                    <View style={style.settingsSubsectionIconRow}>
                      <MCI
                        name="account-group"
                        size={18}
                        color={theme.txtColor}
                      />
                      <Text style={style.settingsSubsectionTitle}>Sobre</Text>
                    </View>
                  </View>
                  <MCI name="chevron-right" size={25} color={theme.txtColor} />
                </View>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={{ marginBottom: 15 }} />
      </ScrollView>

      {/* 
          modal estilo bottom-sheet ///notificações
        */}

      <BottomSheet
        ref={refNotificacoes}
        index={-1}
        snapPoints={snapPointNotificacoes}
        enablePanDownToClose={true}
        style={style.modalStyle}
        backgroundStyle={{ backgroundColor: theme.screenColor }}
        handleIndicatorStyle={{ backgroundColor: theme.txtColor }}
        backdropComponent={BottomSheetBackdrop}
      >
        <TelaNotificacoes />
      </BottomSheet>

      {/* 
          modal estilo bottom-sheet ///promoções
        */}

      <BottomSheet
        ref={refPromocoes}
        index={-1}
        snapPoints={snapPointPromocoes}
        enablePanDownToClose={true}
        style={style.modalStyle}
        backgroundStyle={{ backgroundColor: theme.screenColor }}
        handleIndicatorStyle={{ backgroundColor: theme.txtColor }}
        backdropComponent={BottomSheetBackdrop}
      >
        <View style={style.container}>
          <View style={style.modalTitleAlign}>
            <Text style={style.modalTitleStyle}>Promoções</Text>
          </View>

          <View style={style.modalContentAlign}>
            <Text style={[style.generalFont400, { textAlign: "center" }]}>
              Sem promoções no momento. Ative as notificações para ficar por
              dentro!
            </Text>
          </View>

          <View style={{ alignItems: "center", marginVertical: 10 }}>
            <Pressable
              onPress={() => {
                handleClosePromocoes();
                handleOpenNotificacoes();
              }}
            >
              <View style={style.securityButton}>
                <Text style={style.defaultButtonText}>Notificações</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </BottomSheet>

      {/* 
          modal estilo bottom-sheet ///histórico
        */}

      <BottomSheet
        ref={refHistorico}
        index={-1}
        snapPoints={snapPointHistorico}
        enablePanDownToClose={true}
        style={style.modalStyle}
        backgroundStyle={{ backgroundColor: theme.screenColor }}
        handleIndicatorStyle={{ backgroundColor: theme.txtColor }}
        backdropComponent={BottomSheetBackdrop}
      >
        <TelaHistorico />
      </BottomSheet>

      {/* 
          modal estilo bottom-sheet ///Sobre
        */}

      <BottomSheet
        ref={refSobre}
        index={-1}
        snapPoints={snapPointSobre}
        enablePanDownToClose={true}
        style={style.modalStyle}
        backgroundStyle={{ backgroundColor: theme.screenColor }}
        handleIndicatorStyle={{ backgroundColor: theme.txtColor }}
        backdropComponent={BottomSheetBackdrop}
      >
        <TelaSobre />
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

function Telas() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Configs" component={TelaConfigs} />
      <Stack.Screen name="Ajuda" component={TelaAjuda} />

      {/*
      condicional. se o usuário não estiver logado, mostra a tela de login. 
      se ele estiver logado, mostra a tela de configs de perfil/segurança.
      */}

      {user ? (
        <Stack.Screen name="User" component={EditarDados} />
      ) : (
        <Stack.Screen name="User" component={TelaLogin} />
      )}

      {user ? (
        <Stack.Screen name="Seguranca" component={EditarSeguranca} />
      ) : (
        <Stack.Screen name="Seguranca" component={TelaLogin} />
      )}

      {user ? (
        <Stack.Screen name="Feedback" component={TelaFeedback} />
      ) : (
        <Stack.Screen name="Feedback" component={TelaLogin} />
      )}
    </Stack.Navigator>
  );
}

const Stack = createStackNavigator();

export default Telas;
