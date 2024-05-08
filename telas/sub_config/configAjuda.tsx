import React, { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styleAjuda from "../../styles/sub_config/styleAjuda";
import { ListItem } from "@rneui/themed";
import Entypo from "react-native-vector-icons/Entypo";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";

function TelaAjuda() {
  const [temaExpanded, setTemaExpanded] = useState(false);
  const [faqExpanded, setFaqExpanded] = useState(false);

  return (
    <SafeAreaView style={styleAjuda.container}>
      <View style={styleAjuda.titleAlign}>
        <Text style={styleAjuda.titleStyle}>Ajuda</Text>
      </View>

      <View>
        <ListItem.Accordion
          content={
            <>
              <ListItem.Content>
                <View style={styleAjuda.accordionIcon}>
                  <Entypo name="moon" color={"#000"} size={20} />
                  <ListItem.Title style={styleAjuda.accordionTitle}>
                      Como mudar o tema do app
                  </ListItem.Title>
                </View>
              </ListItem.Content>
            </>
          }
          isExpanded={temaExpanded}
          onPress={() => {
            setTemaExpanded(!temaExpanded);
          }}
        >
          <View style={styleAjuda.accordionContentBG}>
            <View style={styleAjuda.accordionContentAlign}>
              <Text style={styleAjuda.accordionContentText}>
                Abra a página de configurações. Na seção de Preferências, existe
                a opção "Modo Escuro". Selecione a opção que desejar.
              </Text>
            </View>
          </View>
        </ListItem.Accordion>
        <ListItem.Accordion
          content={
            <>
              <ListItem.Content>
                <View style={styleAjuda.accordionIcon}>
                  <MCI name="account-question" color={"#000"} size={20} />
                  <ListItem.Title style={styleAjuda.accordionTitle}>
                      Perguntas frequentes
                  </ListItem.Title>
                </View>
              </ListItem.Content>
            </>
          }
          isExpanded={faqExpanded}
          onPress={() => {
            setFaqExpanded(!faqExpanded);
          }}
        >
          <View style={styleAjuda.accordionContentBG}>
            <View style={styleAjuda.accordionContentAlign}>
              <Text style={styleAjuda.accordionContentText}>oiiiiiiiii</Text>
            </View>
          </View>
        </ListItem.Accordion>
      </View>
    </SafeAreaView>
  );
}

export default TelaAjuda;
