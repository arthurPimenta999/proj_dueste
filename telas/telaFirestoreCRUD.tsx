import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  TextInput,
    Pressable,
  Image,
  useWindowDimensions,
  Platform,
  Dimensions,
} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { SafeAreaView } from "react-native-safe-area-context";
import stylePadrao from "../styles/stylesDefault";
import AntDesign from "react-native-vector-icons/AntDesign";
import dataoperations, { db } from "../FIrebase/FirebaseConfig";
import { UpdatedataP } from "../FIrebase/FirebaseConfig";
import AppLoading from "expo-app-loading";
import { Firestore, arrayUnion, doc, updateDoc, onSnapshot  } from "firebase/firestore";
import { finishScreenTransition } from "react-native-reanimated";



function TelaCRUD() {

  async function UpdatedataP(){
    if(pPizza === ''|| nPizza === ''||  uPizza === '' ){
      alert("Preencha todos os dados antes de continuar.")
    }else{
      await updateDoc(doc(db, "pizzaCards", "pizzaSal"), {
        pizzaPreco: arrayUnion(pPizza),
        pizzaTitle: arrayUnion(nPizza),
        pizzaURL: arrayUnion(uPizza)
      });
      console.log("Documento Alterado com sucesso");
      alert("Documento alterado com sucesso")
    }
      
  }

  const [nPizza, setPizzaChange] = useState('');
  const [pPizza, setPrecoChange] = useState('');
  const [uPizza, setUrlChange] = useState('');
  const [cmbBox, setcmbBox] = useState('');
  const [cmbValue, setcmbValue] = useState('');


  useEffect(() => {

    async function opcao() {

      try{
        const getopcao = await onSnapshot(db, collection('pizzaCards'), )
        const opcaoescolhida = getopcao.docs.map(doc => ({
          nome: doc.data().label,
          value: doc.data().value
        }));
        setcmbBox(opcaoescolhida);        
      } catch (error) {
        console.error('Erro ao buscar dados no Firestore:', error);
      }
      
    }
  })

  return (
    <SafeAreaView>
      <View style={stylePadrao.textTopAlign}>
        <Text style={stylePadrao.textTop}>Adicionar Dados</Text>
      </View>

      <RNPickerSelect onValueChange ={(value) => setcmbBox(value)} 
      Items = {cmbBox}
      value = {cmbValue}
      />

      <View style={stylePadrao.searchBarAlign}>
        <View >

            <AntDesign name="search1" size={20} color={"#333"} />

            <Text> Selecione uma Opção: </Text>

            {/* <RNPickerSelect 
            onValueChange={(value) => setcmbBox(value)} 
            items={[
              {label: 'pizzaSal', value: 'pizzaSal'},
              {label: 'pizzaDoce', value:'pizzaDoce'}
            ]}/> */}

            <TextInput
              selectionColor={"#d69e04"}
              style={stylePadrao.searchBar}
              placeholder = "Copie aqui o URL da imagem"
              onChangeText = {setUrlChange}
            />
            <TextInput
              selectionColor={"#d69e04"}
              style={stylePadrao.searchBar}
              placeholder = "Digite o nome da pizza"
              onChangeText = {setPizzaChange}
            />
            <TextInput
              selectionColor={"#d69e04"}
              style={stylePadrao.searchBar}
              placeholder= "Digite o preço da pizza"
              onChangeText = {setPrecoChange}
            />

            <Pressable onPress={UpdatedataP}> 
              <Text> Adicionar Pizza! </Text>
            </Pressable>
          </View>
      </View>
    </SafeAreaView>

  )
}

export default TelaCRUD;