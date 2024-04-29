import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  TextInput,
  Image,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styleCardapio from "../styles/stylesCardapio";
import { useFonts } from "@expo-google-fonts/montserrat";
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import Ionicon from "react-native-vector-icons/Ionicons";
import stylePadrao from "../styles/stylesDefault";
import AntDesign from "react-native-vector-icons/AntDesign";
import PizzasSalgadas from "../apis/firebaseConfig";
import * as SplashScreen from "expo-splash-screen";

function TelaCardapio() {
  const navigation = useNavigation();

  {
    /*
  useFonts pra carregar fonte externa e AppLoading pra deixar a tela carregando.
  só parar de carregar a tela quando a fonte estiver 100% pronta pra uso.
  ~Stardust
  */
  }

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // função que divide os cards em linhas

  return (
    <SafeAreaView>
      {/* cabeçalho */}

      <View style={stylePadrao.textTopAlign}>
        <Text style={stylePadrao.textTop}>Cardápio</Text>
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

        {/* cartões de sabores e itens no cardápio */}
        <View style={styleCardapio.pizzaTitleAlign}>
          <Text style={styleCardapio.pizzaTitleStyle}>Pizzas salgadas</Text>
        </View>

        <PizzasSalgadas />
      </ScrollView>
    </SafeAreaView>
  );
}

export default TelaCardapio;
