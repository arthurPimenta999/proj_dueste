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
import RNPickerSelect from 'react-native-picker-select';
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
import dataoperations from "../FIrebase/FirebaseConfig";

function TelaCRUD() {

  const [nPizza, setPizzaChange] = React.useState('');
  const [pPizza, setPrecoChange] = React.useState(0);
  const [uPizza, setUrlChange] = React.useState('');
  const [cmbBox, setcmbBox] = React.useState('');
  
  function AddPizza() {
      if(nPizza === '' || pPizza === '' || uPizza === ''){
        alert("prencha os campos corretamente!")

        return
      }else {

      return(dataoperations.updatedataP("pizzaSal", pPizza, nPizza, uPizza))
      }

      // somente para verificar se os valores recebidos pela função do config são os mesmos da tela CRUD ~~Rafinha
      const datapizza = {
          nPizza,
          pPizza,
          uPizza,
      }
      console.log(datapizza)
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

              <Text> Selecione uma Opção: </Text>

              <RNPickerSelect 
              onValueChange={(value) => setcmbBox(value)} 
              items={[
                {label: 'pizzaSal', value: 'pizzaSal'},
                {label: 'pizzaDoce', value:'pizzaDoce'}
              ]}/>

              <TextInput
                selectionColor={"#d69e04"}
                style={stylePadrao.inputStyle}
                placeholder = "Copie aqui o URL da imagem"
                onChangetext = {setUrlChange}
              />
              <TextInput
                selectionColor={"#d69e04"}
                style={stylePadrao.inputStyle}
                placeholder = "Digite o nome da pizza"
                onChangeText = {setPizzaChange}
              />
              <TextInput
                selectionColor={"#d69e04"}
                style={stylePadrao.inputStyle}
                placeholder= "Digite o preço da pizza"
                onChangeText = {setPrecoChange}
              />

              <Pressable onPress = {AddPizza} />

            </View>
          </View>
        </View>


      </SafeAreaView>

    )
}

export default TelaCRUD;