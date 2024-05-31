import React, { useRef, useMemo, useState, useEffect } from "react";
import { View, Text, Pressable, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styleSettings from "../styles/stylesSettings";
import stylePadrao from "../styles/stylesDefault";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";
import MatIcons from "react-native-vector-icons/MaterialIcons";
import Ionicon from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import FA6 from "react-native-vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import TelaNotificacoes from "./sub_config/configNotificacoes";
import DarkModeModal from "./sub_config/configDarkMode";
import TelaPromocoes from "./sub_config/configPromocoes";
import TelaHistorico from "./sub_config/configHistorico";
import TelaSobre from "./sub_config/configSobre";
import TelaFeedback from "./sub_config/configFeedback";
import TelaAjuda from "./sub_config/configAjuda";
import { TelaLogin, auth } from "../apis/firebaseConfig";
import EditarDados from "./sub_config/configDados";
import { User, onAuthStateChanged } from "firebase/auth";
import EditarSeguranca from "./sub_config/configSeguranca";

function TelaConfigs() {
  const { height } = Dimensions.get("window");

  const navigation = useNavigation();

  // =============== MODALS ===============

  //configurações da modal ///segurança

  const refNotificacoes = useRef(null);
  const snapPointNotificacoes = useMemo(() => ["40%", "60%"], []);
  const handleOpenNotificacoes = () => refNotificacoes.current?.expand();

  //configurações da modal ///segurança

  const refDarkMode = useRef(null);
  const snapPointDarkMode = useMemo(() => ["20%", "47%"], []);
  const handleOpenDarkMode = () => refDarkMode.current?.expand();

  //configurações da modal ///promoções

  const refPromocoes = useRef(null);
  const snapPointPromocoes = useMemo(() => ["35%", "50%"], []);
  const handleOpenPromocoes = () => refPromocoes.current?.expand();

  //configurações da modal ///histórico

  const refHistorico = useRef(null);
  const snapPointHistorico = useMemo(() => ["35%", "60%"], []);
  const handleOpenHistorico = () => refHistorico.current?.expand();

  //configurações da modal ///sobre

  const refSobre = useRef(null);
  const snapPointSobre = useMemo(() => ["35%", "45%"], []);
  const handleOpenSobre = () => refSobre.current?.expand();

  // =============== FIM DAS MODALS ===============

  // função para saber se o usuário está logado

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView>
        {/* cabeçalho */}

        <View style={stylePadrao.textTopAlign}>
          <Text style={stylePadrao.textTop}>Configurações</Text>
        </View>

        {/*
      botão que leva pra tela Index
      ~Stardust
      */}

        <Pressable
          style={stylePadrao.backBtn}
          onPress={() => navigation.navigate("Início")}
        >
          <Ionicon name="arrow-back" size={18} color={"#333"} />
        </Pressable>

        <ScrollView style={stylePadrao.scrollStyle}>
          <View style={styleSettings.configTitleAlign}>
            <Text style={styleSettings.configTitle}>Conta</Text>
            <Text style={{ fontFamily: "Mont400" }}>
              Gerencie as informações e dados da sua conta.
            </Text>
          </View>

          {/*
        configurações de conta
        ~Stardust
        */}

          <View style={styleSettings.alignConfig}>
            <View style={styleSettings.configSection}>
              <Pressable
                style={styleSettings.pressableSpace}
                onPress={() => navigation.navigate("User")}
              >
                <View style={styleSettings.alignIconText}>
                  <MCI name="account-circle" size={25} color={"#000"} />
                  <Text
                    style={{
                      fontFamily: "Mont600",
                      fontSize: 18,
                    }}
                  >
                    Perfil
                  </Text>
                </View>

                <Entypo name="chevron-right" size={18} />
              </Pressable>

              <Pressable
                style={styleSettings.pressableSpace}
                onPress={() => navigation.navigate("Seguranca")}
              >
                <View style={styleSettings.alignIconText}>
                  <MCI name="security" size={25} color={"#000"} />
                  <Text
                    style={{
                      fontFamily: "Mont600",
                      fontSize: 18,
                    }}
                  >
                    Segurança
                  </Text>
                </View>
                <Entypo name="chevron-right" size={18} />
              </Pressable>

              <Pressable
                style={styleSettings.pressableSpace}
                onPress={handleOpenNotificacoes}
              >
                <View style={styleSettings.alignIconText}>
                  <Ionicon name="notifications" size={25} color={"#000"} />
                  <Text
                    style={{
                      fontFamily: "Mont600",
                      fontSize: 18,
                    }}
                  >
                    Notificações
                  </Text>
                </View>
                <Entypo name="chevron-right" size={18} />
              </Pressable>
            </View>
          </View>

          {/*
        configurações do app
        ~Stardust
        */}

          <View style={styleSettings.configTitleAlign}>
            <Text style={styleSettings.configTitle}>Preferências</Text>
            <Text style={{ fontFamily: "Mont400" }}>
              Configurações do aplicativo.
            </Text>
          </View>

          <View style={styleSettings.alignConfig}>
            <View style={styleSettings.configSection}>
              <Pressable
                style={styleSettings.pressableSpace}
                onPress={handleOpenDarkMode}
              >
                <View style={styleSettings.alignIconText}>
                  <MCI name="theme-light-dark" size={25} color={"#000"} />
                  <Text
                    style={{
                      fontFamily: "Mont600",
                      fontSize: 18,
                    }}
                  >
                    Modo Escuro
                  </Text>
                </View>
                <Entypo name="chevron-right" size={18} />
              </Pressable>

              <Pressable
                style={styleSettings.pressableSpace}
                onPress={handleOpenPromocoes}
              >
                <View style={styleSettings.alignIconText}>
                  <MCI name="sale" size={25} color={"#000"} />
                  <Text
                    style={{
                      fontFamily: "Mont600",
                      fontSize: 18,
                    }}
                  >
                    Promoções
                  </Text>
                </View>
                <Entypo name="chevron-right" size={18} />
              </Pressable>

              <Pressable
                style={styleSettings.pressableSpace}
                onPress={handleOpenHistorico}
              >
                <View style={styleSettings.alignIconText}>
                  <FA6 name="clock-rotate-left" size={20} color={"#000"} />
                  <Text
                    style={{
                      fontFamily: "Mont600",
                      fontSize: 18,
                    }}
                  >
                    Histórico
                  </Text>
                </View>
                <Entypo name="chevron-right" size={18} />
              </Pressable>
            </View>
          </View>

          {/*
        ajuda & feedback
        ~Stardust
        */}

          <View style={styleSettings.configTitleAlign}>
            <Text style={styleSettings.configTitle}>Ajuda e Feedback</Text>
            <Text style={{ fontFamily: "Mont400" }}>
              Suporte e perguntas frequentes.
            </Text>
          </View>

          <View style={styleSettings.alignConfig}>
            <View style={styleSettings.configSection}>
              <Pressable
                style={styleSettings.pressableSpace}
                onPress={() => navigation.navigate("Ajuda")}
              >
                <View style={styleSettings.alignIconText}>
                  <MCI name="help-circle" size={25} color={"#000"} />
                  <Text
                    style={{
                      fontFamily: "Mont600",
                      fontSize: 18,
                    }}
                  >
                    Ajuda
                  </Text>
                </View>
                <Entypo name="chevron-right" size={18} />
              </Pressable>

              <Pressable
                style={styleSettings.pressableSpace}
                onPress={() => navigation.navigate("Feedback")}
              >
                <View style={styleSettings.alignIconText}>
                  <MatIcons name="feedback" size={25} />
                  <Text
                    style={{
                      fontFamily: "Mont600",
                      fontSize: 18,
                    }}
                  >
                    Feedback
                  </Text>
                </View>
                <Entypo name="chevron-right" size={18} />
              </Pressable>

              <Pressable
                style={styleSettings.pressableSpace}
                onPress={handleOpenSobre}
              >
                <View style={styleSettings.alignIconText}>
                  <MCI name="account-group" size={22} color={"#000"} />
                  <Text
                    style={{
                      fontFamily: "Mont600",
                      fontSize: 18,
                    }}
                  >
                    Sobre
                  </Text>
                </View>
                <Entypo name="chevron-right" size={18} />
              </Pressable>
            </View>
          </View>
        </ScrollView>

        {/* 
          modal estilo bottom-sheet ///notificações
        */}

        <BottomSheet
          ref={refNotificacoes}
          index={-1}
          snapPoints={snapPointNotificacoes}
          enablePanDownToClose={true}
          style={styleSettings.modalStyle}
          backgroundStyle={{ backgroundColor: "#fafafa" }}
        >
          <TelaNotificacoes />
        </BottomSheet>

        {/* 
          modal estilo bottom-sheet ///modo escuro
        */}

        <BottomSheet
          ref={refDarkMode}
          index={-1}
          snapPoints={snapPointDarkMode}
          enablePanDownToClose={true}
          style={styleSettings.modalStyle}
          backgroundStyle={{ backgroundColor: "#fafafa" }}
        >
          <DarkModeModal />
        </BottomSheet>

        {/* 
          modal estilo bottom-sheet ///promoções
        */}

        <BottomSheet
          ref={refPromocoes}
          index={-1}
          snapPoints={snapPointPromocoes}
          enablePanDownToClose={true}
          style={styleSettings.modalStyle}
          backgroundStyle={{ backgroundColor: "#fafafa" }}
        >
          <TelaPromocoes />
        </BottomSheet>

        {/* 
          modal estilo bottom-sheet ///histórico
        */}

        <BottomSheet
          ref={refHistorico}
          index={-1}
          snapPoints={snapPointHistorico}
          enablePanDownToClose={true}
          style={styleSettings.modalStyle}
          backgroundStyle={{ backgroundColor: "#fafafa" }}
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
          style={styleSettings.modalStyle}
          backgroundStyle={{ backgroundColor: "#fafafa" }}
        >
          <TelaSobre />
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

function Telas() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user: " + user);
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
      <Stack.Screen name="Feedback" component={TelaFeedback} />

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
    </Stack.Navigator>
  );
}

const Stack = createStackNavigator();

export default Telas;
