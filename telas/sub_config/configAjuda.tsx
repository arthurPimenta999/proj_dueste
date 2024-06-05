import React, { useState } from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Divider } from "react-native-paper";
import styles from "../../styles/styles";
import { useTheme } from "../../components/theme";
import { ListItem } from "@rneui/themed";
import Entypo from "react-native-vector-icons/Entypo";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";
import MI from "react-native-vector-icons/MaterialIcons";

export default function TelaAjuda() {
  const { theme } = useTheme();
  const style = styles();
  const { height } = Dimensions.get("window");

  // ----- booleanos de accordion -----

  const [temaExpanded, setTemaExpanded] = useState(false);
  const [falhaExpanded, setFalhaExpanded] = useState(false);
  const [enderecoExpanded, setEnderecoExpanded] = useState(false);

  return (
    <GestureHandlerRootView
      style={[style.container, { paddingTop: height * 0.04 }]}
    >
      <View>
        <View style={style.topTitleAlign}>
          <Text style={style.topTitleStyle}>Ajuda</Text>
        </View>

        <Divider />
      </View>

      {/* view inteira */}

      <ScrollView>
        <View>
          {/* =================== SEÇÃO DE AJUDA - TEMA ESCURO =================== */}
          <ListItem.Accordion
            // conteúdo do cabeçalho da seção. tem um icone e um texto dentro.
            content={
              <ListItem.Content style={{ backgroundColor: theme.screenColor }}>
                <View style={style.AjudaAccordionIcon}>
                  <Entypo name="moon" color={theme.txtColor} size={20} />
                  <ListItem.Title style={style.AjudaAccordionTitle}>
                      Como mudar o tema do app
                  </ListItem.Title>
                </View>
              </ListItem.Content>
            }
            // props da seção
            isExpanded={temaExpanded}
            onPress={() => {
              setTemaExpanded(!temaExpanded);
            }}
            containerStyle={{
              backgroundColor: theme.screenColor,
            }}
          >
            {/* AGOOORA SIM, isso é o que é revelado quando você usa o accordeon. :) */}
            <View style={style.AjudaAccordionContentBG}>
              <View style={style.AjudaAccordionContentAlign}>
                <Text style={style.AjudaAccordionContentText}>
                  Abra a página de configurações. Na seção de Preferências,
                  existe a opção "Modo Escuro". Selecione a opção que desejar.
                </Text>
              </View>
            </View>
          </ListItem.Accordion>

          {/* =================== SEÇÃO DE AJUDA - DENUNCIAR BUG =================== */}
          <ListItem.Accordion
            // conteúdo do cabeçalho da seção. tem um icone e um texto dentro.
            content={
              <ListItem.Content style={{ backgroundColor: theme.screenColor }}>
                <View style={style.AjudaAccordionIcon}>
                  <MI name="bug-report" color={theme.txtColor} size={20} />
                  <ListItem.Title style={style.AjudaAccordionTitle}>
                      Como denunciar uma falha
                  </ListItem.Title>
                </View>
              </ListItem.Content>
            }
            // props da seção
            isExpanded={falhaExpanded}
            onPress={() => {
              setFalhaExpanded(!falhaExpanded);
            }}
            containerStyle={{
              backgroundColor: theme.screenColor,
            }}
          >
            {/* AGOOORA SIM, isso é o que é revelado quando você usa o accordeon. :) */}
            <View style={style.AjudaAccordionContentBG}>
              <View style={style.AjudaAccordionContentAlign}>
                <Text style={style.AjudaAccordionContentText}>
                  Abra a página de configurações. Na seção de Preferências,
                  existe a opção "Modo Escuro". Selecione a opção que desejar.
                </Text>
              </View>
            </View>
          </ListItem.Accordion>

          {/* =================== SEÇÃO DE AJUDA - ENDEREÇO =================== */}
          <ListItem.Accordion
            // conteúdo do cabeçalho da seção. tem um icone e um texto dentro.
            content={
              <ListItem.Content style={{ backgroundColor: theme.screenColor }}>
                <View style={style.AjudaAccordionIcon}>
                  <MCI name="map-marker" color={theme.txtColor} size={20} />
                  <ListItem.Title style={style.AjudaAccordionTitle}>
                      Onde fica a Pizzaria Dueste?
                  </ListItem.Title>
                </View>
              </ListItem.Content>
            }
            // props da seção
            isExpanded={enderecoExpanded}
            onPress={() => {
              setEnderecoExpanded(!enderecoExpanded);
            }}
            containerStyle={{
              backgroundColor: theme.screenColor,
            }}
          >
            {/* AGOOORA SIM, isso é o que é revelado quando você usa o accordeon. :) */}
            <View style={style.AjudaAccordionContentBG}>
              <View style={style.AjudaAccordionContentAlign}>
                <Text style={style.AjudaAccordionContentText}>
                  Abra a página de configurações. Na seção de Preferências,
                  existe a opção "Modo Escuro". Selecione a opção que desejar.
                </Text>
              </View>
            </View>
          </ListItem.Accordion>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
