import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  AntDesign,
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
import Feather from "react-native-vector-icons/Feather";
import FA5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import logoDueste from "../components/images/duesteLogo.png";
import AppLoading from "expo-app-loading";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import TelaReserva from "./sub_home/reserva";
import Carousel from "react-native-reanimated-carousel";
import * as SplashScreen from "expo-splash-screen";
import FirebaseConfig from "../FIrebase/FirebaseConfig";

function TelaCRUD() {

  const [nPizza, onPizzaChange] = React.useState('');
  const [pPizza, onPrecoChange] = React.useState('');
  const [uPizza, onUrlChange] = React.useState('');
  let preco, titulo, url;
  
  function updatedataP() {
    throw new Error("Function not implemented.");
  }

    return (

      

      <SafeAreaView>
        <View style={stylePadrao.textTopAlign}>
          <Text style={stylePadrao.textTop}>Adicionar Dados</Text>
        </View>

        <View style={stylePadrao.searchBarAlign}>
          <View style={stylePadrao.searchBar}>
            <View style={stylePadrao.alignInput}>
              <AntDesign name="search1" size={20} color={"#333"} />
              <Text> Pizza URL:</Text>
              <TextInput
                selectionColor={"#d69e04"}
                style={stylePadrao.inputStyle}
                onChangetext = {onUrlChange(onUrlChange)}
              />
              <Text> Nome da Pizza:</Text>
              <TextInput
                selectionColor={"#d69e04"}
                style={stylePadrao.inputStyle}
                onChangeText = {onPizzaChange(onPizzaChange)}
                placeholder = "Digite o nome da pizza"
              />
              <Text> Preço da Pizza:</Text>
              <TextInput
                selectionColor={"#d69e04"}
                style={stylePadrao.inputStyle}
                onChangeText = {onPrecoChange(onPrecoChange)}
              />
              <Pressable 
                onPress = {
                  preco = pPizza,
                  titulo = nPizza,
                  url = uPizza

                  updatedataP(preco, titulo, url)
                }
              />
            </View>
          </View>
        </View>


      </SafeAreaView>

    )
}

export default TelaCRUD;