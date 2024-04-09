import { View, Text, Pressable } from "react-native";
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

function TelaCardapio() {
  const navigation = useNavigation();

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

      <View style={styleCardapio.textTopAlign}>
        <Text style={styleCardapio.textTop}>Cardápio</Text>
      </View>

      {/*
      botão que leva pra tela Index
      ~Stardust
      */}

      <Pressable
        style={styleCardapio.backBtn}
        onPress={() => navigation.navigate("Início")}
      >
        <Ionicon name="arrow-back" size={18} color={"#333"} />
      </Pressable>

      {/* cartões de sabores e itens no cardápio */}

      <View style={styleCardapio.yellow}>
        <View>
          <Card>
            <Card.Title title="titulo-teste" subtitle="subtitulo-teste" />
            <Card.Content>
              <Text>oii rsrs</Text>
            </Card.Content>
          </Card>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default TelaCardapio;
