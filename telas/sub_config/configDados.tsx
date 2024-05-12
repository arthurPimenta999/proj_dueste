import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styleEditar from "../../styles/sub_config/styleDados";
import stylePadrao from "../../styles/stylesDefault";
import { SafeAreaView } from "react-native-safe-area-context";
import { Username } from "../../apis/firebaseConfig";

function EditarDados() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={stylePadrao.generalTitleAlign}>
        <Text style={stylePadrao.generalTitleStyle}>Perfil</Text>
      </View>

      <View style={styleEditar.container}>
        <Text style={styleEditar.generalFont400}>
          <Username />
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default EditarDados;
