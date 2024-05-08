import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import stylesPromocoes from "../../styles/sub_config/stylePromocoes";
import stylePadrao from "../../styles/stylesDefault";

function TelaPromocoes() {
  return (
    <View style={stylePadrao.container}>
      <View style={stylePadrao.titleAlign}>
        <Text style={stylePadrao.title}>Promoções</Text>
      </View>

      <ScrollView>
        <View style={stylesPromocoes.promoAlign}>
          <Text style={stylesPromocoes.promoText}>
            Sem promoções no momento. Ative as notificações para ficar por
            dentro!
          </Text>
        </View>

        <View style={stylesPromocoes.pressableAlign}>
          <Pressable style={stylesPromocoes.pressableStyle}>
            <Text style={stylesPromocoes.pressableText}>
              Ativar notificações
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

export default TelaPromocoes;
