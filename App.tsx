import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Dimensions, Platform } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TelaPrincipal from "./telas/telaHome";
import TelaCardapio from "./telas/telaCardapio";
import TelaConfigs from "./telas/telaSettings";
import Ionicon from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { useTheme as useTheme1 } from "react-native-paper";
import { useTheme } from "./components/theme";
import { useFonts } from "@expo-google-fonts/montserrat";
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "./components/theme";
import EditarDados from "./telas/sub_config/configDados";
import { PizzaProvider } from "./components/pizzaContext";
import TelaReserva from "./telas/sub_home/telaReserva";
import * as Font from "expo-font";
import TelaAjuda from "./telas/sub_config/configAjuda";
import TelaFeedback from "./telas/sub_config/configFeedback";

//=========== app ==========

export default function App() {
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Ionicon: require("react-native-vector-icons/Fonts/Ionicons.ttf"),
          Entypo: require("react-native-vector-icons/Fonts/Entypo.ttf"),
          AntDesign: require("react-native-vector-icons/Fonts/AntDesign.ttf"),
          FA5: require("react-native-vector-icons/Fonts/FontAwesome5_Solid.ttf"),
          Feather: require("react-native-vector-icons/Fonts/Feather.ttf"),
          MCI: require("react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf"),
          MI: require("react-native-vector-icons/Fonts/MaterialIcons.ttf"),
          Foundation: require("react-native-vector-icons/Fonts/Foundation.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  let [fontsLoaded] = useFonts({
    Mont400: Montserrat_400Regular,
    Mont600: Montserrat_600SemiBold,
  });
  if (!fontsLoaded) {
    return SplashScreen.preventAutoHideAsync;
  }

  const style = styles();

  return (
    <PizzaProvider>
      <ThemeProvider>
        <SafeAreaProvider style={style.container}>
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
          <StatusBar style="auto" backgroundColor="transparent" />
        </SafeAreaProvider>
      </ThemeProvider>
    </PizzaProvider>
  );
}

//========== consts & functions ==========

const { height } = Dimensions.get("window");

function styles() {
  const marginOS = Platform.OS === "android" ? height * 0.1 : height * 0.12;

  const { theme } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
    },
    icons: {
      alignItems: "center",
      justifyContent: "center",
    },
    materialTabStyle: {
      borderTopWidth: 2,
      borderColor: theme.navigatorBorder,
      backgroundColor: theme.barColor,
      height: marginOS,
    },
  });
}

// função da barra de navegação no rodapé do app :)

function MyTabs() {
  const style = styles();

  // theme do useTheme criado por mim
  const { theme } = useTheme();

  // theme do rn-paper
  const theme1 = useTheme1();
  theme1.colors.secondaryContainer = theme.yellow;
  return (
    <Tab.Navigator
      initialRouteName="Teste"
      activeColor="#d69e04"
      inactiveColor={theme.txtColor}
      barStyle={style.materialTabStyle}
    >
      <Tab.Screen
        name="Cardápio"
        component={TelaCardapio}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicon
              name="pizza"
              size={23}
              style={style.icons}
              color={focused ? "black" : theme.txtColor}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Início"
        component={TelaPrincipal}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={23}
              style={style.icons}
              color={focused ? "black" : theme.txtColor}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Configurações"
        component={TelaConfigs}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicon
              name="settings"
              size={23}
              style={style.icons}
              color={focused ? "black" : theme.txtColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Tab = createMaterialBottomTabNavigator();
