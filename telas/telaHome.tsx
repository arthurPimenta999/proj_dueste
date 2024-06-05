import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
  Linking,
} from "react-native";
import { styles } from "../styles/styles";
import rusticBG from "../assets/splashBG.jpg";
import duesteLogo from "../assets/duesteLogo.png";
import Carousel from "react-native-reanimated-carousel";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import TelaReserva from "./sub_home/telaReserva";
import TelaAjuda from "./sub_config/configAjuda";

// import de fontes

import FA5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { auth } from "../apis/firebaseConfig";
import { ScrollView } from "react-native-gesture-handler";
import { User, onAuthStateChanged } from "firebase/auth";
import EditarDados from "./sub_config/configDados";
import { useTheme } from "../components/theme";
import { TelaLogin } from "./telaLogin";

function TelaPrincipal() {
  const style = styles();

  const { theme } = useTheme();

  const width = Dimensions.get("window").width;

  const navigation = useNavigation();

  // função que detecta horário e altera cumprimento

  const [boasVindas, setBoasVindas] = useState("");

  useEffect(() => {
    const updateBemVindo = () => {
      const agora = new Date();
      const horas = agora.getHours();

      if (horas < 12) {
        setBoasVindas("Bom dia");
      } else if (horas < 18) {
        setBoasVindas("Boa tarde");
      } else {
        setBoasVindas("Boa noite");
      }
    };

    updateBemVindo();

    const interval = setInterval(updateBemVindo, 300000);

    return () => clearInterval(interval);
  }, []);

  // imagens do carousel/banner

  const imagensBanner = [
    "https://firebasestorage.googleapis.com/v0/b/projetodueste.appspot.com/o/PizzaImages%2Fdueste1.png?alt=media&token=df6576bf-66c4-4c67-921a-a3f86dd76e07",
    "https://firebasestorage.googleapis.com/v0/b/projetodueste.appspot.com/o/PizzaImages%2Fdueste2.png?alt=media&token=cdda7980-d824-4729-880b-399054efcf2f",
    "https://firebasestorage.googleapis.com/v0/b/projetodueste.appspot.com/o/PizzaImages%2Fdueste3.jpg?alt=media&token=946205e1-1273-4edb-8563-e0ced4d2269b",
  ];

  // função que abre iFood da Dueste

  const abrirDueste = () => {
    Linking.openURL(
      "https://www.ifood.com.br/delivery/sorocaba-sp/pizzaria-dueste-parque-dos-eucaliptos/eb313658-3916-4283-9181-c03b48c312db?prato=64558822"
    );
  };

  // função que abre ifood já na rota pra Dueste

  const abrirEndereco = () => {
    Linking.openURL(
      "https://www.google.com/maps/dir//Av.+Paulo+Emanuel+de+Almeida,+910+-+Parque+dos+Eucaliptos,+Sorocaba+-+SP,+18053-505/@-23.4907192,-47.5854728,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94c58b27bd3e6d81:0x7a647876856aedba!2m2!1d-47.5030712!2d-23.4907409?entry=ttu"
    );
  };

  // arrays que guardam informações de cartões de sugestão

  const pizzaTitle = ["Pizza de Pepperoni", "Coca-cola (2L)", "Pizza de Alho"];

  const pizzaPreco = ["R$40,00", "R$12,00", "R$40,00"];

  const pizzaUrl = [
    "https://eu.ooni.com/cdn/shop/articles/pepperoni-pizza.jpg?crop=center&height=800&v=1587043733&width=800",
    "https://firebasestorage.googleapis.com/v0/b/projetodueste.appspot.com/o/PizzaImages%2F1716400736993?alt=media&token=08563334-6e20-494f-a87c-a54f3d793769",
    "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
  ];

  return (
    <View style={style.container}>
      {/* imagem de fundo e cumprimento */}
      <View style={style.backgroundImageAlign}>
        <Image source={rusticBG} style={style.backgroundImage} />
      </View>

      <View style={style.alignGreetings}>
        <Text
          style={{ fontFamily: "Mont600", fontSize: 30, color: theme.txtColor }}
        >
          {boasVindas}!
        </Text>
        <Text
          style={{ fontFamily: "Mont400", fontSize: 20, color: theme.txtColor }}
        >
          E aí, qual vai ser a boa de hoje?
        </Text>

        <View style={style.alignButtonRow}>
          <Pressable
            style={style.defaultButtonStyle}
            onPress={() => navigation.navigate("Reserva")}
          >
            <View style={style.defaultButtonInside}>
              <Text style={style.defaultButtonText}>Reserva</Text>
            </View>
          </Pressable>

          <Pressable style={style.defaultButtonStyle} onPress={abrirDueste}>
            <View style={style.defaultButtonInside}>
              <Text style={style.defaultButtonText}>Delivery</Text>
            </View>
          </Pressable>
        </View>
      </View>

      {/* ========== tela do app ========== */}

      <View style={style.borderView}>
        <ScrollView style={{ marginBottom: 0 }}>
          {/* logo Dueste */}

          <View style={style.alignLogo}>
            <Image source={duesteLogo} style={style.logoStyle} />
          </View>

          {/* carousel de imagens. ao clicar vai pro iFood Dueste. */}

          <Carousel
            loop
            width={width}
            height={240}
            autoPlay={true}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.85,
              parallaxScrollingOffset: 70,
            }}
            data={imagensBanner}
            scrollAnimationDuration={1000}
            renderItem={({ index }) => (
              <View key={index} style={style.bannerView}>
                <View style={style.child}>
                  <Image
                    source={{
                      uri: imagensBanner[index],
                    }}
                    style={style.child}
                  />
                </View>
              </View>
            )}
          />

          {/* balão de endereço dueste */}

          <View style={style.pinBGstyle}>
            <FA5 name="map-marker-alt" size={20} color={"#fff"}>
              <Text style={{ fontFamily: "Mont400", fontSize: 17.5 }}>
                  Av. Paulo Emanuel de Almeida, 910
              </Text>
            </FA5>
          </View>

          {/*
          nessas duas views, a "Row" serve pra colocar os botões em fileira/linha
          e a "Align" serve pra centralizar eles em relação ao eixo X (horizontal) da tela.
        */}

          <View style={style.roundButtonRow}>
            <View style={style.roundButtonAlign}>
              <Pressable onPress={abrirEndereco}>
                <View style={style.roundButtonStyle}>
                  <Feather name="map" size={25} color={"#000"} />
                </View>
              </Pressable>
              <Text
                style={[
                  style.themeTxtColor,
                  { fontFamily: "Mont400", marginTop: 5 },
                ]}
              >
                Endereço
              </Text>
            </View>

            <View style={style.roundButtonAlign}>
              <Pressable onPress={() => navigation.navigate("Ajuda")}>
                <View style={style.roundButtonStyle}>
                  <Feather name="help-circle" size={25} color={"#000"} />
                </View>
              </Pressable>
              <Text
                style={[
                  style.themeTxtColor,
                  { fontFamily: "Mont400", marginTop: 5 },
                ]}
              >
                Ajuda
              </Text>
            </View>

            <View style={style.roundButtonAlign}>
              <Pressable onPress={() => navigation.navigate("User")}>
                <View style={style.roundButtonStyle}>
                  <AntDesign name="login" size={25} color={"#000"} />
                </View>
              </Pressable>
              <Text
                style={[
                  style.themeTxtColor,
                  { fontFamily: "Mont400", marginTop: 5 },
                ]}
              >
                Conta
              </Text>
            </View>
          </View>

          <View style={style.alignSuggestion}>
            <Text
              style={[
                style.themeTxtColor,
                { fontFamily: "Mont600", fontSize: 20 },
              ]}
            >
              Hmm... pra agora era só uma...
            </Text>
          </View>

          <ScrollView horizontal={true} style={{ marginVertical: 15 }}>
            {pizzaTitle.map((title, index) => (
              <View key={index} style={style.styleCard}>
                <Image
                  source={{ uri: pizzaUrl[index] }}
                  style={style.styleImage}
                />
                <View>
                  <Text style={style.pizzaTitle}>{title}</Text>
                  <Text style={style.precoAlign}>{pizzaPreco[index]}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
}

function Telas() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={TelaPrincipal} />
      <Stack.Screen name="Ajuda" component={TelaAjuda} />

      {user ? (
        <Stack.Screen name="User" component={EditarDados} />
      ) : (
        <Stack.Screen name="User" component={TelaLogin} />
      )}

      {user ? (
        <Stack.Screen name="Reserva" component={TelaReserva} />
      ) : (
        <Stack.Screen name="Reserva" component={TelaLogin} />
      )}
    </Stack.Navigator>
  );
}

const Stack = createStackNavigator();

export default Telas;
