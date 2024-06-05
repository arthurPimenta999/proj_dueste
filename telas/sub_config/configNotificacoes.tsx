import React, { useState } from "react";
import { View, Text } from "react-native";
import { Switch } from "react-native-switch";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";
import MI from "react-native-vector-icons/MaterialIcons";
import { Divider } from "react-native-paper";
import styles from "../../styles/styles";
import { useTheme } from "../../components/theme";

export default function TelaNotificacoes() {
  const style = styles();
  const { theme } = useTheme();

  const [isActive, setIsActive] = useState(false);

  const [isPushActive, setIsPushActive] = useState(false);
  const [isSMSActive, setIsSMSActive] = useState(false);
  const [isMailActive, setIsMailActive] = useState(false);

  return (
    <View style={style.container}>
      <View style={style.modalTitleAlign}>
        <Text style={style.modalTitleStyle}>Notificações</Text>
      </View>

      <View style={style.modalContentAlign}>
        <View style={style.notifyAlignTitleSwitch}>
          <View style={style.notifyAlignIconText}>
            <MCI name="bell" size={18} color={theme.txtColor} />
            <Text style={style.generalFont400}>Notificações</Text>
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

        <View style={style.notifyAlignTitleSwitch}>
          <View style={style.notifyAlignIconText}>
            <MCI name="cellphone" size={18} color={theme.txtColor} />
            <Text style={style.generalFont400}>Notificações Push</Text>
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

        <View style={style.notifyAlignTitleSwitch}>
          <View style={style.notifyAlignIconText}>
            <MI name="sms" size={18} color={theme.txtColor} />
            <Text style={style.generalFont400}>Notificações SMS</Text>
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

        <View style={style.notifyAlignTitleSwitch}>
          <View style={style.notifyAlignIconText}>
            <MCI name="email" size={18} color={theme.txtColor} />
            <Text style={style.generalFont400}>Notificações de Email</Text>
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
