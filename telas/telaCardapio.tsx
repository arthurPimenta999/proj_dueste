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

      {/* cartões de sabores e itens no cardápio */}

      <View style={styleCardapio.cardsAlign}>
        <View style={styleCardapio.cardRow}>
          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://casbri.com.br/wp-content/uploads/2019/07/alhofrito_57e575f2d901c.jpg",
                }}
              />
              <Card.Title
                title="rsrsrsrs"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>pizza merda</Text>
                  <Ant name="down" size={20} />
                </View>
              </Card.Content>
            </Card>
          </Pressable>

          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
              <Card.Title
                title="rsrsrsrs"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>pizza merda</Text>
                  <Ant name="down" size={20} />
                </View>
              </Card.Content>
            </Card>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default TelaCardapio;
