import * as React from "react";
import { SafeAreaView, View, Text, Pressable, ScrollView } from "react-native";
import { useFonts } from "@expo-google-fonts/montserrat";
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import stylePerfil from "../../../styles/conta/stylesPerfil";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";
import stylePadrao from "../../../styles/stylesDefault";
import Ionicon from "react-native-vector-icons/Ionicons";
import FA6 from "react-native-vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";
import Telas from "../../telaSettings";

function TelaProfile() {
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
        <Text style={stylePadrao.textTop}>Perfil</Text>
      </View>

      {/*
        botão que leva pra tela Index
        ~Stardust
        */}

      <Pressable
        style={stylePadrao.backBtn}
        onPress={() => navigation.navigate("Configs")}
      >
        <Ionicon name="arrow-back" size={18} color={"#333"} />
      </Pressable>

      <View style={stylePerfil.userContentAlign}>
        <View>
          <MCI name="account-circle" size={200} color={"#777"} />
        </View>
        <Text style={stylePerfil.usernameStyle}>Nome do Usuário</Text>
      </View>

      <ScrollView>
        <View style={stylePerfil.yellow}>
          <View style={stylePerfil.alignConfig}>
            <View style={stylePerfil.configSection}>
              <Pressable style={stylePerfil.pressableSpace}>
                <MCI name="pencil" size={25} color={"#000"} />
                <Text
                  style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 18 }}
                >
                  Nome
                </Text>
              </Pressable>

              <Pressable style={stylePerfil.pressableSpace}>
                <FA6 name="camera" size={24} color={"#000"} />
                <Text
                  style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 18 }}
                >
                  Foto de perfil
                </Text>
              </Pressable>

              <Pressable style={stylePerfil.pressableSpace}>
                <FA6 name="clock-rotate-left" size={20} color={"#000"} />
                <Text
                  style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 18 }}
                >
                  Histórico
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default TelaProfile;
