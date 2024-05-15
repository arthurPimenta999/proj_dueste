import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import styleEditar from "../../styles/sub_config/styleDados";
import stylePadrao from "../../styles/stylesDefault";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserEmail, auth } from "../../apis/firebaseConfig";

function EditarDados() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={stylePadrao.generalTitleAlign}>
        <Text style={stylePadrao.generalTitleStyle}>Perfil</Text>
      </View>

      <View style={styleEditar.container}>
        <View style={styleEditar.databoxAlign}>
          <Text style={styleEditar.generalFont600}>Nome de usuário:</Text>
          <View style={styleEditar.databoxStyle}>
            <Text style={styleEditar.generalFont400}>
              <UserEmail />
            </Text>
          </View>
        </View>

        <View style={styleEditar.databoxAlign}>
          <Text style={styleEditar.generalFont600}>Email cadastrado:</Text>
          <View style={styleEditar.databoxStyle}>
            <Text style={styleEditar.generalFont400}>
              <UserEmail />
            </Text>
          </View>
        </View>

        <View style={styleEditar.alignSair}>
          <Pressable style={stylePadrao.btn} onPress={() => auth.signOut()}>
            <Text
              style={{
                fontFamily: "Montserrat_400Regular",
                fontSize: 20,
                color: "#222",
              }}
            >
              Sair
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default EditarDados;
