import React, { useState } from "react";
import { View, Text } from "react-native";
import styleNotificacoes from "../../styles/sub_config/styleNotificacoes";
import stylePadrao from "../../styles/stylesDefault";
import { Switch } from "react-native-switch";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";
import MI from "react-native-vector-icons/MaterialIcons";
import { Divider } from "react-native-paper";

export default function TelaNotificacoes() {
  const [isActive, setIsActive] = useState(false);

  const [isPushActive, setIsPushActive] = useState(false);
  const [isSMSActive, setIsSMSActive] = useState(false);
  const [isMailActive, setIsMailActive] = useState(false);

  return (
    <View style={stylePadrao.container}>
      <View style={stylePadrao.titleAlign}>
        <Text style={stylePadrao.title}>Notificações</Text>
      </View>

      <View style={styleNotificacoes.container}>
        <View style={styleNotificacoes.alignTitleSwitch}>
          <View style={styleNotificacoes.alignIconText}>
            <MCI name="bell" size={18} />
            <Text style={styleNotificacoes.notificationTitle}>
              Notificações
            </Text>
          </View>

          <Switch
            value={isActive}
            onValueChange={(value) => setIsActive(!isActive)}
            circleSize={30}
            barHeight={30}
            circleBorderWidth={3}
            activeText={""}
            inActiveText={""}
            backgroundActive={"#4caf50"}
          />
        </View>

        <Divider bold={true} />

        <View style={styleNotificacoes.alignTitleSwitch}>
          <View style={styleNotificacoes.alignIconText}>
            <MCI name="cellphone" size={18} />
            <Text style={styleNotificacoes.notificationTitle}>
              Notificações Push
            </Text>
          </View>

          <Switch
            value={isPushActive}
            onValueChange={(value) => setIsPushActive(!isPushActive)}
            circleSize={30}
            barHeight={30}
            circleBorderWidth={3}
            activeText={""}
            inActiveText={""}
            backgroundActive={"#4caf50"}
          />
        </View>

        <View style={styleNotificacoes.alignTitleSwitch}>
          <View style={styleNotificacoes.alignIconText}>
            <MI name="sms" size={18} />
            <Text style={styleNotificacoes.notificationTitle}>
              Notificações SMS
            </Text>
          </View>

          <Switch
            value={isSMSActive}
            onValueChange={(value) => setIsSMSActive(!isSMSActive)}
            circleSize={30}
            barHeight={30}
            circleBorderWidth={3}
            activeText={""}
            inActiveText={""}
            backgroundActive={"#4caf50"}
          />
        </View>

        <View style={styleNotificacoes.alignTitleSwitch}>
          <View style={styleNotificacoes.alignIconText}>
            <MCI name="email" size={18} />
            <Text style={styleNotificacoes.notificationTitle}>
              Notificações de Email
            </Text>
          </View>

          <Switch
            value={isMailActive}
            onValueChange={(value) => setIsMailActive(!isMailActive)}
            circleSize={30}
            barHeight={30}
            circleBorderWidth={3}
            activeText={""}
            inActiveText={""}
            backgroundActive={"#4caf50"}
          />
        </View>
      </View>
    </View>
  );
}
