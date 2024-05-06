import React, { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import stylePadrao from "../../styles/stylesDefault";
import styleDarkMode from "../../styles/sub_config/stylesDarkMode";

function DarkModeModal() {
  return (
    <View style={stylePadrao.container}>
      <View style={stylePadrao.titleAlign}>
        <Text style={stylePadrao.title}>Modo Escuro</Text>
      </View>
    </View>
  );
}

export default DarkModeModal;
