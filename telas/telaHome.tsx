import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  useWindowDimensions,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styleHome from "../styles/stylesHome";
import stylePadrao from "../styles/stylesDefault";
import { useFonts } from "expo-font";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import SwiperFlatList from "react-native-swiper-flatlist";
import Feather from "react-native-vector-icons/Feather";
import FA5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import logoDueste from "../components/images/duesteLogo.png";
import AppLoading from "expo-app-loading";

function TelaPrincipal() {
  const { height } = useWindowDimensions();

  const marginTop = Platform.OS === "android" ? height * 0.1 : height * 0.05;

  {
    /*
  useFonts pra carregar fonte externa e AppLoading pra deixar a tela carregando.
  só parar de carregar a tela quando a fonte estiver 100% pronta pra uso.
  ~Stardust
  */
  }

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styleHome.fixCinza}>
      {/*
      fundo amarelo com logo
      ~Stardust
      */}

      <View style={styleHome.styleYellow}>
        <View style={styleHome.logoAlign}>
          <Image source={logoDueste} style={styleHome.logoStyle} />
        </View>
      </View>

      {/*
      banner com imagens da dueste
      ~Stardust
      */}

      <View style={stylePadrao.styleHome}>
        <View style={styleHome.bannerStyle}>
          <SwiperFlatList
            autoplay
            autoplayDelay={4}
            autoplayLoop
            index={2}
            showPagination
          >
            <View style={[styleHome.child, { backgroundColor: "tomato" }]}>
              <Text style={styleHome.text}>1</Text>
            </View>
            <View style={[styleHome.child, { backgroundColor: "thistle" }]}>
              <Text style={styleHome.text}>2</Text>
            </View>
            <View style={[styleHome.child, { backgroundColor: "skyblue" }]}>
              <Text style={styleHome.text}>3</Text>
            </View>
          </SwiperFlatList>
        </View>

        {/*balão que mostra o endereço de entrega escolhido pelo usuário
        ~Stardust
        */}

        <View style={styleHome.pinBGstyle}>
          <FA5
            name="map-marker-alt"
            size={20}
            style={styleHome.pinStyle}
            color={"#fff"}
          >
            <Text style={styleHome.localAlign}>
                Rua Natal, Jardim Paulistano, Nº340
            </Text>
          </FA5>
        </View>

        {/*
        fileira de botões.
        um tem função de abrir no maps o endereço da Dueste;
        outro tem função de abrir uma página de ajuda, pro usuário aprender cada função do app;
        o último é um placeholder. no momento é uma função de chat, mas provavelmente não será
        implementada no projeto final.
        ~Stardust
        */}

        <View style={styleHome.btnRowAlign2}>
          <Pressable style={styleHome.pressBorder}>
            <Feather name="map" size={25} color={"#000"} />
          </Pressable>

          <Pressable style={styleHome.pressBorder}>
            <Feather name="help-circle" size={25} color={"#000"} />
          </Pressable>

          <Pressable style={styleHome.pressBorder}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={25}
              color={"#000"}
            />
          </Pressable>
        </View>

        {/*
        medida temporária pros botões terem nome embaixo.
        quando coloquei o nome dos botões na mesma View que os botões,
        ficaram todos tortos e feios. 
        ~Stardust
        */}

        <View style={styleHome.txtBtnAlign}>
          <Text style={{ fontFamily: "Montserrat_400Regular" }}>Local</Text>
          <Text style={{ fontFamily: "Montserrat_400Regular" }}>Ajuda</Text>
          <Text style={{ fontFamily: "Montserrat_400Regular" }}>Chat</Text>
        </View>

        {/*
        botões principais da tela inicial. o botão de delivery leva pro iFood da Dueste,
        e o botão de reservas leva pra uma tela pra reservar mesas no restaurante, aproveitando que
        o restaurante tem um chatbot no Whatsapp.
        ~Stardust
        */}

        <View style={styleHome.alignBtnRow}>
          <View style={styleHome.alignBtn}>
            <Pressable style={styleHome.btn}>
              <Text
                style={{
                  fontFamily: "Montserrat_400Regular",
                  fontSize: 20,
                  color: "#222",
                }}
              >
                Delivery
              </Text>
            </Pressable>

            <Pressable style={styleHome.btn}>
              <Text
                style={{
                  fontFamily: "Montserrat_400Regular",
                  fontSize: 20,
                  color: "#222",
                }}
              >
                Reserva
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default TelaPrincipal;
