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
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import { useFonts } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicon from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MatIcons from "react-native-vector-icons/MaterialIcons";
import FA6 from "react-native-vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import EditarDados from "./sub_config/conta/editarDados";

function TelaConfigs() {
  const navigation = useNavigation();

  const { width, height } = Dimensions.get("window");

  const bottomSheetRef = useRef(null);
  const snapPoint = useMemo(() => ["25%", "40%"], []);
  const handleOpen = () => bottomSheetRef.current?.expand();

  // função pra mostrar uma tela de carregamento enquanto o
  // app carrega as fontes. se não for usada, as fontes saem
  // cortadas e não funcionam direito.

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
                onPress={handleOpen}
              >
                <MCI name="account-circle" size={25} color={"#000"} />
                <Text
                  style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 18 }}
                >
                  Editar dados
                </Text>
              </Pressable>

              <Pressable style={styleSettings.pressableSpace}>
                <MCI name="security" size={25} color={"#000"} />
                <Text
                  style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 18 }}
                >
                  Segurança e Login
                </Text>
              </Pressable>

              <Pressable style={styleSettings.pressableSpace}>
                <Ionicon name="notifications" size={25} color={"#000"} />
                <Text
                  style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 18 }}
                >
                  Notificações
                </Text>
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
              <Pressable style={styleSettings.pressableSpace}>
                <MCI name="theme-light-dark" size={25} color={"#000"} />
                <Text
                  style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 18 }}
                >
                  Modo Escuro
                </Text>
              </Pressable>

              <Pressable style={styleSettings.pressableSpace}>
                <MCI name="sale" size={25} color={"#000"} />
                <Text
                  style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 18 }}
                >
                  Promoções
                </Text>
              </Pressable>

              <Pressable style={styleSettings.pressableSpace}>
                <FA6 name="clock-rotate-left" size={20} color={"#000"} />
                <Text
                  style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 18 }}
                >
                  Histórico
                </Text>
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
              </Pressable>

              <Pressable style={styleSettings.pressableSpace}>
                <MatIcons name="feedback" size={25} color={"#000"} />
                <Text
                  style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 18 }}
                >
                  Feedback
                </Text>
              </Pressable>

              <Pressable style={styleSettings.pressableSpace}>
                <MCI name="account-group" size={23} color={"#000"} />
                <Text
                  style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 18 }}
                >
                  Sobre
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>

        {/* 
          modal estilo bottom-sheet
        */}

        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoint}
          enablePanDownToClose={true}
          style={styleSettings.modalStyle}
          backgroundStyle={{ backgroundColor: "#fafafa" }}
        >
          <EditarDados />
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
