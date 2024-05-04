import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styleReserva from "../../styles/sub_home/stylesReserva";
import { useFonts } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import DateTimePicker from "@react-native-community/datetimepicker";
import SwitchSelector from "react-native-switch-selector";

function TelaReserva() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styleReserva.safeArea}>
      {/* 
        Título da tela
      */}

      <View style={styleReserva.titleAlign}>
        <Text style={styleReserva.titleFont}>Reserva</Text>
      </View>

      {/* 
        Horário
      */}

      <View></View>
    </SafeAreaView>
  );
}

export default TelaReserva;
