import React, { useEffect, useState } from "react";
import { View, Text, Pressable, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styleCardapio from "../styles/stylesCardapio";
import { useNavigation } from "@react-navigation/native";
import Ionicon from "react-native-vector-icons/Ionicons";
import stylePadrao from "../styles/stylesDefault";
import AntDesign from "react-native-vector-icons/AntDesign";
import PizzasSalgadas from "../apis/firebaseConfig";

function TelaCardapio() {
  const navigation = useNavigation();

  //configuraçoes searchbar

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
