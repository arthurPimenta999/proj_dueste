import React, { useState } from "react";
import { View, Text } from "react-native";
import stylePadrao from "../../styles/stylesDefault";
import DropDownPicker from "react-native-dropdown-picker";

function DarkModeModal() {
  const [aberto, setAberto] = useState(false);
  const [valor, setValor] = useState(false);
  const [modo, setModo] = useState([
    { key: 1, label: "Claro", valor: "claro" },
    { key: 2, label: "Escuro", valor: "escuro" },
    { key: 3, label: "Padrão do Sistema", valor: "sistema" },
    { key: 4, label: "Dia/Noite", valor: "horario" },
  ]);

  return (
    <View style={stylePadrao.container}>
      {/* 
        Título
      */}

      <View style={stylePadrao.titleAlign}>
        <Text style={stylePadrao.title}>Modo Escuro</Text>
      </View>

      <View>
        <DropDownPicker
          open={aberto}
          value={valor}
          items={modo}
          setOpen={setAberto}
          setValue={setValor}
          setItems={setModo}
          placeholder="Selecione um modo"
        />
      </View>
    </View>
  );
}

export default DarkModeModal;
