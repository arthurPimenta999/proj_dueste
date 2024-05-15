import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styleReserva from "../../styles/sub_home/stylesReserva";
import DateTimePicker from "react-native-ui-datepicker";
import SwitchSelector from "react-native-switch-selector";
import stylePadrao from "../../styles/stylesDefault";
import dayjs from "dayjs";
import "dayjs/locale/pt-br"; // se algum nome ou formato estiver errado, alterar as strings em pt-br.js

function TelaReserva() {
  const [data, setData] = useState(dayjs());

  return (
    <SafeAreaView style={styleReserva.safeArea}>
      {/* 
        Título da tela
      */}

      <View style={stylePadrao.generalTitleAlign}>
        <Text style={stylePadrao.generalTitleStyle}>Reserva</Text>
      </View>

      <View style={styleReserva.datepickerAlign}>
        <DateTimePicker
          mode="single"
          date={data}
          onChange={(params) => setData(params.date)}
          locale={"pt-br"}
        />
      </View>
    </SafeAreaView>
  );
}

export default TelaReserva;
