import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  Dimensions,
  RefreshControl,
} from "react-native";
import styles from "../styles/styles";
import * as SplashScreen from "expo-splash-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useTheme } from "../components/theme";
import { Divider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { usePizza } from "../components/pizzaContext";

export default function TelaCardapio() {
  // estilos e tema
  const style = styles();
  const { theme } = useTheme();
  const { height } = Dimensions.get("window");

  // variáveis do usePizza que contém os dados de pizza do firebase.

  const {
    pizzaSalURL,
    pizzaSalTitle,
    pizzaSalPreco,
    pizzaDoceURL,
    pizzaDoceTitle,
    pizzaDocePreco,
    bebidaURL,
    bebidaTitle,
    bebidaPreco,
    loading,
    update,
  } = usePizza();

  if (loading) {
    return SplashScreen.preventAutoHideAsync;
  }

  const [busca, setBusca] = useState("");

  const pizzasSalFiltradas = pizzaSalTitle
    .map(String)
    .filter((title) => title.toLowerCase().includes(busca.toLowerCase()));

  const pizzasDocesFiltradas = pizzaDoceTitle
    .map(String)
    .filter((title) => title.toLowerCase().includes(busca.toLowerCase()));

  const bebidasFiltradas = bebidaTitle
    .map(String)
    .filter((title) => title.toLowerCase().includes(busca.toLowerCase()));

  const [recarregando, setRecarregando] = useState(false);

  const aoRecarregar = useCallback(async () => {
    setRecarregando(true);
    setTimeout(() => {
      update();
      setRecarregando(false);
    }, 1500);
  }, []);

  return (
    <GestureHandlerRootView
      style={[style.container, { paddingTop: height * 0.04 }]}
    >
      <View>
        <View style={style.topTitleAlign}>
          <Text style={style.topTitleStyle}>Cardápio</Text>
        </View>

        {/* barra de pesquisa */}

        <View style={style.searchBarAlign}>
          <View style={style.searchBar}>
            <View style={{ flexDirection: "row" }}>
              <AntDesign name="search1" size={20} color={theme.txtColor} />
              <TextInput
                selectionColor={"#d69e04"}
                style={style.inputStyle}
                autoCorrect={false}
                value={busca}
                onChangeText={(busca) => setBusca(busca)}
              />
            </View>
          </View>
        </View>

        <Divider />
      </View>

      {/* view inteira */}

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={recarregando} onRefresh={aoRecarregar} />
        }
      >
        <View>
          <View style={style.cardapioTitleAlign}>
            <Text style={style.cardapioTitleStyle}>Pizzas Salgadas</Text>
          </View>

          {pizzasSalFiltradas.map((title, index) => (
            <View key={index} style={style.styleCard}>
              <Image
                source={{ uri: pizzaSalURL[index] }}
                style={style.styleImage}
              />
              <View>
                <Text style={style.pizzaTitle}>{title}</Text>
                <Text style={style.precoAlign}>{pizzaSalPreco[index]}</Text>
              </View>
            </View>
          ))}
        </View>

        <View>
          <View style={style.cardapioTitleAlign}>
            <Text style={style.cardapioTitleStyle}>Pizzas Doces</Text>
          </View>

          {pizzasDocesFiltradas.map((title, index) => (
            <View key={index} style={style.styleCard}>
              <Image
                source={{ uri: pizzaDoceURL[index] }}
                style={style.styleImage}
              />
              <View>
                <Text style={style.pizzaTitle}>{title}</Text>
                <Text style={style.precoAlign}>{pizzaDocePreco[index]}</Text>
              </View>
            </View>
          ))}
        </View>

        <View>
          <View style={style.cardapioTitleAlign}>
            <Text style={style.cardapioTitleStyle}>Bebidas</Text>
          </View>
          {bebidasFiltradas.map((title, index) => (
            <View key={index} style={style.styleCard}>
              <Image
                source={{ uri: bebidaURL[index] }}
                style={style.styleImage}
              />
              <View>
                <Text style={style.pizzaTitle}>{title}</Text>
                <Text style={style.precoAlign}>{bebidaPreco[index]}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
