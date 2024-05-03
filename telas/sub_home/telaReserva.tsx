import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styleReserva from "../../styles/sub_home/stylesReserva";
import AppLoading from "expo-app-loading";
import DateTimePicker from "@react-native-community/datetimepicker";

function TelaReserva() {
  return (
    <SafeAreaView style={styleReserva.safeArea}>
      <View style={styleReserva.teste}>
        <Text>oii</Text>
      </View>
    </SafeAreaView>
  );
}

export default TelaReserva;
