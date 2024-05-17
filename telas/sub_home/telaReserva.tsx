import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Pressable,
  Linking,
  SafeAreaView,
} from "react-native";
import styleReserva from "../../styles/sub_home/stylesReserva";
import DateTimePicker from "react-native-ui-datepicker";
import SwitchSelector from "react-native-switch-selector";
import stylePadrao from "../../styles/stylesDefault";
import dayjs from "dayjs";
import "dayjs/locale/pt-br"; // se algum nome ou formato estiver errado, alterar as strings em pt-br.js
import styleEditar from "../../styles/sub_config/styleDados";
import { auth } from "../../apis/firebaseConfig";

function TelaReserva() {
  // variavel pra controle de quantia de pessoas

  const [qtdPessoas, setQtdPessoas] = useState(0);
  const [nome, setNome] = useState("");
  const nomeFormatado = () => nome.toString();

  // variaveis para controle da data

  const [data, setData] = useState(dayjs());
  const [dataString, setDataString] = useState("");

  const dataFormatada = (params: any) => {
    const novaData = dayjs(params.date);
    setData(novaData);
    const dataFormatadaString = novaData.format("DD/MM/YYYY");
    setDataString(dataFormatadaString);

    return dataFormatadaString;
  };

  const linkPronto = () => {
    const nomeUrl = encodeURIComponent(nomeFormatado());
    const dataUrl = encodeURIComponent(dataString);
    const qtdPessoasUrl = encodeURIComponent(qtdPessoas.toString());

    Linking.openURL(
      `https://api.whatsapp.com/send?phone=5515996280197&text=%5BRESERVA%20VIA%20APP%5D%0A%0ANome%3A%20${nomeUrl}%0AData%3A%20${dataUrl}%0AQuantidade%20de%20pessoas%3A%20${qtdPessoasUrl}`
    );
  };

  return (
    <SafeAreaView style={styleReserva.safeArea}>
      <ScrollView style={styleReserva.scrollStyle}>
        {/* 
        Título da tela
      */}

        <View style={stylePadrao.generalTitleAlign}>
          <Text style={stylePadrao.generalTitleStyle}>Reserva</Text>
        </View>

        <View style={styleReserva.marginAlign}>
          <Text style={styleReserva.descriptionStyle}>Nome:</Text>
          <KeyboardAvoidingView>
            <TextInput
              style={styleReserva.inputStyle}
              placeholder="Digite seu nome"
              value={nome}
              onChangeText={setNome}
            />
          </KeyboardAvoidingView>
        </View>

        <View style={styleReserva.marginAlign}>
          <Text style={styleReserva.descriptionStyle}>
            Selecione um dia para reservar.
          </Text>

          <DateTimePicker
            mode="single"
            date={data.toDate()}
            onChange={dataFormatada}
            locale={"pt-br"}
          />
        </View>

        <View style={styleReserva.marginAlign}>
          <Text style={styleReserva.descriptionStyle}>
            Quantidade de pessoas:
          </Text>
          <KeyboardAvoidingView>
            <TextInput
              style={styleReserva.inputStyle}
              placeholder="Insira o número de pessoas"
              keyboardType="number-pad"
              value={qtdPessoas.toString()}
              onChangeText={(text) => setQtdPessoas(Number(text))}
            />
          </KeyboardAvoidingView>
        </View>

        <View style={styleReserva.alignReservaBtn}>
          <Pressable style={stylePadrao.btn} onPress={linkPronto}>
            <Text
              style={{
                fontFamily: "Montserrat_400Regular",
                fontSize: 20,
                color: "#222",
              }}
            >
              Reservar
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function ReciboFinal() {
  return <></>;
}

export default TelaReserva;
