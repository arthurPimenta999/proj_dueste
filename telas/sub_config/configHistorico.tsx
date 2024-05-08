import React from "react";
import { View, Text, ScrollView } from "react-native";
import stylePadrao from "../../styles/stylesDefault";
import stylesHistorico from "../../styles/sub_config/styleHistorico";

function TelaHistorico() {
  return (
    <View style={stylePadrao.container}>
      <View style={stylePadrao.titleAlign}>
        <Text style={stylePadrao.title}>Histórico</Text>
      </View>

      <ScrollView>
        <View style={stylesHistorico.historicoAlign}>
          <Text style={stylesHistorico.historicoText}>
            Peça já sua primeira pizza para vê-la no histórico!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default TelaHistorico;
