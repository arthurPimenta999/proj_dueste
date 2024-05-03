import React from "react";
import { View, Text, Dimensions, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styleSeguranca from "../../styles/sub_config/styleSeguranca";
import Ionicon from "react-native-vector-icons/Ionicons";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";
import FA from "react-native-vector-icons/FontAwesome";
import { useFonts } from "@expo-google-fonts/montserrat";
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import stylePadrao from "../../styles/stylesDefault";

function EditarSeguranca() {
  const { width, height } = Dimensions.get("window");

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={stylePadrao.container}>
      <View style={stylePadrao.titleAlign}>
        <Text style={stylePadrao.title}>Segurança e Login</Text>
      </View>

      <View style={stylePadrao.contentAlign}>
        <View style={styleSeguranca.sectionAlign}>
          <View style={styleSeguranca.iconAlign}>
            <Ionicon name="mail" size={20} />
            <View
              style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
            >
              <Text style={styleSeguranca.sectionTitle}>Email:</Text>
              <Text style={styleSeguranca.sectionContentText}>
                usuario.testesilva123@teste.com
              </Text>
            </View>
          </View>
        </View>

        <View style={styleSeguranca.sectionAlign}>
          <View style={styleSeguranca.iconAlign}>
            <MCI name="key" size={20} />
            <View
              style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
            >
              <Text style={styleSeguranca.sectionTitle}>Senha:</Text>
              <Text style={styleSeguranca.sectionContentText2}>
                ••••••••••••••••••••••
              </Text>

              <View style={styleSeguranca.sideMargin}>
                <Pressable>
                  <View style={styleSeguranca.senhaButton}>
                    <Text style={styleSeguranca.sideText}>Alterar</Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default EditarSeguranca;
