import { View, Text, Pressable, ScrollView } from "react-native";
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
import { Card } from "react-native-paper";
import * as React from "react";
import stylePadrao from "../styles/stylesDefault";
import Ant from "react-native-vector-icons/AntDesign";

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
            <Ant name="search1" size={20} color={"#333"} />
          </View>
        </View>

        {/* cartões de sabores e itens no cardápio */}
        <View style={styleCardapio.pizzaTitleAlign}>
          <Text style={styleCardapio.pizzaTitleStyle}>Pizzas salgadas</Text>
        </View>

        <View style={styleCardapio.cardsAlign}>
          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="rsrsrsrs"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>pizza merda</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://eu.ooni.com/cdn/shop/articles/pepperoni-pizza.jpg?crop=center&height=800&v=1587043733&width=800",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="rsrsrsrs"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>pizza merda</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>

          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWaGD5ipO5-S6j1KPluu9nQeBMv-9cv7DIozP1F5vZQ&s",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="rsrsrsrs"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>pizza merda</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="rsrsrsrs"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>pizza merda</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>
        </View>

        <View style={styleCardapio.cardRow}>
          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="rsrsrsrs"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>pizza merda</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>

          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="rsrsrsrs"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>pizza merda</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default TelaCardapio;
