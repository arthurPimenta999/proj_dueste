import React, { useRef, useMemo } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styleSettings from "../styles/stylesSettings";
import stylePadrao from "../styles/stylesDefault";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";
import MatIcons from "react-native-vector-icons/MaterialIcons";
import Ionicon from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import FA6 from "react-native-vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import EditarDados from "./sub_config/configDados";
import EditarSeguranca from "./sub_config/configSeguranca";
import TelaNotificacoes from "./sub_config/configNotificacoes";
import DarkModeModal from "./sub_config/configDarkMode";

function TelaConfigs() {
  const navigation = useNavigation();

  const { width, height } = Dimensions.get("window");

  // =============== MODALS ===============

  //configurações da modal ///dados

  const refDados = useRef(null);
  const snapPointDados = useMemo(() => ["30%", "35%"], []);
  const handleOpenDados = () => refDados.current?.expand();

  //configurações da modal ///segurança

  const refSeguranca = useRef(null);
  const snapPointSeguranca = useMemo(() => ["40%", "60%"], []);
  const handleOpenSeguranca = () => refSeguranca.current?.expand();

  //configurações da modal ///segurança

  const refNotificacoes = useRef(null);
  const snapPointNotificacoes = useMemo(() => ["40%", "60%"], []);
  const handleOpenNotificacoes = () => refNotificacoes.current?.expand();

  //configurações da modal ///segurança

  const refDarkMode = useRef(null);
  const snapPointDarkMode = useMemo(() => ["40%", "60%"], []);
  const handleOpenDarkMode = () => refDarkMode.current?.expand();

  // =============== FIM DAS MODALS ===============

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
          {/*
      barra de pesquisa da página de configurações
      ~Stardust
      */}

          <View style={stylePadrao.searchBarAlign}>
            <View style={stylePadrao.searchBar}>
              <View style={stylePadrao.alignInput}>
                <AntDesign name="search1" size={20} color={"#333"} />
                <TextInput
                  selectionColor={"#d69e04"}
                  style={stylePadrao.inputStyle}
                />
              </View>
            </View>
          </View>

          <View style={styleSettings.configTitleAlign}>
            <Text style={styleSettings.configTitle}>Conta</Text>
            <Text style={{ fontFamily: "Montserrat_400Regular" }}>
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
                onPress={handleOpenDados}
              >
                <MCI name="account-circle" size={25} color={"#000"} />
                <Text
                  style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 18 }}
                >
                  Editar dados
                </Text>
                <View style={styleSettings.arrowAlign}>
                  <Entypo name="chevron-right" size={18} />
                </View>
              </Pressable>

              <Pressable
                style={styleSettings.pressableSpace}
                onPress={handleOpenSeguranca}
              >
                <MCI name="security" size={25} color={"#000"} />
                <Text
                  style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 18 }}
                >
                  Segurança e Login
                </Text>
                <View style={styleSettings.arrowAlign}>
                  <Entypo name="chevron-right" size={18} />
                </View>
              </Pressable>

              <Pressable
                style={styleSettings.pressableSpace}
                onPress={handleOpenNotificacoes}
              >
                <Ionicon name="notifications" size={25} color={"#000"} />
                <Text
                  style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 18 }}
                >
                  Notificações
                </Text>
                <View style={styleSettings.arrowAlign}>
                  <Entypo name="chevron-right" size={18} />
                </View>
              </Pressable>
            </View>
          </View>

          {/*
        configurações do app
        ~Stardust
        */}

          <View style={styleSettings.configTitleAlign}>
            <Text style={styleSettings.configTitle}>Preferências</Text>
            <Text style={{ fontFamily: "Montserrat_400Regular" }}>
              Configurações do aplicativo.
            </Text>
          </View>

          <View style={styleSettings.alignConfig}>
            <View style={styleSettings.configSection}>
              <Pressable
                style={styleSettings.pressableSpace}
                onPress={handleOpenDarkMode}
              >
                <MCI name="theme-light-dark" size={25} color={"#000"} />
                <Text
                  style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 18 }}
                >
                  Modo Escuro
                </Text>
                <View style={styleSettings.arrowAlign}>
                  <Entypo name="chevron-right" size={18} />
                </View>
              </Pressable>

              <Pressable style={styleSettings.pressableSpace}>
                <MCI name="sale" size={25} color={"#000"} />
                <Text
                  style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 18 }}
                >
                  Promoções
                </Text>
                <View style={styleSettings.arrowAlign}>
                  <Entypo name="chevron-right" size={18} />
                </View>
              </Pressable>

              <Pressable style={styleSettings.pressableSpace}>
                <FA6 name="clock-rotate-left" size={20} color={"#000"} />
                <Text
                  style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 18 }}
                >
                  Histórico
                </Text>
                <View style={styleSettings.arrowAlign}>
                  <Entypo name="chevron-right" size={18} />
                </View>
              </Pressable>
            </View>
          </View>

          {/*
        ajuda & feedback
        ~Stardust
        */}

          <View style={styleSettings.configTitleAlign}>
            <Text style={styleSettings.configTitle}>Ajuda e Feedback</Text>
            <Text style={{ fontFamily: "Montserrat_400Regular" }}>
              Suporte e perguntas frequentes.
            </Text>
          </View>

          <View style={styleSettings.alignConfig}>
            <View style={styleSettings.configSection}>
              <Pressable style={styleSettings.pressableSpace}>
                <MCI name="help-circle" size={25} color={"#000"} />
                <Text
                  style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 18 }}
                >
                  Ajuda
                </Text>
                <View style={styleSettings.arrowAlign}>
                  <Entypo name="chevron-right" size={18} />
                </View>
              </Pressable>

              <Pressable style={styleSettings.pressableSpace}>
                <MatIcons name="feedback" size={25} />
                <Text
                  style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 18 }}
                >
                  Feedback
                </Text>
                <View style={styleSettings.arrowAlign}>
                  <Entypo name="chevron-right" size={18} />
                </View>
              </Pressable>

              <Pressable style={styleSettings.pressableSpace}>
                <MCI name="account-group" size={23} color={"#000"} />
                <Text
                  style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 18 }}
                >
                  Sobre
                </Text>
                <View style={styleSettings.arrowAlign}>
                  <Entypo name="chevron-right" size={18} />
                </View>
              </Pressable>
            </View>
          </View>
        </ScrollView>

        {/* 
          modal estilo bottom-sheet ///dados
        */}

        <BottomSheet
          ref={refDados}
          index={-1}
          snapPoints={snapPointDados}
          enablePanDownToClose={true}
          style={styleSettings.modalStyle}
          backgroundStyle={{ backgroundColor: "#fafafa" }}
        >
          <EditarDados />
        </BottomSheet>

        {/* 
          modal estilo bottom-sheet ///seguranca
        */}

        <BottomSheet
          ref={refSeguranca}
          index={-1}
          snapPoints={snapPointSeguranca}
          enablePanDownToClose={true}
          style={styleSettings.modalStyle}
          backgroundStyle={{ backgroundColor: "#fafafa" }}
        >
          <EditarSeguranca />
        </BottomSheet>

        {/* 
          modal estilo bottom-sheet ///notificações
        */}

        <BottomSheet
          ref={refNotificacoes}
          index={-1}
          snapPoints={snapPointDarkMode}
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
          snapPoints={snapPointNotificacoes}
          enablePanDownToClose={true}
          style={styleSettings.modalStyle}
          backgroundStyle={{ backgroundColor: "#fafafa" }}
        >
          <DarkModeModal />
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

function Telas() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Configs" component={TelaConfigs} />
      <Stack.Screen name="Editar" component={TelaConfigs} />
    </Stack.Navigator>
  );
}

const Stack = createStackNavigator();

export default Telas;
