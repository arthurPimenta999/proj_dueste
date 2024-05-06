import React, { useState } from "react";
import { View, Text, Switch } from "react-native";
import styleEditar from "../../styles/sub_config/styleDados";
import stylePadrao from "../../styles/stylesDefault";
import FA from "react-native-vector-icons/FontAwesome";

function EditarDados() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={stylePadrao.container}>
      <View style={stylePadrao.titleAlign}>
        <Text style={stylePadrao.title}>Editar dados</Text>
      </View>

      <View style={stylePadrao.contentAlign}>
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
              <Text style={styleEditar.connectText}>
                Conectar com o Facebook
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default EditarDados;
