import React from "react";
import { View, Text, Pressable } from "react-native";
import stylesHistorico from "../../styles/sub_config/styleHistorico";
import styles from "../../styles/styles";

function TelaHistorico() {
  const style = styles();

  return (
    <View style={style.container}>
      <View style={style.modalTitleAlign}>
        <Text style={style.modalTitleStyle}>Histórico</Text>
      </View>

      <View style={style.modalContentAlign}>
        <Text style={[style.generalFont400, { textAlign: "center" }]}>
          Faça sua primeira reserva para vê-la no histórico!
        </Text>
      </View>

      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <Pressable onPress={() => {}}>
          <View style={style.securityButton}>
            <Text style={style.defaultButtonText}>Reservar</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export default TelaHistorico;
