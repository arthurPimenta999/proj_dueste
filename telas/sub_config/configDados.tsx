import React, { useState } from "react";
import { View, Text, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styleEditar from "../../styles/sub_config/styleDados";
import Ionicon from "react-native-vector-icons/Ionicons";
import FA from "react-native-vector-icons/FontAwesome";

function EditarDados() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styleEditar.container}>
      {/*
        campo de editar nome
      */}
      <View style={styleEditar.optionAlign}>
        <Text style={styleEditar.optionTitle}>Nome:</Text>
        <Text style={styleEditar.nomeStyle}>Usuario Teste da Silva</Text>
      </View>

      {/*
      clicar para conectar com redes sociais
    */}

      <View style={styleEditar.facebookStyle}>
        <View style={styleEditar.alignIconRow}>
          <FA name="facebook-square" size={40} style={styleEditar.FBicon} />
          <View>
            <Text style={styleEditar.connectText}>Conectar com o Facebook</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default EditarDados;
