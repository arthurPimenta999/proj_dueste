import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  Platform,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useTheme } from "../../components/theme";
import styles from "../../styles/styles";
import { Divider } from "react-native-paper";
import { auth } from "../../apis/firebaseConfig";
import Ionicon from "react-native-vector-icons/Ionicons";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { updateEmail } from "firebase/auth";

export default function EditarDados() {
  const { height } = Dimensions.get("window");
  const { theme } = useTheme();
  const style = styles();

  // pegar OS do celular. mostra icone diferente na bubble de avaliação dependendo
  // da plataforma que o app está rodando

  const OS_Icon =
    Platform.OS === "android" ? "logo-google-playstore" : "logo-apple-appstore";

  const OS_Name = Platform.OS === "android" ? "Play Store" : "App Store";

  // email do usuário

  function UserEmail() {
    const [email, setEmail] = useState<string | null>(null);

    // retorna email do usuario em formato de string.

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setEmail(user ? user.email : null);
      });

      // Limpar a inscrição ao desmontar
      return () => unsubscribe();
    }, []);

    return email;
  }

  // ----- alterar email -----

  const [newEmail, setNewEmail] = useState("");

  function alterarEmail() {
    if (auth.currentUser == null) {
      alert("Entre em sua conta ou faça o cadastro para continuar.");
    } else {
      updateEmail(auth.currentUser, newEmail).then(() => {
        alert(
          "Email atualizado com sucesso! Recarregue a página para ver seu novo email."
        );
      });
    }
  }

  //configurações da modal de alterar email

  const refInfoUpdateEmail = useRef(null);
  const snapPointInfoUpdateEmail = useMemo(() => ["50%", "70%"], []);
  const handleOpenInfoUpdateEmail = () => refInfoUpdateEmail.current?.expand();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <GestureHandlerRootView
        style={[style.container, { paddingTop: height * 0.04 }]}
      >
        <View>
          <View style={style.topTitleAlign}>
            <Text style={style.topTitleStyle}>Perfil</Text>
          </View>

          <Divider />
        </View>

        <View style={style.profileItensAlign}>
          <Text style={style.generalFont600}>Email Cadastrado:</Text>
        </View>

        <View style={style.profileEmailBubbleAlign}>
          <View style={style.profileEmailBubble}>
            <Text style={style.generalFont400}>
              <UserEmail />
            </Text>
          </View>
        </View>

        <View style={style.profileItensAlign}>
          <Text style={style.generalFont600}>Nos avalie na {OS_Name}!</Text>
        </View>

        <View style={style.profileReviewAlign}>
          <View style={style.profileReviewStyle}>
            <View style={style.profileReviewRow}>
              <Ionicon name={OS_Icon} color={theme.txtColor} size={25} />
              <Text style={style.generalFont400}>Abrir a {OS_Name}</Text>
            </View>
          </View>
        </View>

        <View style={style.profileUpdateEmailAlign}>
          <View style={style.profileButtonRow}>
            <Pressable onPress={() => auth.signOut()}>
              <View style={style.securityButton}>
                <Text style={style.defaultButtonText}>Sair</Text>
              </View>
            </Pressable>

            <Pressable onPress={handleOpenInfoUpdateEmail}>
              <View style={style.securityButton}>
                <Text style={style.defaultButtonText}>Alterar Email</Text>
              </View>
            </Pressable>
          </View>
        </View>

        <BottomSheet
          ref={refInfoUpdateEmail}
          index={-1}
          snapPoints={snapPointInfoUpdateEmail}
          enablePanDownToClose={true}
          style={style.modalStyle}
          backgroundStyle={{ backgroundColor: theme.screenColor }}
          handleIndicatorStyle={{ backgroundColor: theme.txtColor }}
          backdropComponent={BottomSheetBackdrop}
        >
          <View>
            <View style={style.modalTitleAlign}>
              <Text style={style.modalTitleStyle}>Alterar Email</Text>
            </View>

            <View style={style.profileItensAlign}>
              <Text style={style.generalFont600}>Digite o novo Email:</Text>
            </View>

            <KeyboardAvoidingView>
              <View style={style.profileNewEmailAlign}>
                <View style={style.profileNewEmailStyle}>
                  <TextInput
                    selectionColor={"#d69e04"}
                    style={style.profileNewEmailInput}
                    autoCorrect={false}
                    placeholder="Email novo"
                    placeholderTextColor={theme.placeholderColor}
                    value={newEmail}
                    onChangeText={(value) => setNewEmail(value)}
                  />
                </View>
              </View>
            </KeyboardAvoidingView>

            <View style={style.profileUpdateEmailAlign}>
              <Pressable onPress={alterarEmail}>
                <View style={style.securityButton}>
                  <Text style={style.defaultButtonText}>Alterar Email</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </BottomSheet>
      </GestureHandlerRootView>
    </TouchableWithoutFeedback>
  );
}
