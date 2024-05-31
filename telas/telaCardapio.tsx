import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  TextInput,
  Image,
  Dimensions,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styleCardapio from "../styles/stylesCardapio";
import { useNavigation } from "@react-navigation/native";
import Ionicon from "react-native-vector-icons/Ionicons";
import stylePadrao from "../styles/stylesDefault";
import AntDesign from "react-native-vector-icons/AntDesign";
import { db } from "../apis/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import * as SplashScreen from "expo-splash-screen";

function TelaCardapio() {
  const { width, height } = Dimensions.get("window");

  const navigation = useNavigation();

  // arrays que guardam dados das pizzas

  const [pizzaSalURL, setPizzaSalURL] = useState<string[]>([]);
  const [pizzaSalTitle, setPizzaSalTitle] = useState([]);
  const [pizzaSalPreco, setPizzaSalPreco] = useState([]);

  const [pizzaDoceURL, setPizzaDoceURL] = useState<string[]>([]);
  const [pizzaDoceTitle, setPizzaDoceTitle] = useState([]);
  const [pizzaDocePreco, setPizzaDocePreco] = useState([]);

  const [bebidaURL, setBebidaURL] = useState<string[]>([]);
  const [bebidaTitle, setBebidaTitle] = useState([]);
  const [bebidaPreco, setBebidaPreco] = useState([]);

  const [loading, setLoading] = useState(false);

  const update = () => {
    const fetchData = async () => {
      const salRef = doc(db, "pizzaCards", "pizzaSal");
      const salSnap = await getDoc(salRef);

      const doceRef = doc(db, "pizzaCards", "pizzaDoce");
      const doceSnap = await getDoc(doceRef);

      const bebidaRef = doc(db, "pizzaCards", "pizzaBebida");
      const bebidaSnap = await getDoc(bebidaRef);

      // atribuindo os valores obtidos da requisição às variáveis do useState

      if (salSnap.exists() && doceSnap.exists() && bebidaSnap.exists()) {
        setPizzaSalURL(salSnap.data().pizzaURL);
        setPizzaSalTitle(salSnap.data().pizzaTitle);
        setPizzaSalPreco(salSnap.data().pizzaPreco);

        setPizzaDoceURL(doceSnap.data().pizzaURL);
        setPizzaDoceTitle(doceSnap.data().pizzaTitle);
        setPizzaDocePreco(doceSnap.data().pizzaPreco);

        setBebidaURL(bebidaSnap.data().pizzaURL);
        setBebidaTitle(bebidaSnap.data().pizzaTitle);
        setBebidaPreco(bebidaSnap.data().pizzaPreco);
      } else {
        console.log("Documento não encontrado.");
      }
      setLoading(false);
    };

    fetchData();
  };

  useEffect(() => {
    update();
  }, []);

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
    <SafeAreaView style={{ paddingBottom: 50 }}>
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

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={recarregando} onRefresh={aoRecarregar} />
        }
      >
        <View style={{ marginBottom: 25 }}>
          {/* barra de pesquisa */}

          <View style={stylePadrao.searchBarAlign}>
            <View style={stylePadrao.searchBar}>
              <View style={stylePadrao.alignInput}>
                <AntDesign name="search1" size={20} color={"#333"} />
                <TextInput
                  selectionColor={"#d69e04"}
                  style={stylePadrao.inputStyle}
                  autoCorrect={false}
                  value={busca}
                  onChangeText={(busca) => setBusca(busca)}
                />
              </View>
            </View>
          </View>

          {/* cartões de sabores e itens no cardápio */}
          <View>
            <Text
              style={[
                stylePadrao.subTitle600,
                {
                  marginHorizontal: width * 0.05,
                  marginBottom: height * 0.025,
                },
              ]}
            >
              Pizzas salgadas:
            </Text>
            {pizzasSalFiltradas.map((title, index) => (
              <View key={index} style={styleCardapio.styleCard}>
                <Image
                  source={{ uri: pizzaSalURL[index] }}
                  style={styleCardapio.styleImage}
                />
                <View>
                  <Text style={styleCardapio.pizzaTitle}>{title}</Text>
                  <Text style={styleCardapio.precoAlign}>
                    {pizzaSalPreco[index]}
                  </Text>
                </View>
              </View>
            ))}

            <Text
              style={[
                stylePadrao.subTitle600,
                {
                  marginHorizontal: width * 0.05,
                  marginBottom: height * 0.025,
                },
              ]}
            >
              Pizzas doces:
            </Text>

            {pizzasDocesFiltradas.map((title, index) => (
              <View key={index} style={styleCardapio.styleCard}>
                <Image
                  source={{ uri: pizzaDoceURL[index] }}
                  style={styleCardapio.styleImage}
                />
                <View>
                  <Text style={styleCardapio.pizzaTitle}>{title}</Text>
                  <Text style={styleCardapio.precoAlign}>
                    {pizzaDocePreco[index]}
                  </Text>
                </View>
              </View>
            ))}

            <Text
              style={[
                stylePadrao.subTitle600,
                {
                  marginHorizontal: width * 0.05,
                  marginBottom: height * 0.025,
                },
              ]}
            >
              Bebidas:
            </Text>

            {bebidasFiltradas.map((title, index) => (
              <View key={index} style={styleCardapio.styleCard}>
                <Image
                  source={{ uri: bebidaURL[index] }}
                  style={styleCardapio.styleImage}
                />
                <View>
                  <Text style={styleCardapio.pizzaTitle}>{title}</Text>
                  <Text style={styleCardapio.precoAlign}>
                    {bebidaPreco[index]}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default TelaCardapio;
