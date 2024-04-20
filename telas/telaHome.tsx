import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  useWindowDimensions,
  Platform,
  Dimensions,
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
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import TelaReserva from "./sub_home/reserva";
import Carousel from "react-native-reanimated-carousel";

function TelaPrincipal() {
  const { height } = useWindowDimensions();
  const width = Dimensions.get("window").width;

  const navigation = useNavigation();

  const marginTop = Platform.OS === "android" ? height * 0.1 : height * 0.05;

  const imagensBanner = [
    "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHwwfDB8fHww",
    "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBpenphfGVufDB8MHwwfHx8MA%3D%3D",
  ];
  const placeholder = {};

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

      <View style={styleHome.logoAlign}>
        <Image source={logoDueste} style={styleHome.logoStyle} />
      </View>

      {/*
      banner com imagens da dueste
      ~Stardust
      */}

      <View style={stylePadrao.styleHome}>
        <View style={styleHome.bannerStyle}>
          <Carousel
            loop
            width={width}
            height={240}
            autoPlay={true}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 50,
            }}
            data={imagensBanner}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => console.log("current index:", index)}
            renderItem={({ index }) => (
              <View style={styleHome.bannerView}>
                <View style={styleHome.child}>
                  <Image
                    source={{
                      uri: imagensBanner[index],
                    }}
                    style={styleHome.child}
                  />
                </View>
              </View>
            )}
          />
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

            <Pressable
              style={styleHome.btn}
              onPress={() => navigation.navigate("Reserva")}
            >
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

function Telas() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={TelaPrincipal} />
      <Stack.Screen name="Reserva" component={TelaReserva} />
    </Stack.Navigator>
  );
}

const Stack = createStackNavigator();

export default Telas;
