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
import FirestoreDB from "../apis/firebaseConfig";
import { ActivityIndicator } from "react-native";
import firestore from "@react-native-firebase/firestore";
import Teste from "../apis/firebaseConfig";
import crudFB from "../apis/firebaseConfig";
import readData from "../apis/firebaseConfig";

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

  const titles = ["Pizza Pepperoni", "Pizza Bauru", "Pizza Alho"];

  const imageLinks = [
    "https://eu.ooni.com/cdn/shop/articles/pepperoni-pizza.jpg?crop=center&height=800&v=1587043733&width=800",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWaGD5ipO5-S6j1KPluu9nQeBMv-9cv7DIozP1F5vZQ&s",
    "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
  ];

  const precos = ["R$29,99", "R$14,99", "R$19,99"];

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

      <Button title="oii" onPress={readData} />

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

        {titles.map((title, index) => (
          <View style={styleCardapio.styleCard}>
            <Image
              source={{ uri: imageLinks[index] }}
              style={styleCardapio.styleImage}
            />
            <View>
              <Text style={styleCardapio.pizzaTitle}>{title}</Text>
              <Text style={styleCardapio.precoAlign}>{precos[index]}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
// <View style={styleCardapio.styleCard}>
//   <View key={index} style={styleCardapio.rowAlign}>
//     <Image
//       source={{ uri: imageLinks[index] }}
//       style={styleCardapio.styleImage}
//     />
//     <Text style={styleCardapio.pizzaTitle}>{title}</Text>
//   </View>
//   <Text style={styleCardapio.precoAlign}>{precos[index]}</Text>
// </View>

export default TelaCardapio;
