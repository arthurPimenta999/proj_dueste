import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../../styles/styles";

function TelaSobre() {
  const style = styles();

  return (
    <View style={style.container}>
      <View style={style.modalTitleAlign}>
        <Text style={style.modalTitleStyle}>Sobre</Text>
      </View>

      <ScrollView style={style.modalContentAlign}>
        <View>
          <Text style={[style.generalFont400, { textAlign: "center" }]}>
            O app Pizzaria Dueste é o Trabalho de Conclusão de Curso dos alunos
            de Desenvolvimento de Sistemas da Etec Fernando Prestes Sorocaba. O
            grupo Scorpion se disponibilizou a fazer um aplicativo para a
            Pizzaria Dueste para automatizar o sistema de vendas da pizzaria e
            tornar mais eficiente o trabalho dos funcionarios.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default TelaSobre;
