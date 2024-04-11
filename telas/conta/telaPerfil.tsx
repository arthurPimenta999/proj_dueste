import * as React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useFonts } from '@expo-google-fonts/montserrat';
import { Montserrat_400Regular, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

function TelaProfile() {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
      })
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    
    return(
        <SafeAreaView>
            <View>
                <View>
                    <Text>oiiii rsrsrs</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default TelaProfile;