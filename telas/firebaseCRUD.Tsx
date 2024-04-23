import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  useWindowDimensions,
  Platform,
  SafeAreaView,
  TextInput,
} from "react-native";
import stylePadrao from "../styles/stylesDefault";
import styleHome from "../styles/stylesHome";
import firestroecrud from "../Firebase/firebaseConfig"

function crudfirebase(){

    const [text, onChangeText] = React.useState('Useless text')
    const [number, onChangeNumber] = React.useState('');
    

    return(

    <SafeAreaView>

      <TextInput
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />

    </SafeAreaView>
                
    );
}

export default crudfirebase;