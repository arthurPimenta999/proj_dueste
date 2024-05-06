import React from "react";
import { View, Text, ScrollView, Switch } from "react-native";
import styleNotificacoes from "../../styles/sub_config/styleNotificacoes";
import stylePadrao from "../../styles/stylesDefault";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";
import MI from "react-native-vector-icons/MaterialIcons";
import { Divider } from "react-native-paper";

function TelaNotificacoes() {
  return (
    <View style={stylePadrao.container}>
      <View style={stylePadrao.titleAlign}>
        <Text style={stylePadrao.title}>Notificações</Text>
      </View>

      <ScrollView>
        <Divider bold={true} style={styleNotificacoes.dividerMargin} />

        <View style={styleNotificacoes.switchAlign}>
          <View style={styleNotificacoes.singleAlignIcon}>
            <MCI name="bell" size={20} />
            <Text style={styleNotificacoes.titleStyle}>Notificações</Text>
          </View>

          <View>
            <Switch style={styleNotificacoes.singleSwitchSpacing} />
          </View>
        </View>

        <Divider bold={true} style={styleNotificacoes.dividerMargin} />

        {/* 
        título de cada tipo de notificação
      */}

        <View style={styleNotificacoes.switchAlign}>
          <View>
            <View style={styleNotificacoes.alignSections}>
              <View style={styleNotificacoes.alignIcon}>
                <MCI name="cellphone" size={20} />
                <Text style={styleNotificacoes.titleStyle}>
                  Notificações Push
                </Text>
              </View>
            </View>

            <View style={styleNotificacoes.alignSections}>
              <View style={styleNotificacoes.alignIcon}>
                <MCI name="email" size={20} />
                <Text style={styleNotificacoes.titleStyle}>Email</Text>
              </View>
            </View>

            <View style={styleNotificacoes.alignSections}>
              <View style={styleNotificacoes.alignIcon}>
                <MI name="sms" size={20} />
                <Text style={styleNotificacoes.titleStyle}>SMS</Text>
              </View>
            </View>
          </View>

          {/* 
        switches de cada tipo de notificação
      */}

          <View>
            <Switch style={styleNotificacoes.switchSpacing} />
            <Switch style={styleNotificacoes.switchSpacing} />
            <Switch style={styleNotificacoes.switchSpacing} />
          </View>
        </View>

        <Divider bold={true} style={styleNotificacoes.dividerMargin} />
      </ScrollView>
    </View>
  );
}

export default TelaNotificacoes;
