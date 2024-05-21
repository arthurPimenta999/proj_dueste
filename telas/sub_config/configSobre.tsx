import React from "react";
import { View, Text, ScrollView } from "react-native";
import stylePadrao from "../../styles/stylesDefault";
import styleSobre from "../../styles/sub_config/styleSobre";

function TelaSobre() {
  return (
    <View style={stylePadrao.container}>
      <View style={stylePadrao.titleAlign}>
        <Text style={stylePadrao.title}>Sobre</Text>
      </View>

      <ScrollView>
        <View>
          <Text style={styleSobre.sobreText}>
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
