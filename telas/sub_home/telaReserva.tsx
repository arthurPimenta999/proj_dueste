import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styleReserva from "../../styles/sub_home/stylesReserva";
import DateTimePicker from "@react-native-community/datetimepicker";
import SwitchSelector from "react-native-switch-selector";
import stylePadrao from "../../styles/stylesDefault";

function TelaReserva() {
  return (
    <SafeAreaView style={styleReserva.safeArea}>
      {/* 
        Título da tela
      */}

      <View style={stylePadrao.generalTitleAlign}>
        <Text style={stylePadrao.generalTitleStyle}>Reserva</Text>
      </View>

      {/* 
        Horário
      */}

      <View></View>
    </SafeAreaView>
  );
}

export default TelaReserva;
