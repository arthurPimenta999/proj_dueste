import React, { useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  Linking,
  ScrollView,
} from "react-native";
import styles from "../../styles/styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Divider } from "react-native-paper";
import { useTheme } from "../../components/theme";
import { auth } from "../../apis/firebaseConfig";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";

// datetimepicker
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import "dayjs/locale/pt-br"; // se algum nome ou formato estiver errado, alterar as strings em pt-br.js

export default function TelaReserva() {
  const { height } = Dimensions.get("window");
  const style = styles();
  const { theme } = useTheme();

  // informações de reserva
  const userEmail = auth.currentUser?.email;

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

    if (qtdPessoas == 0) {
      alert("Selecione a quantidade de pessoas.");
    } else {
      Linking.openURL(
        `https://api.whatsapp.com/send?phone=5515996280197&text=%5BRESERVA%20VIA%20APP%5D%0A%0ANome%3A%20${nomeUrl}%0AData%3A%20${dataUrl}%0AQuantidade%20de%20pessoas%3A%20${qtdPessoasUrl}%0AEmail%20do%20usuário%3A%20${userEmail}`
      );
    }
  };

  //configurações da modal de info sobre email

  const refInfoEmail = useRef(null);
  const snapPointInfoEmail = useMemo(() => ["15%", "17%"], []);
  const handleOpenInfoEmail = () => refInfoEmail.current?.expand();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <GestureHandlerRootView
        style={[style.container, { paddingTop: height * 0.04 }]}
      >
        <View>
          <View style={style.topTitleAlign}>
            <Text style={style.topTitleStyle}>Reserva</Text>
          </View>

          <Divider />
        </View>

        {/* view inteira */}

        <ScrollView>
          {/* ===== INPUT DE NOME ===== */}

          <View style={style.reservaSubtitleAlign}>
            <Text style={style.generalFont600}>Digite seu nome:</Text>
          </View>

          <View style={style.reservaInputAlign}>
            <TextInput
              spellCheck={false}
              style={style.defaultInputStyle}
              onChangeText={(text) => setNome(text)}
              value={nome}
              placeholder="Digite seu nome"
              placeholderTextColor={theme.placeholderColor}
              selectionColor={"#d69e04"}
              autoCapitalize="none"
            />
          </View>

          {/* ===== INPUT DE QUANTIA DE PESSOAS ===== */}

          <View style={style.reservaSubtitleAlign}>
            <Text style={style.generalFont600}>Quantas pessoas vão?</Text>
          </View>

          <View style={style.reservaInputAlign}>
            <TextInput
              keyboardType="decimal-pad"
              spellCheck={false}
              style={style.defaultInputStyle}
              onChangeText={(text) => setQtdPessoas(text)}
              value={qtdPessoas}
              placeholder="Insira quantidade de pessoas"
              placeholderTextColor={theme.placeholderColor}
              selectionColor={"#d69e04"}
              autoCapitalize="none"
            />
          </View>

          {/* ===== EMAIL DO USUÁRIO PARA IDENTIFICAÇÃO ===== */}

          <View style={style.reservaSubtitleAlign}>
            <View style={style.reservaInfoIconAlign}>
              <Text style={style.generalFont600}>Email do usuário</Text>
              <Pressable onPress={handleOpenInfoEmail}>
                <Foundation
                  name="info"
                  size={25}
                  style={{ justifyContent: "flex-end" }}
                  color={theme.txtColor}
                />
              </Pressable>
            </View>
          </View>

          <View style={style.reservaInputAlign}>
            <View style={style.reservaUserEmail}>
              <Text style={style.generalFont400}>{userEmail}</Text>
            </View>
          </View>

          {/* ===== INPUT DE QUANTIA DE PESSOAS ===== */}

          <View style={style.reservaSubtitleAlign}>
            <Text style={style.generalFont600}>Selecione uma data:</Text>
          </View>

          <View style={style.reservaDTPAlign}>
            <DateTimePicker
              mode="single"
              date={data.toDate()}
              onChange={dataFormatada}
              locale={"pt-br"}
              selectedItemColor="#d69e04"
              headerTextStyle={{
                fontSize: 20,
                fontFamily: "Mont400",
                color: theme.txtColor,
              }}
              weekDaysTextStyle={theme.txtColor}
              calendarTextStyle={{ fontSize: 16, color: theme.txtColor }}
              headerButtonColor={theme.txtColor}
              displayFullDays={true}
              headerButtonsPosition="left"
            />
          </View>

          <View style={style.reservaHorarioAlign}>
            <View style={style.reservaHorarioStyle}>
              <View style={style.reservaHorarioRow}>
                <Ionicons name="warning" color={"#fff"} size={25} />
                <Text style={[style.generalFont400, { color: "#fff" }]}>
                  O horário de funcionamento do restaurante é das 18h às 23h.
                  Caso o cliente não chegue em 1h30min a partir do início das
                  atividades do restaurante, a reserva será automaticamente
                  cancelada.
                </Text>
              </View>
            </View>
          </View>

          <View style={style.reservaFinishButtonAlign}>
            <Pressable style={style.defaultButtonStyle} onPress={linkPronto}>
              <View style={style.defaultButtonInside}></View>
              <Text style={style.defaultButtonText}>   Finalizar   </Text>
            </Pressable>
          </View>
        </ScrollView>

        {/* 
          modal estilo bottom-sheet - info sobre email
        */}

        <BottomSheet
          ref={refInfoEmail}
          index={-1}
          snapPoints={snapPointInfoEmail}
          enablePanDownToClose={true}
          style={style.modalStyle}
          backgroundStyle={{ backgroundColor: theme.screenColor }}
          handleIndicatorStyle={{ backgroundColor: theme.txtColor }}
          backdropComponent={BottomSheetBackdrop}
        >
          <View style={style.modalContentAlign}>
            <View style={style.modalTitleAlign}>
              <Text style={style.modalTitleStyle}>Por que meu email?</Text>
            </View>
            <Text style={style.modalContentStyle}>
              Usaremos seu email para identificação, segurança e verificação de
              usuário.
            </Text>
          </View>
        </BottomSheet>
      </GestureHandlerRootView>
    </TouchableWithoutFeedback>
  );
}
