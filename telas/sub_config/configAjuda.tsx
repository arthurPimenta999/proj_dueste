import React, { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styleAjuda from "../../styles/sub_config/styleAjuda";
import { ListItem } from "@rneui/themed";
import Entypo from "react-native-vector-icons/Entypo";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";
import MI from "react-native-vector-icons/MaterialIcons";

function TelaAjuda() {
  const [temaExpanded, setTemaExpanded] = useState(false);
  const [falhaExpanded, setFalhaExpanded] = useState(false);
  const [faqExpanded, setFaqExpanded] = useState(false);
  const [enderecoExpanded, setEnderecoExpanded] = useState(false);

  return (
    <SafeAreaView style={styleAjuda.container}>
      <View style={styleAjuda.titleAlign}>
        <Text style={styleAjuda.titleStyle}>Ajuda</Text>
      </View>

      <View>
        {/* tema escuro */}

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

        {/* denunciar bug */}

        <ListItem.Accordion
          content={
            <>
              <ListItem.Content>
                <View style={styleAjuda.accordionIcon}>
                  <MI name="bug-report" color={"#000"} size={20} />

                  <ListItem.Title style={styleAjuda.accordionTitle}>
                      Como denunciar uma falha
                  </ListItem.Title>
                </View>
              </ListItem.Content>
            </>
          }
          isExpanded={falhaExpanded}
          onPress={() => {
            setFalhaExpanded(!falhaExpanded);
          }}
        >
          <View style={styleAjuda.accordionContentBG}>
            <View style={styleAjuda.accordionContentAlign}>
              <Text style={styleAjuda.accordionContentText}>
                Abra a página de configurações. Na seção Ajuda e Feedback,
                existe a opção "Feedback". Lá você pode enviar não só denúncias
                de falhas e travamentos do app, mas também suas opiniões e o que
                você acha do app. Conte pra gente o que você está achando do
                app!
              </Text>
            </View>
          </View>
        </ListItem.Accordion>

        {/* denunciar bug */}

        <ListItem.Accordion
          content={
            <>
              <ListItem.Content>
                <View style={styleAjuda.accordionIcon}>
                  <MCI name="map-marker" color={"#000"} size={20} />

                  <ListItem.Title style={styleAjuda.accordionTitle}>
                      Onde fica a Pizzaria Dueste?
                  </ListItem.Title>
                </View>
              </ListItem.Content>
            </>
          }
          isExpanded={enderecoExpanded}
          onPress={() => {
            setEnderecoExpanded(!enderecoExpanded);
          }}
        >
          <View style={styleAjuda.accordionContentBG}>
            <View style={styleAjuda.accordionContentAlign}>
              <Text style={styleAjuda.accordionContentText}>
                A Pizzaria Dueste fica na Avenida Paulo Emanuel de Almeida,
                Nº910, Parque dos Eucaliptos. Você também pode abrir o endereço
                direto no Google Maps usando o botão "Endereço" da tela
                principal!
              </Text>
            </View>
          </View>
        </ListItem.Accordion>

        {/* faq */}

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
