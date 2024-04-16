import * as React from "react";
import { SafeAreaView, View, Text, Pressable } from "react-native";
import stylePadrao from "../../styles/stylesDefault";
import { useFonts } from "@expo-google-fonts/montserrat";
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import Ionicon from "react-native-vector-icons/Ionicons";
import styleReserva from "../../styles/sub_home/stylesReserva";

function TelaReserva() {
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
    <SafeAreaView style={stylePadrao.AndroidSafeArea}>
      {/* cabeçalho */}

      <View style={stylePadrao.textTopAlign}>
        <Text style={stylePadrao.textTop}>Reserva</Text>
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

      {/* 
        Aviso de horário. similar ao design do figma
      */}

      <View style={styleReserva.styleAviso}>
        <View style={styleReserva.alignContentAviso}>
          <Ionicon name="warning" size={40} color="#fff" />
          <Text style={styleReserva.textAviso}>
            O horário de funcionamento do restaurante é das 18h às 23h. Caso o
            cliente não chegue em 1h30min a partir do início das atividades do
            restaurante, a reserva será automaticamente cancelada.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default TelaReserva;
