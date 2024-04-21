import { View, Text, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styleCardapio from "../styles/stylesCardapio";
import { useFonts } from "@expo-google-fonts/montserrat";
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { Card } from "react-native-paper";
import * as React from "react";
import stylePadrao from "../styles/stylesDefault";
import Ant from "react-native-vector-icons/AntDesign";

function TelaCardapio() {
  const navigation = useNavigation();

  {
    /*
  useFonts pra carregar fonte externa e AppLoading pra deixar a tela carregando.
  só parar de carregar a tela quando a fonte estiver 100% pronta pra uso.
  ~Stardust
  */
  }

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView>
      {/* cabeçalho */}

      <View style={stylePadrao.textTopAlign}>
        <Text style={stylePadrao.textTop}>Cardápio</Text>
      </View>

      {/*
      botão que leva pra tela Index
      ~Stardust
      */}

      <Pressable
        style={stylePadrao.backBtn}
        onPress={() => navigation.navigate("Início")}
      >
        <Ionicon name="arrow-back" size={18} color={"#333"} />
      </Pressable>

      <ScrollView style={stylePadrao.scrollStyle}>
        {/*
      barra de pesquisa da página de configurações
      ~Stardust
      */}

        <View style={stylePadrao.searchBarAlign}>
          <View style={stylePadrao.searchBar}>
            <Ant name="search1" size={20} color={"#333"} />
          </View>
        </View>

        {/* cartões de sabores e itens no cardápio */}
        <View style={styleCardapio.pizzaTitleAlign}>
          <Text style={styleCardapio.pizzaTitleStyle}>Pizzas salgadas</Text>
        </View>

        <View style={styleCardapio.cardsAlign}>
          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://casbri.com.br/wp-content/uploads/2019/07/alhofrito_57e575f2d901c.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Alho e óleo"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Mussarela e alho frito.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://www.redelevepizza.com.br/assets/imagens/pizzas/006/americana-assada.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Americana"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Milho, mussarela, cebola e bacon.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>

          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXFxoYGRgYGBoaHxgZHR0YGBoZHSAgHiggIB4lGxoXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy8lICUtLS8vNTAvLS0tNS0tLS0uLSsuLS8tLS0vLS0tLS0tLS0tNS0tLS0tLS0tLS0tLS0tLf/AABEIAJwBRAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xABCEAABAwIEAwYEBAUDAwIHAAABAgMRACEEBRIxQVFhBhMicYGRMqHB0UJSsfAHFCPh8WJyghUzkkOyFjRTY4Oi0v/EABoBAAMBAQEBAAAAAAAAAAAAAAIDBAEABQb/xAAzEQACAgEDAgIIBgEFAAAAAAABAgARAxIhMQRBEyIyUWFxkaGx8BRCgcHR4QUjM1Jiwv/aAAwDAQACEQMRAD8AjeW0ylCW2+9k+NS9xPBIP+auQy/CqwSXUNkaha2k+vraqclKChfeCCEWSOKiQBeRsDNbt5hiA33SFuqbvpSbkC/HevkVKkEEbw/dBXcJhllUtOA2vKeFxuIjat/57CtQBhTyE6foOZn1pLmKylUFBBtYyOPW/saDTl7jkHTAkRJiL8J2qlcII87Gvef5iTYO0tqcyZF04ZM9XDb52qJ3P1C7bbSCLToBPuSTSptGidbrfUJgkTbhPE0xHZ/EO2SCNt4H6XpQ6VS3BPvs/WFzzAMVj3XwUuvOXJICYj1A680nepWkRpErKdMmDqV1G448Y4+lNcH/AA7cQe8edS2N+f6kfpSXGJaS4UB3vGwoeICDHGOEi8GqMmHQAAKENJOxiouFHaI5kmBxgnn6017O5Y2+vvnAlIaUoqmBqX+FPpc0gx2WFterXrbMqBII8O4nrH18qLyTFOEFoeFtxYW5PFIChoHmopE9DUuVAcZKGvb7O/365ficggSZthbh1LB1Y5xJHMMpukDlIv69ac4jMW3Ma46YGHwDSgANisDxkD2QKRYntBC3sUm+gFnDjms2Kx/yk+SBS9LDKGm29ap+J4i/eKBkJN/zDUfICiGLa227bduL+VLK93O3aHfzKnCe9tJOKxSpsCRKG/8AigAR1FFYLHuMYZ3GKTD+LPdsp4oSZ0pSCdkpvHMnnS9LrXdrQu/eK1LO2qDITvOmwt0FNDnBXphCl6RCfDAT5E7VtngLe+/37/kBGnFtuQBDcr7K4dDaMPiCfCA64Zspy+lNx4ouY6poPD5epXeOLSELcKUaQdWlpMJiRbUUjhaVdK1D7yjCQlJ5CVn2FGoyd1Ud44q/CQPkDYVxx9Qb1UL+/rB1YlPJMNcxKEPB4JSnQjQlNgASSVLMXJNh0E86WNON944Ukqcd+MgqMxwtYDpUOLYQ2QnQlSjz1KnpxuaZZU+nulr7qDcSBG3AevIUIwt3Y/Sccyr6Kxe1iWWCNLOhSBA8ABSCNgTe4qZrM3HLNMurv+AEifQVtgcxT3t2wTEqJSJAkAXPE8uVWnLM7CVaSoEH8IERyj7US40Yea/1MF8zDgCVxGVY9z4cIsDmtSUx/wCShQuLyzMGgdWEVF7pKFf+1RNdEfxylJOlR6WEH5ikOIbxSlBWkLiYBUAOlidh570xsGNRstxSdXkJ3IlRaXiyjUlroUqASob8FRIgA2/MOsFZSxingsqAbCTpAWgypUTCRExtfrTxvJ3pVr2IkbEpUSZAvteazD4F8yNR0jcglJ94/tXDAlejGnqj2MrRVjo/+VcN90t6p9pkdaIw+GxriVKGFI076ihB9lKFWnL2nRiCpRPd93pCJEFUghZM+YgDjRaWXy6XEKQGybpvJHIjasbpk2IWd+Lb1iUJSsSIBwrhtPhTqt10gx615/MuccM+P/xL/wD5rqD+M7sFbgQkATqEi3U8KF/+KUqQpaJVpTqsREczyrW6bCBvBHWZTwJznBAPvIZghSzYLSeAKjYxwBq7YTsky0vW40lxW8mQCZkeEWgcjNNsvcW8EuuzO6Em2kHYqH5qJexABuafiwqouIzdS7GpsnGE27tQHO0frNDqWCoRpHO1yOQ+9Q43EgC1z5/u1KMStZhXdkKveZiJv6wPemttELvLG44gbge1BrcSqQhUEcopM6h11gpcSUFQg6VTHUc/lUWT5eEOqUVlVoSICffrahYkkUIaotGzvN8zzFQWAL2KbG44nfgfa16nwj7oKQUkBXEkEX22sBXmLylLj2stgwJ1alJM+Qt60Hi8ItszrOk2jUbHh/iKDVkU2Lh6UYVHqMWCATYKAIPAg3B9jUgUDtVayl58ApKxA2nYkHTF+n6CjsFqQT35Lc/CoERPI7gk+lVp1QI8wr6SdsBB2NxyKhzfBB7DvNfnbUB57j5gV6vUgSfEn8yQfcj7E1NhMUg+IKEDczt58qoDBhtEkETkXZNgFjWNlrWoeUwPkBXtM/8AquGSVJbWNAWvT5ajtzHWsryMiEudp6CtsIFiWlJPitIncGxuNutHZF2gdwrhWgoIiCFAm29to96ADWoShtZM34j9N6CcSQSCIIsQamxkg2DuJ5lVLB2p7cvYhIQWWgB+IEqPlvHuDVCfWqTAP2mnDiRHOhFMg7z96tXLZttzAYXFQw83Jgf54VYMB2vxOHaDTbthsowVAWsJm3vQS2geA2/fCtHcAkxAPzpvig8zAAu8DzTN3njLzq3LzpKjE+UxUuWvwBq57fOjP+jayEtJK1EXSPw+Z29ae5V2XQ2JeUFEX0iYHmdz8qDN1OIJR/uU4MD5Ttx6+00wOIUtBQhM3+KT8wTp/wA0S1lx8RWvcQdJ29fK1aZr2maaGhEKI2AsBSXLG8ZmT3dNAqi6jMIbTzUfpueAqLHgy5NwNI+c9MYUxbsbMmxfdIHdtGQLQLgepplkPZLE4ogpSUIN9ZBCefxEXnpNdD7N9isLgwkrAedt41gAA/6E7D1k9aMxuejvAANcSQkGw5KN9vOqyq4hubgeOz7IKErWW/w503W62k9AXD7mI9qaNdm8IFaSXXiNyVHSDyhAA9DNGYvEqWnX3gCDbwnxHoIsONzSrBZmlAWpsBGpWki6pIjheDB3EcKA5zentFhWIsneNP5BMFLOlCRwSL+23zr0Za0hAKgVqG5kkn0H6UJjMFiXkylETGm8ab78OE+9MXcu8SU+M3kkKtzjy8qYq96iia7wFvLkqWlYBEGYMgdLVvispQuAuYBKpB0yT1F/anjuHFJc3ycOwA6pBH5SPramFABxBVrO5i57LsGhUBtAWrjJkxtJma2Zy9pmSlsI1HUTvPW969fyvDtlBUkrUAATe/UgAAn/ABRzuIE3Ag7G/sRFqHbgw2PqnkEC+x2vFQl0n4Ve/wBqKUEmx96j/lhPhooqeLfI4/KtDj7hIO9oHlWP4X350tZy5QJsLmdWyqF9XaGunvGTmAKrgqTPKmmCQEgAE2/d6FwogQd+poknrRCu0AkzfErERStnLECVFKTPAJAJO9yKldUSYG9Gss+ETfpzrNOo7zQxHE1RiSQJgHiBf51C+ygqB22i/H9zUrgSk7xxig8Rm7SLKPlY36bb0RIA3mhWJ2EIGXJEkfEeM8OX6Un7Q4p1CIZ0lzqoJCb7mmicUFCRtypE+UOO6UquDdHEm39qXlJFaYeNbPm7RlgS+UJ74jVABgzfiRHA7870K68pt2SCUEbgTBp5hcOSAVi9EtpjhRlTW0ENR4lUx/aHSQkJIB/EqYI4gcZNEYjBd60UrkzcTIjiOoqzPJihlCd6xcZ/MbhnIKGkVKvlaXVkhYjSs25c45zzp+EjRoUNxcGicOwBM8a3UhKf70SIFFCLZyTFjecd0rQrbboBzsPlUuOypt8akBJkXHBfQ0szzDtq4X3JHLl868yvS24QkrTpAF5AV771MHyLkobiPZEZL4M5dngw+FeU04h7VJMBSU6RJATcEmI34iKyur5ovDOr1PNMOLAiVoSSBe1weZ96yrhmx9xEaWlHeWWndC/CuCQDB6nxbepHSaJcxLZV/XQlS4AFiBEbeC3Lrapn+wCdSi3iFp1aiElIISSdXD9eW/Wv5t2UxjSRpcOkfiamYjSAfQ7RzqR/8eL5qKNdo9y7D4cKBbxBQqb2SQNuBHP988zDJVuKKgsEbAgJE+gMT86p6FYhJupKgOC20j3ISCfXl50PmAdJ8IbGwAAIm/C88evCk/gn1WH/AH/iKcWK0yzOZJpPicCSOqQf186Jw2QoVClqOnnMk+X3pZkmRBEOYhKVubhG4SeEzur5DrROe9ou6EC6+U7UtlfVoVrPwlnTdAvpZBGmJzJnCtkCEDkNyevOqPnXah17wyUp5Dc+dJ8djVrUVLVJPE037IdjcTmCpbGhkK0rdMQnjAEyTHK3MircHRInnfcz0WyBBQ2Ej7I9nXcxxAZbOlIGpxwgkNp5nqdgOPoa+hMjyljBMBjDiAm6lWlSuKlniT/YWFA4PLWcvwwYw/hA3URqUtXFao3PtyFhFA4psuJ1nEHSkzp0xqI2THXyrs3Ui9C/USQqcnmPEY5jmKSQNcg2sYBoNjItKVKbTJKbErurkJgWGwFVxWepUUpkBRUdIKNccJiQBF7k8OEVesgfU63NyAY1EAbb2B6/pSMA1sdU7KDjUVK/l2RPrZWlyWSqQRrCv+QiQD+/I7DN4fABR0BIPiU4qTKiYJnYen1q0oQIoPMMuadSUOJC0xcHaP3wqlcYHEnOUk78TTDZj3oCkQUHiKhx+ZIbBlV4qVpASA0lISkCwFgkRSvFNNDlr4KN48q1yQu0FQCZojPNSf8AuJA1AE7xPymp1uN6yUKCjYFRHHoKombY3MQ4oEAtTCVOaEiN5TuVe3tRTWYvANNHWRFyjTcn8RJ/CAD02pHiFRTffzlJw3uJckhJ3SfMx72NEYbDNR4R7/3pPludtuoGm8CJAF+tqasPQJIPpvTQe8nYVtJ3UJoaAJ6VviFEkgJgedCIwOpWpU2EC9vWjN9oO02LgO1eoHOomWlpUbyOHD5RRqRP4ffhQg6uZrCoOvEoBjjyqDFKGmQfat3MBpOrjH2+1Qd0pStIFjvQEkDebt2k2TtFcrNhtenUCofC0gRvy+tLk5ikxqsTwpo2ABMyiYXiWATqkzHy5VUsXnJ1d3oIGojVAIJBsfWP71Y38UAI4EG80j/nERpMSJPMH1pGdyuwMow8bi4TlGOK5Ck8YkUatlkLKyhOqI1Rf3pGMcENKcEmF8BMTF/3zrbsu8rEFxaiSkERO3GY+VZjdjQPeY4G5EtbD1t7c62deAEk0uecSlO/ECvXnkFG4JBqkHtEQ5vFJNtzQynDrVba8/T5UGxa4Mcf7V5nGMWlsloBaypIAmBBUASegBJ9K7kVNBqG/wAydvpUDjSyZO1RZhjEMpSSZuBO+9rx50szrEPvYZxOF/7h8OsyAgESTMcrDqRW+GPzGYCb2la7Wdum2itvDBK3LpK+CT0t4oPDz5VQcZ2pxyzKn1gC0JOkdbDn9ajGQ4lCigsOSDB8KiPcWPvXuOwC2jpdQUnhPGmjQpoS5MS1IBmqzdSlE89R+9ZQysNXtbSRm8+hja1o8wOIj8XmfStVXIi42+Im/orkR+95UyLDkPzfQkf49RE4raxPG88zzT5bn9afPIgmNyltySodbBVtxwnlPr5VVnMG224ShRMWBmR6T7TVhzfGlKSgbrurawM8Y4/TrVVzXHBpsqMz+G+5rz+qcE6BLOmxfmMB7QZyGhCY1kf+Iqiv4gqJJN+dSYzEFxRUTM7n98KbdnMk71QWv4QfCk/iP2osaLgS25+9pYWJ2El7J9ll4txAV4UqIieI513rD4ZrCMBppMJTYAD4jzP3pD2NwgCioD4E28zafaaO7S4wJF9gLRck8IjjSsmUhdRk5ByPpE0Q6oklcAWiDf8AsK9dSFBSTpCSIud/eq9gMwU6otdzJg7m45E8xPLYkVYUOtoCEOqSVEBJuFCSYAHM7D3rzn6bXVfOObJp2I3geWdk2VO96gFRTbWSDptBCR5SBVvwzSG0aGxp3I3+I3JPMk0izTMwwz4FpCwoesG4MW51mV5srElSkiUEBKoMFB39PSrsZVDp5Mmyl8g1HiN20BBMrMq9P81MdrGaCdyhKyCXFwNrj7UYGwkQDTgTJzFuNxaGYUpW5Iknbzpct5tSgVlQN4AI296Nx+XIcPjcXEfAIAPXYn2itXMjbVCglIMg38Q4cCYHmKW6uTtxGKVA3iHMMjffxPemCwhNgTKifygSIPXyoZrLHzpUnDrTEIAufD8OxPKL+tXhHg/FYcLfrXqsaLwofvyNY2BSbMMZ2AoRD2Xywsp0ONJQvUTpQSoAEzckb3NqecTb1rVp6AYWJVxjb50JisuUUkIXJNiriT06bbU7gbbxROo7zDjmlq0AgnnTBloAVSGsicZUAp8OCZ+EpG3mbzPHjsKt2GdCUC8+V56UpGeyGhZEUVpMmc6XjhWhxXACoG2VeJazawSPKb8+I9qCU+lJuZPIc6ImhZghZPicTprzBYtCVajO2/DzpdmmE75MBSkT7+9TjBafiSFCITYeE2k8+EepoDqvaGAtbxs+lSpO8xBm3nVZzVJGoIP9RWyosn0nf+1MFuOpRCAd4jlbcSIA862wmWpQCpRC1LEqVz6dPatazsJqhQLJgCm3XWkpN1AXIki48hSwZe4ltCVtkqBiRIsTx6VaUPNpSEpOkRAg8NgKEW0tQCkaSmbTx/f0FCyqTfM1W/SEYLJE6IWqxEaU2Hl1oxjKm2xCRA5CwoRnHFseMafn+lMGMalYkGmAqdoog8yQstx8IqLSBtA9BQuMxB4JJ6wa1bWIkWJ3k8fXzogRcyoch5MwUjzqaU8hVVz7OQykEpNyBJ+ccBU+FzBLsaCduJsfoaHxBdQvDNXLCpxAGw9qHbQmDHtP0qFMqFe4VvSaPvcCCqgKsAJnhS3AYRQUQ40hYKiQq23T7U+zLLgsSLEEHz6VXcDiCh5TSypMfCFARAO4pGXYgiPx2ymoHnf8NmXXSttZaBuUJAIniRy8qyrulcAW1CLGRtWU/XA8Vx3ihKzNzJkW8Pmdo/ftUGMc7tOo7CT+K8HY+KN6lD6tTW8LJ57JSVCLHkB9eJX9ozASgcTJ47bDYdPaqcmYKpMVjxlmAlfedKiVKmTc8h+9qofafH616QbC33+1XPNH9DK1cYiuZOKKlesCounXUxY9p6lUIdkmWF5yCPCLqP0romUtgXHwjwp+ppLleFDLA/MatWVYMnQ2CbwPfc0DOcr32HEx/KstvZ5vSyVn8ZPsLD6+9Ks2dUtw6LGRO0RteR61YnNKUhA2AgelIcNhgFKVqTBNrkmR8qT1moBQInp2GotFSnsQla0Ns65SI4cdyYsLG/UVKlK2G0hKkre1SoCITJm0mTpBJn5U6yrL3VBxSnSEqskJEWvJPPhUSMjDCShsKdUsySs3JtxsY6U3HjOgEQHyDVRiTG4bDv6Vu4hSGxq1N6fi3O8gi/61Yuz5wmGZHcrUUrJXK4kybenKosP2faWf6jZA4pvB+f1qMdlkJeQtcKbQkhDZEgTFzwsBYdaZjUqO0WzhtrjJzPWhJKgLgT51FjccCmyyZ2IvFLMaykhaVpSLqI08BA/SOv60uyNOlKW+/kJUQUqTYH4oSd9N4k9dtqA5ASVJmjHtqEaYXL1Kd1FalFPw+K20XA3p/hWFBBSVb/KoWlBCCQACOAvP9qg/nHSsbBEAmZn+1NUKsWxZopx7fdByXnCtaiUk7DkABSot4ydJCC1p4iCo3ubzPGrDjilyBomTAMxB51E9kW6ruKkQnZIiLRx4786BlHYbRqtXMTZJjg+iW1DvAb2KQOSdO6bR707ZVjHnANIQ0BBJULH/AEgGfePpWjeDdStWpoBKQAlYO54gRNO8A/CYjbc23+9Yi7+qY7frBhlatACnCo3EREA/5NaYHDFnw6iRMgTJA+1Om3JrR0gTwp1XE6iIEh8LkXGwNomgXMtSFpUgwRNpseFxRWIw4g6d+t6T4fEud/osCYFzc0tmKkAxirYJEZnCucIA9TFTvsOGCSVG09aNRMX3r0gUdRdxVmrh0wGVnmExIvyPTgL0EsvrZAU3oVeYsI3EdTt6U9xCrb7VFhkFQlR9qwrZhBqHEr+FwSFIQHEhUC4BJEzq9RPOpsyzIIKUgKngACel42FOEshHhQkASSY5kyTUqcOOAgms00KE3WLsxMwFrPjTCQdztzHX/PSp2HQg3g7RAil+apU2V6grTBVMiI3gD05caTt5rLiQDdwWESZJHDoJ96R4hDcR4x6hctnehSoBNaYvCgmFWHQxf/FS4Fnuxf4jxFS4rBBQkfFwkTVBFiT8GVHOV6VKStvW3yidXE7bUccEHC2oKUiOABAMja4mB6U3weDKTC1Sfrxpipq2woFS9zDbJ2gDBQjwk35waNaAPGpW2eYFQYxE/CnxDjtTLiZmLxIbBK7JG5396Q5pnuGUgpUUqVumASQeFEZliVpGlZRoIIWJkgEEfaqhl+G1EzcgWPM/4tUmfNR0iej02BCpdu3qlxwbpWgHWRbaB9q9phk+GAaTEEETPnWVy4rF2fnJmbec9dzFwYBLneELS86gKtIjUANr2tJ96a5ooqUCeCQL+U/WlacKVYNLfH/qLqd+GqTseU2pzim5KpB3O88LfTamZWsX7f4jsCi/v2yodr1kYeeZqm5BhNbyRyvV17Yoli3P5Uj7HMjWT6VuN9OFj3uV6eI/xwhSEzaR+oFWzJ1/10A/u1UvHrhcztB9jNWweB1C+Eg+h/tQ4BSGT5+alrxb4SZNKcFh0KXCTIBkJtsT04C1NsZhEvIKTN+RiluGypWG8YVqEGATcqJFztawrct2CRaxOJgqkA7yy4fDp0SDsD+xSLHvumdJ0EG1xcb3kWtxrVzNXVICEgyra3z8qXtKaSooeeWpQ3Tx9ovT2yKwFbRCqwJJjLDJxClXUSLqK7AQdkgTJ5zFS9oMQ423KUSsiwmh8JjVd0SlBF1BCSReLAnlNqOQ4SmFEX9vSa4AETCaO8rmMbKCQtYLxF0AA229QT++VbxjoSVqbs8BJSDIJGxHtwgbVY+0WTIK+/CytaUkJSFQJIi+x47g9OdKOzmR4jEoSkpLaNR7xxSdKymZATueJHiPEnpU7J5qlSHy3CcPnry2WdCPE4sNkmwQDbUeMTFqYJdxCiUpbWSSYMWT9It86teGwrTICG9KQPDuOFE6udNKWeYjWOwiZthLICnBKjvEkTyFNsLigpO0VuuIoNR03Am/CjC0Yom4cs2oPDpAJ8+Uf5ogOCKEdfkkJuQJPQbXrpghyedROkXpWjMCgf1VITJsAqTz8thRDjiHEyCPME/pWKbmlSItx2O7skgFXQCoMM6XbqbHAg6eRkdaZtNJIkEGh8wzJLUAIJBG+1Y+kC2O0NSTsBNswzYtgGJk38vvRGWYgup1QfWgncuViCg2S2IJ1AEm4NhTfCYUonxEyZ8hyrvNqvtMOnT7ZqrByZKj5cKx5BgBJiKIUedC4l5KTvvcDjR3W8DmStJqYUoU8TtR2EJO9cTc6qhOIwqViFJBHWgG8hYS4HENhKgCkEcAd6ZTUDi9Fojj+xQV3hBjwJGGSDcg8rRUkkHgRQbi+8IOs6RwSRfoT9qjOoLGkmDaN/WaK5lRj/LpJnjU6U0I2ojeKmS9XETJIsAXoVKxNzM0uzfN221BLiykq+GBb39RVazd/EMOB1Ils31AzH+6Z/SLmltk08C41MJaMu0eEShwLOy5EbSeHp9qrGCxCk4jSANJsT14Vd2nRiGgXAJif7iaqGYYcNPhLYEnhvvUnUJfnHBl/SPscZlqyzErZSUbjUVC2wMEj3n3rKZZVgiGx3nxbm9ZRp076RI2yLc5tna/5nKm8S0FJJxqnEovOoqkmfS3nzq+Zm1LjwgWdk+Skgj61RMZmDzeRoKgnUt6Wi2gI0pCgU+ECNwbxyq/Y9ZGMLZ/9ZpJH+9IMfoR/wAqoyj8va6HwBhY2og+w/WVLtRggrDrAFxVR7GmFkeVdMxzJMpOxEGucYbD9xiig2vA9dqjBIVl/WeotERjneGIIMWII+lPMsAfwiFz4kf0l+adjvxEGtM3wpcYJG6b+h/vS7sdmiWcQWnLNPwkk7JX+FX0qjp2s165LmXax2l4yPFlSOqfCZ6f2j3qQ49P4iOKbjb0+1Jswd/knD3tkKIGrgDw9xR+EcbfTqhKhFlCDQ5BkVgBJtKneSYPMdI0paJJ4ggTwFp4CBH+KQZ428lSnyGwQkgWBUNr3jajcU6UHSm6gCqRxFiY4z9jRmGy/vmrG6hACoIMyeYOxg+VADlyHSO0ecaJ5+xiHs72jQVrbbVr0gqANiok336xU6e0JUjWogyvQEpkkqv4REybUbh+xpw6SWgncgqIEqk3M7jlFHtYRtotqKCtTYOm8JSo/iIG5ubnmarCMNuBJXbGSa3izJsA44S4Ge6CVgwoK8ZVuFBR5RVoVmZbnWBbgPmKW4PtChLmnZZvBHufnUGaL7wzvBkefCsFKLU7wSdTU3EYIzVuQkSCQTBtfjty50Sl+eNKez7fehbiggEHQYAB34dJufSmqWAKIXVzMhANCT/zSdC5+IC14E1Wm8Q4+txbSobQooClWK1AXgTYC1+sUbmhIB0kTcwfKqHka8Uphbal6Vd6SlUGC3PEAbG99zeuyMCu/adiU8y2ZNmxIIMyk6TNpIsT70ZiXAAYCtpOnc1XcCofzAKSFWslU7CxPmCB6GrDmWVl9KFhwJi4MSCD6j3paMSnlhMoD2ZW8YyvFLKEaktpE95AjVaAZ3FybdL1Jh+yxSslCtKPCFrA4gRAjnBq5NoKGW2zB0g3HHrUWGWQFBsAmRx+w670WlRzOOViKEBw+EKPhWVAc7TNFHGoMDSVHVFhPn6ipsZl6nEXXoJI+EngfKjMvwqGUBCQLfsmtCkEgbQNQqzI14jSBsDwBtPlz8q1azCZkAdSYiiNKNRVA1bT9K10IUNgrpwkc/KjHtMDaRLxPrSTPMyCNJC9N7g8enlxp7/JmZNaqypBMrAPmBQZFZhSmoSMoO8VZYh5ROogDhYifMfWnrCCLVslIBtUprQukVMZrM0JG1C4jAhUk8Qd+M1G8wdeqTwopCyK4LfMw+yKMJkxam/hothZ8qZgzUD6ABPHh51vlQTrJO8GxDhiRJPLnQAxTyJKkgiZF4IHLl86Z4RC0TrWFHhCdMDlEmlfaAFxHhUAQZvx+3nSMrNoLDYx2JAW0yLEpaxaNLoAI+EH5GlYww0/y6lAKT8JmQRH99vKvGsuKrOHSr5V63lhQsSJFeT+MavNz8jPRXBjXYNAXl4lIDBtEQtJ3TwFqsWSYBhMKV4nD+JV/Y0dh8uRcqANqYrSAhKYiNhtA4Vfgx5H87V7L3kubOCNK7e6auOXrKCexISYJvWVbqEkoysZ1hh/0LDJIue6i073H0o/+IC1IfbUknUlIUmN7G/0qLtEknK8Eki6lYcRv+Xqa97bMF3NMI0FRq1A/wDiZ+RNKzLqcgf8v/MZiaqJ9R+sYqeDraXmzZYvH4VfiH6EdCKp3arLVKAdAMp3sNvSiclzP+VdWy9PcrVpV/8AbUCfEPIz6E9KfY3DgEjcESCLgg7EEcCKW66hqEuxPpNfdRR2VxCVgBRsZChPA/bekXa3Izh3FIPwm6TzB/fyol3Dqwzs/gURcVdhhW8ww3dKjvUDwHmPy0ODz+TuOP4hZjoOvt3/AJiDs7mLeZ4VWAxJAfSgpQo/+onhB/Mn6edVnLsXicrdDGIAKCTChMH32MXj9aXZxgHcO7+JDjZkEWIIvP786uuVZ9h82a/lcXpRiQISo2DsbQeCuntV61lWjz9/OTMvhmx6Jjl95rFNBbZGoe/9jW2R4vuyG1gTB0mLKO4PhiNiDNUXG5ZicucJTqUgHbiB1HEdRTvL8+axSUgEhXJJ48xNRtrxtr7/AF/uGACum/L9J0LGqeU3pSEJJ4fOar2MaU3Oozp+LcSaAxGNxjbcIWFNjjJlI/1AyfblVbfUvFkD+YJUm50kgDnw/Wmt1Ktubik6NiLBFR7i8uBWHVOIB0jQkTPHVqOwkRaolPqbTKULcdV4QECUoBMSogbxxO00nzfMiylOmFoSlKZsZj4ibCeF440JgM7US0UlUKWAd4ggkk8uVJLszWBtDGGl3jHtXnC8L/RTYCZIMSreQfOpst7R62m1SoBYsVqsOEW6ikWOwi8W+oPeBKFWAMlaL9LTtJ5+tHZ9ljgaStIhqBa0aUnh7EVzJ2H6+71ThpoBptm+JddeLTJExcyZCoE3mAIvU2FcccfQFBTSG0aiLQRISkKE8ADB8+taYHBMLZDi1lLjhnWg2Skn4YBgmxkmm2HwPifWXEFC0gNAAkpGlN1qMX1A2uAJ5xRaaBIqDY4kyezrbjnfalkkR4VkDTyinzaFJbIAgTa3IGwpNlYdRKlPoIM6gEmE8oM07w+fIQIUjVedU29+FqdjZSPMak7hr23keHxCki41E2A6njFb4ZperUZHyqHA5ohZKkkkBccLcSPmKMwuO1p/YolIIG8AgiZmOOKAdpE+UgTE86qGbYrFMoQ44IU6dG86VKmE78hvtNO+0fadptaNaNMmAd+QFJO0fajvE6mQlWg+KTGlInax6/Ogy6Te/ujsStttzE+T5m+oNd08lS5KVtzcnjY8hV9w2YBkS74VHcW3rmmF7VguJCmW5SSpKgNNwOYiZEi9jTXDZ808sLKHCSgpI1KAvaDG/Ok2Us1H5MJY8S/DtCyRJWB516c1bP4hfauYZt2ZeLhDAluygNUlM3iSZ3o/LMA6h1tLmo2Inf8AxReMVoGCelXTqBnS8O+CJqZTwNLiz4AByqBoqQRsR5iqLkVRi85AJIMdKTY7EuJPhuJ+VTHNkuLLQEKSbj9KIVgklPi2rD5uIYGk7yLL80BtItR6cwbNgtM+Yqu47JQpMMnu73j8v0pNiMj7opUFhUiCIiOvTY7fWkZMpx8i5VjwY3/NRlpxeLSs6QuAN4MbdTQOLd0gFCQbEb8+M+9AZZhlAwCd5Mnen6MlDgkkz12qFuqObbGN4/SmE7naBIfTHjIUfK01DjsygAJE0xHZshUhU0Th8iCTKr1EemzE0VhjLhG93MyXUUyr0nhW2bZm2ygrcUEgc6Wdou1DWFTpT41mwSOJ68h1rneaY515QceIJ4JHwo8uZ6162GseMCTeEcjajsJ5nGOVinS6XFIGyUgkQkbTHG5PrWUCsGa8o9TeuPC12nSu1C4wWAB/+th+u2mRc+Y3oXMXyvtBhkn8Jcj0bUa07dPBOGy9I4vtHaLSOED9KNeanPWV/wCl3SeZ06SPYk+lNP8AuX/2P0kKj/TPu/eIe3HixuKSlNmw0VEcO8SYnzKT7jnUHZXtOhGnC4khLezTmwbP5Vf6CbzwJ5G1jy1CXMwzXvBIUwyCIsdPeCRc8NJ865ZmyASrTJSFlM8lJ3B63B9RQpQavZHYyStHtOq5pl4MpUI9fmOB9DS7AOLw7gv/ALTw8jVS7Ldue6CcNi5LQsh0CVM8hH4kdOHDkbxisMkpCgUrQsSlaTqSocwa7LgKnWJQuS/K0d53kzeYtTZGISP/AC6GuLZ/kzjLhSpJStJ2224jrXTstzJbKglWopGyxunz4kfOneZ4bD49sJehK48DqdvI9On6U1XGTcbN9f7iReI0d1+n9TmvZz+IspGHzEFaBZLoErR/u5j50N2zyRTSRjcE4lbRuVIMg/7hwPnQvbDsi7h1wtJ/0uJ2I+oqs4HMsRhFHQogGxSbpWORBqgEP7/bC8MDdeD8JY8k/iKpIAcBkcZq3YHOMPiYUWwFcVoVB9gCDfy41x3MyhZ1to7sn4kgynzTxHlUGExq2zKVEdKHJ0auPJtFrlKGmnX877NPOgnDq1p4JTYz1BP3FQ5DkjyNRfSW0tpKuHxdY22/Wqtkn8QHW1AL8SeN4PoRHzro+T9tsLiAEOEEH8K/3FRnHkxCiNo45C49f1m2TYVt9KHV6W1KBSpMwBe077gA877GtcXkWJcSWioJRBG6j1tb61ZcJh8MVa29KSSFGIIkbdKZoYlWomeRB29BFaqKSCflENlrYDb2zn+FZXhGiXmSdKdIcTHdwNoH4THCOdKsPj1LYLq21EEkpSghI06tKZJ5xMbmxromYNjQpK21LBBBtYz865lj+zWIWVBjW0k2SgEmwsN5IgRx4UGQoPLcZhGuzI86zpQZKWUkg2AEiJBMq4zA/SjchzXvmW9cnwwtRnfZVtvb6UGrD4hvUO4VBVYXIgWTJ8qjyXs/inFCVKbbSvUUQBqBMqieJvfh61iaNP7xhSXjJ8kS2glBICjOkn9etO8KtJOkTIHKpMKEhI+JII4wTHG451BmmdNIBUm4tAFyeHtVFqouxINDseLintvliXWN4KSCk8ZmqCMM4EqCk3JnUJETuD0q+Yp9L5Gkq0C5BFp5UBmC0aQEk2399rc683N1XnpeJ6PTroUA8yqYLIgRJBAOx58DBrdWQONpOidPMT5inqseUqgtpH5f3PnbpTXD4wqRCReOVLbqHU3exjyWHb4ys5RnTzKiF6oNifnJFXHJs9Q8opCSYG5FAoytbvCDMXBk+Q5AcafZXlLSZLZhYsR9x9aqwZcj9tpL1Phge32Q9wEpsOFq51mjWOQ5450TPhPAcJroiEuXBiOYMV4rDIUkBQKvOqjqcbbSJHCHcXKThMStt9LqtlpAM8gABPtVhfzcQNB2jfj96aHBtRGgRWwQ3+UUrwsoFBhGHKrEErEzbjhlZT4D+Hj/AJqXGYAuIShCVJvvxpuX0DgKHczIA3UBQthX87XMGRrtRMyjJe7JKzqP6U2EchVexXadloSpYHUmkOM7YvPpIwrdtu9XZA6zxjkK1NCisY+/fDOPJkNtLtjM0aaSStQAHM1SM67XO4lJRhZQ3sXlWH/Dmf3eqziEJnU+4rFLmbylseQHxRTBph3EJ8I2IAsBA6DaB9aFmPHP0lCYFXcxWtlCJglSzuo3KufkKgcY0DUq3IH9/OnGLbawoMkLWeG8HqarzhdxKvCPMmyU/vlWV3JlSJqgOJxh1bD5VlOmsiZA8Q1n8xJHsLWrK38RhG1H7/WN8Jpbu1oS67gMMPCtLrShqAIgAK9TbbrWPZg4ntCxhlKC0pC1zEG7Tl9+G3AX2qDtbilHNMrFtmz6nV9q9xd+06OjK/8A2VUNvmfrPDPFeybZNnyHMwx7SEkuLAE6ZADYJM3G8/8A61X8ZgYy7GugSW8WVxEW7tAUPkb8+dTdgWpzzG3NkqMA2JIIuONifenrrQOW5uD+Zw+vcg0ulUrXqH7GGWNn3/1OSPYYOIDrd0E+oPFJ5Hp6iRU3Z3tTiMCohJ1tKMrZX8J4SOKVR+IchuLVXMrzNbB1Igg2UlV0rHJQ+u44VZe0mBQh0pTMV6LDw20ncGbiyeKN+Z0bJc3w2NTLCyHOLC47wf7eC09U35gURDrZlsjqCCQfMfWuHqlJCkkggyCDBB5ium/w37Qv4xxbGIUFhDZUHCP6losTsodVAnrU+bpQfMsYubTs0urWdEp7t5AKCLpVdI8jwqtZ92RadlWHUJN9Con04Gmzu01EpsJEjlP6V5xzsnO9fGVKgvy7fScrzTJFtkykikjjPSu5ltLyAHEgykfSqD2kyhpBVpBEVbg63VzMyYA23eURbNY0taLpJHrRi0CtNAr0Q9yJuno2NoXgO077X4lehq1Zb/Ep1MS4fUVSC2KwNjlSnwYm7fCaPEGxIPvnZ8q/iolQAXB51Y8P26wi9wK+dVYVNaXTspQ9aSelv0W+IuYVrcr8DPp7Ddp8GdikelFHNMMoEBYE8iK+Wk5u8nZwnziiWO0+IH4h7H70J6TLVbEfCJ1Yr5M+mO8w5EFzVw3HlyqJ3LcI5fVBPHifPnXBcvz19QJKqOTnr9vHUrdORsVErTG1aladqw+QMA/90kcjFEf9Fwt9z61yBrO3onXRCM7ekjXU/h41PoCGUyn886m52fwauERyIozDYPDtiBfziuSo7QPj8X6/et3s/fFtXDrzPWmqwG4URTYXOxadccxjY2Me1Bu45oGdYmuOY7P34Pj2NVnHdqMQCYUPn96oxjLk9ECA+BU9Iz6AdzxkT4ppbie0zXMVwI9p8So/GB5D71MjFur+J1fvH6UbdPmHJAnYlxv6Nzs+I7YtJElQA60hx38Rm/wKnyv/AHqk4DK23FSqSbXJnc9aeuZUy3sgGBN/XlFBoFbkn5fzHeEFM2xHbJ90w0laj0BH63+VaLXiVgF99LP+kHUqPLYUr/n1mQCEi9kiKny9kLUNUm9ZpQcCM01D2+4SQoILqvzukqv0TtTfCsYjEEDSVAbSNIA6U87PZIzoK9Mm+/lQfaTPnm/6belAj8Ig0DptbHaajWaUfGEN5QxhxrxLgKt9M3/flSzH9olOS3hkFKeY39TsKX5Phw/qcdUpRB4m33407aZSBAEDkLc+XlUeXqQh0qJfj6YHzMbifDZNJ1Okq/0g29TuabtNTCEC3AAW9BWYZrU6EEnSSBQGcZisFSEwlIkW4xa53PltU9NlNkyqgDpWHutspMLcAVxtNZXNsZmLms+Ksq4f481zJzkANWflP//Z",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Atum 1"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Mussarela, atum ralado e cebola.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Atum 2"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Atum sólido, mussarela e cebola.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>
        </View>

        <View style={styleCardapio.cardRow}>
          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Baiana"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Calabresa, mussarela, ovos e pimenta.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>

          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Bauru"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Presunto, tomate e mussarela.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>
        </View>

        <View style={styleCardapio.cardsAlign}>
          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://casbri.com.br/wp-content/uploads/2019/07/alhofrito_57e575f2d901c.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Brócolis"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Mussarela, bacon e Brócolis.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://eu.ooni.com/cdn/shop/articles/pepperoni-pizza.jpg?crop=center&height=800&v=1587043733&width=800",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Calabresa"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Calabresa, cebola e mussarela.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>

          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWaGD5ipO5-S6j1KPluu9nQeBMv-9cv7DIozP1F5vZQ&s",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Do Chefe"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Batata cozida, catupiry e bacon.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Marguerita"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Mussarela, tomate e Manjericão.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>
        </View>

        <View style={styleCardapio.cardRow}>
          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Milho"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Milho com catupiry ou mussarela.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>

          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Mussarela"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Mussarela e tomate.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>
        </View>

        <View style={styleCardapio.cardRow}>
          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Romana"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Calabresa e catupiry.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>

          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Toscana"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Calabresa e mussarela.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>
        </View>

        <View style={styleCardapio.cardsAlign}>
          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://casbri.com.br/wp-content/uploads/2019/07/alhofrito_57e575f2d901c.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Coxinha"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>ESPECIAL.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://www.redelevepizza.com.br/assets/imagens/pizzas/006/americana-assada.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="À moda"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Calabresa, frango, catupiry, ovo, mussarela e bacon.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>

          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXFxoYGRgYGBoaHxgZHR0YGBoZHSAgHiggIB4lGxoXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy8lICUtLS8vNTAvLS0tNS0tLS0uLSsuLS8tLS0vLS0tLS0tLS0tNS0tLS0tLS0tLS0tLS0tLf/AABEIAJwBRAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xABCEAABAwIEAwYEBAUDAwIHAAABAgMRACEEBRIxQVFhBhMicYGRMqHB0UJSsfAHFCPh8WJyghUzkkOyFjRTY4Oi0v/EABoBAAMBAQEBAAAAAAAAAAAAAAIDBAEABQb/xAAzEQACAgEDAgIIBgEFAAAAAAABAgARAxIhMQRBEyIyUWFxkaGx8BRCgcHR4QUjM1Jiwv/aAAwDAQACEQMRAD8AjeW0ylCW2+9k+NS9xPBIP+auQy/CqwSXUNkaha2k+vraqclKChfeCCEWSOKiQBeRsDNbt5hiA33SFuqbvpSbkC/HevkVKkEEbw/dBXcJhllUtOA2vKeFxuIjat/57CtQBhTyE6foOZn1pLmKylUFBBtYyOPW/saDTl7jkHTAkRJiL8J2qlcII87Gvef5iTYO0tqcyZF04ZM9XDb52qJ3P1C7bbSCLToBPuSTSptGidbrfUJgkTbhPE0xHZ/EO2SCNt4H6XpQ6VS3BPvs/WFzzAMVj3XwUuvOXJICYj1A680nepWkRpErKdMmDqV1G448Y4+lNcH/AA7cQe8edS2N+f6kfpSXGJaS4UB3vGwoeICDHGOEi8GqMmHQAAKENJOxiouFHaI5kmBxgnn6017O5Y2+vvnAlIaUoqmBqX+FPpc0gx2WFterXrbMqBII8O4nrH18qLyTFOEFoeFtxYW5PFIChoHmopE9DUuVAcZKGvb7O/365ficggSZthbh1LB1Y5xJHMMpukDlIv69ac4jMW3Ma46YGHwDSgANisDxkD2QKRYntBC3sUm+gFnDjms2Kx/yk+SBS9LDKGm29ap+J4i/eKBkJN/zDUfICiGLa227bduL+VLK93O3aHfzKnCe9tJOKxSpsCRKG/8AigAR1FFYLHuMYZ3GKTD+LPdsp4oSZ0pSCdkpvHMnnS9LrXdrQu/eK1LO2qDITvOmwt0FNDnBXphCl6RCfDAT5E7VtngLe+/37/kBGnFtuQBDcr7K4dDaMPiCfCA64Zspy+lNx4ouY6poPD5epXeOLSELcKUaQdWlpMJiRbUUjhaVdK1D7yjCQlJ5CVn2FGoyd1Ud44q/CQPkDYVxx9Qb1UL+/rB1YlPJMNcxKEPB4JSnQjQlNgASSVLMXJNh0E86WNON944Ukqcd+MgqMxwtYDpUOLYQ2QnQlSjz1KnpxuaZZU+nulr7qDcSBG3AevIUIwt3Y/Sccyr6Kxe1iWWCNLOhSBA8ABSCNgTe4qZrM3HLNMurv+AEifQVtgcxT3t2wTEqJSJAkAXPE8uVWnLM7CVaSoEH8IERyj7US40Yea/1MF8zDgCVxGVY9z4cIsDmtSUx/wCShQuLyzMGgdWEVF7pKFf+1RNdEfxylJOlR6WEH5ikOIbxSlBWkLiYBUAOlidh570xsGNRstxSdXkJ3IlRaXiyjUlroUqASob8FRIgA2/MOsFZSxingsqAbCTpAWgypUTCRExtfrTxvJ3pVr2IkbEpUSZAvteazD4F8yNR0jcglJ94/tXDAlejGnqj2MrRVjo/+VcN90t6p9pkdaIw+GxriVKGFI076ihB9lKFWnL2nRiCpRPd93pCJEFUghZM+YgDjRaWXy6XEKQGybpvJHIjasbpk2IWd+Lb1iUJSsSIBwrhtPhTqt10gx615/MuccM+P/xL/wD5rqD+M7sFbgQkATqEi3U8KF/+KUqQpaJVpTqsREczyrW6bCBvBHWZTwJznBAPvIZghSzYLSeAKjYxwBq7YTsky0vW40lxW8mQCZkeEWgcjNNsvcW8EuuzO6Em2kHYqH5qJexABuafiwqouIzdS7GpsnGE27tQHO0frNDqWCoRpHO1yOQ+9Q43EgC1z5/u1KMStZhXdkKveZiJv6wPemttELvLG44gbge1BrcSqQhUEcopM6h11gpcSUFQg6VTHUc/lUWT5eEOqUVlVoSICffrahYkkUIaotGzvN8zzFQWAL2KbG44nfgfa16nwj7oKQUkBXEkEX22sBXmLylLj2stgwJ1alJM+Qt60Hi8ItszrOk2jUbHh/iKDVkU2Lh6UYVHqMWCATYKAIPAg3B9jUgUDtVayl58ApKxA2nYkHTF+n6CjsFqQT35Lc/CoERPI7gk+lVp1QI8wr6SdsBB2NxyKhzfBB7DvNfnbUB57j5gV6vUgSfEn8yQfcj7E1NhMUg+IKEDczt58qoDBhtEkETkXZNgFjWNlrWoeUwPkBXtM/8AquGSVJbWNAWvT5ajtzHWsryMiEudp6CtsIFiWlJPitIncGxuNutHZF2gdwrhWgoIiCFAm29to96ADWoShtZM34j9N6CcSQSCIIsQamxkg2DuJ5lVLB2p7cvYhIQWWgB+IEqPlvHuDVCfWqTAP2mnDiRHOhFMg7z96tXLZttzAYXFQw83Jgf54VYMB2vxOHaDTbthsowVAWsJm3vQS2geA2/fCtHcAkxAPzpvig8zAAu8DzTN3njLzq3LzpKjE+UxUuWvwBq57fOjP+jayEtJK1EXSPw+Z29ae5V2XQ2JeUFEX0iYHmdz8qDN1OIJR/uU4MD5Ttx6+00wOIUtBQhM3+KT8wTp/wA0S1lx8RWvcQdJ29fK1aZr2maaGhEKI2AsBSXLG8ZmT3dNAqi6jMIbTzUfpueAqLHgy5NwNI+c9MYUxbsbMmxfdIHdtGQLQLgepplkPZLE4ogpSUIN9ZBCefxEXnpNdD7N9isLgwkrAedt41gAA/6E7D1k9aMxuejvAANcSQkGw5KN9vOqyq4hubgeOz7IKErWW/w503W62k9AXD7mI9qaNdm8IFaSXXiNyVHSDyhAA9DNGYvEqWnX3gCDbwnxHoIsONzSrBZmlAWpsBGpWki6pIjheDB3EcKA5zentFhWIsneNP5BMFLOlCRwSL+23zr0Za0hAKgVqG5kkn0H6UJjMFiXkylETGm8ab78OE+9MXcu8SU+M3kkKtzjy8qYq96iia7wFvLkqWlYBEGYMgdLVvispQuAuYBKpB0yT1F/anjuHFJc3ycOwA6pBH5SPramFABxBVrO5i57LsGhUBtAWrjJkxtJma2Zy9pmSlsI1HUTvPW969fyvDtlBUkrUAATe/UgAAn/ABRzuIE3Ag7G/sRFqHbgw2PqnkEC+x2vFQl0n4Ve/wBqKUEmx96j/lhPhooqeLfI4/KtDj7hIO9oHlWP4X350tZy5QJsLmdWyqF9XaGunvGTmAKrgqTPKmmCQEgAE2/d6FwogQd+poknrRCu0AkzfErERStnLECVFKTPAJAJO9yKldUSYG9Gss+ETfpzrNOo7zQxHE1RiSQJgHiBf51C+ygqB22i/H9zUrgSk7xxig8Rm7SLKPlY36bb0RIA3mhWJ2EIGXJEkfEeM8OX6Un7Q4p1CIZ0lzqoJCb7mmicUFCRtypE+UOO6UquDdHEm39qXlJFaYeNbPm7RlgS+UJ74jVABgzfiRHA7870K68pt2SCUEbgTBp5hcOSAVi9EtpjhRlTW0ENR4lUx/aHSQkJIB/EqYI4gcZNEYjBd60UrkzcTIjiOoqzPJihlCd6xcZ/MbhnIKGkVKvlaXVkhYjSs25c45zzp+EjRoUNxcGicOwBM8a3UhKf70SIFFCLZyTFjecd0rQrbboBzsPlUuOypt8akBJkXHBfQ0szzDtq4X3JHLl868yvS24QkrTpAF5AV771MHyLkobiPZEZL4M5dngw+FeU04h7VJMBSU6RJATcEmI34iKyur5ovDOr1PNMOLAiVoSSBe1weZ96yrhmx9xEaWlHeWWndC/CuCQDB6nxbepHSaJcxLZV/XQlS4AFiBEbeC3Lrapn+wCdSi3iFp1aiElIISSdXD9eW/Wv5t2UxjSRpcOkfiamYjSAfQ7RzqR/8eL5qKNdo9y7D4cKBbxBQqb2SQNuBHP988zDJVuKKgsEbAgJE+gMT86p6FYhJupKgOC20j3ISCfXl50PmAdJ8IbGwAAIm/C88evCk/gn1WH/AH/iKcWK0yzOZJpPicCSOqQf186Jw2QoVClqOnnMk+X3pZkmRBEOYhKVubhG4SeEzur5DrROe9ou6EC6+U7UtlfVoVrPwlnTdAvpZBGmJzJnCtkCEDkNyevOqPnXah17wyUp5Dc+dJ8djVrUVLVJPE037IdjcTmCpbGhkK0rdMQnjAEyTHK3MircHRInnfcz0WyBBQ2Ej7I9nXcxxAZbOlIGpxwgkNp5nqdgOPoa+hMjyljBMBjDiAm6lWlSuKlniT/YWFA4PLWcvwwYw/hA3URqUtXFao3PtyFhFA4psuJ1nEHSkzp0xqI2THXyrs3Ui9C/USQqcnmPEY5jmKSQNcg2sYBoNjItKVKbTJKbErurkJgWGwFVxWepUUpkBRUdIKNccJiQBF7k8OEVesgfU63NyAY1EAbb2B6/pSMA1sdU7KDjUVK/l2RPrZWlyWSqQRrCv+QiQD+/I7DN4fABR0BIPiU4qTKiYJnYen1q0oQIoPMMuadSUOJC0xcHaP3wqlcYHEnOUk78TTDZj3oCkQUHiKhx+ZIbBlV4qVpASA0lISkCwFgkRSvFNNDlr4KN48q1yQu0FQCZojPNSf8AuJA1AE7xPymp1uN6yUKCjYFRHHoKombY3MQ4oEAtTCVOaEiN5TuVe3tRTWYvANNHWRFyjTcn8RJ/CAD02pHiFRTffzlJw3uJckhJ3SfMx72NEYbDNR4R7/3pPludtuoGm8CJAF+tqasPQJIPpvTQe8nYVtJ3UJoaAJ6VviFEkgJgedCIwOpWpU2EC9vWjN9oO02LgO1eoHOomWlpUbyOHD5RRqRP4ffhQg6uZrCoOvEoBjjyqDFKGmQfat3MBpOrjH2+1Qd0pStIFjvQEkDebt2k2TtFcrNhtenUCofC0gRvy+tLk5ikxqsTwpo2ABMyiYXiWATqkzHy5VUsXnJ1d3oIGojVAIJBsfWP71Y38UAI4EG80j/nERpMSJPMH1pGdyuwMow8bi4TlGOK5Ck8YkUatlkLKyhOqI1Rf3pGMcENKcEmF8BMTF/3zrbsu8rEFxaiSkERO3GY+VZjdjQPeY4G5EtbD1t7c62deAEk0uecSlO/ECvXnkFG4JBqkHtEQ5vFJNtzQynDrVba8/T5UGxa4Mcf7V5nGMWlsloBaypIAmBBUASegBJ9K7kVNBqG/wAydvpUDjSyZO1RZhjEMpSSZuBO+9rx50szrEPvYZxOF/7h8OsyAgESTMcrDqRW+GPzGYCb2la7Wdum2itvDBK3LpK+CT0t4oPDz5VQcZ2pxyzKn1gC0JOkdbDn9ajGQ4lCigsOSDB8KiPcWPvXuOwC2jpdQUnhPGmjQpoS5MS1IBmqzdSlE89R+9ZQysNXtbSRm8+hja1o8wOIj8XmfStVXIi42+Im/orkR+95UyLDkPzfQkf49RE4raxPG88zzT5bn9afPIgmNyltySodbBVtxwnlPr5VVnMG224ShRMWBmR6T7TVhzfGlKSgbrurawM8Y4/TrVVzXHBpsqMz+G+5rz+qcE6BLOmxfmMB7QZyGhCY1kf+Iqiv4gqJJN+dSYzEFxRUTM7n98KbdnMk71QWv4QfCk/iP2osaLgS25+9pYWJ2El7J9ll4txAV4UqIieI513rD4ZrCMBppMJTYAD4jzP3pD2NwgCioD4E28zafaaO7S4wJF9gLRck8IjjSsmUhdRk5ByPpE0Q6oklcAWiDf8AsK9dSFBSTpCSIud/eq9gMwU6otdzJg7m45E8xPLYkVYUOtoCEOqSVEBJuFCSYAHM7D3rzn6bXVfOObJp2I3geWdk2VO96gFRTbWSDptBCR5SBVvwzSG0aGxp3I3+I3JPMk0izTMwwz4FpCwoesG4MW51mV5srElSkiUEBKoMFB39PSrsZVDp5Mmyl8g1HiN20BBMrMq9P81MdrGaCdyhKyCXFwNrj7UYGwkQDTgTJzFuNxaGYUpW5Iknbzpct5tSgVlQN4AI296Nx+XIcPjcXEfAIAPXYn2itXMjbVCglIMg38Q4cCYHmKW6uTtxGKVA3iHMMjffxPemCwhNgTKifygSIPXyoZrLHzpUnDrTEIAufD8OxPKL+tXhHg/FYcLfrXqsaLwofvyNY2BSbMMZ2AoRD2Xywsp0ONJQvUTpQSoAEzckb3NqecTb1rVp6AYWJVxjb50JisuUUkIXJNiriT06bbU7gbbxROo7zDjmlq0AgnnTBloAVSGsicZUAp8OCZ+EpG3mbzPHjsKt2GdCUC8+V56UpGeyGhZEUVpMmc6XjhWhxXACoG2VeJazawSPKb8+I9qCU+lJuZPIc6ImhZghZPicTprzBYtCVajO2/DzpdmmE75MBSkT7+9TjBafiSFCITYeE2k8+EepoDqvaGAtbxs+lSpO8xBm3nVZzVJGoIP9RWyosn0nf+1MFuOpRCAd4jlbcSIA862wmWpQCpRC1LEqVz6dPatazsJqhQLJgCm3XWkpN1AXIki48hSwZe4ltCVtkqBiRIsTx6VaUPNpSEpOkRAg8NgKEW0tQCkaSmbTx/f0FCyqTfM1W/SEYLJE6IWqxEaU2Hl1oxjKm2xCRA5CwoRnHFseMafn+lMGMalYkGmAqdoog8yQstx8IqLSBtA9BQuMxB4JJ6wa1bWIkWJ3k8fXzogRcyoch5MwUjzqaU8hVVz7OQykEpNyBJ+ccBU+FzBLsaCduJsfoaHxBdQvDNXLCpxAGw9qHbQmDHtP0qFMqFe4VvSaPvcCCqgKsAJnhS3AYRQUQ40hYKiQq23T7U+zLLgsSLEEHz6VXcDiCh5TSypMfCFARAO4pGXYgiPx2ymoHnf8NmXXSttZaBuUJAIniRy8qyrulcAW1CLGRtWU/XA8Vx3ihKzNzJkW8Pmdo/ftUGMc7tOo7CT+K8HY+KN6lD6tTW8LJ57JSVCLHkB9eJX9ozASgcTJ47bDYdPaqcmYKpMVjxlmAlfedKiVKmTc8h+9qofafH616QbC33+1XPNH9DK1cYiuZOKKlesCounXUxY9p6lUIdkmWF5yCPCLqP0romUtgXHwjwp+ppLleFDLA/MatWVYMnQ2CbwPfc0DOcr32HEx/KstvZ5vSyVn8ZPsLD6+9Ks2dUtw6LGRO0RteR61YnNKUhA2AgelIcNhgFKVqTBNrkmR8qT1moBQInp2GotFSnsQla0Ns65SI4cdyYsLG/UVKlK2G0hKkre1SoCITJm0mTpBJn5U6yrL3VBxSnSEqskJEWvJPPhUSMjDCShsKdUsySs3JtxsY6U3HjOgEQHyDVRiTG4bDv6Vu4hSGxq1N6fi3O8gi/61Yuz5wmGZHcrUUrJXK4kybenKosP2faWf6jZA4pvB+f1qMdlkJeQtcKbQkhDZEgTFzwsBYdaZjUqO0WzhtrjJzPWhJKgLgT51FjccCmyyZ2IvFLMaykhaVpSLqI08BA/SOv60uyNOlKW+/kJUQUqTYH4oSd9N4k9dtqA5ASVJmjHtqEaYXL1Kd1FalFPw+K20XA3p/hWFBBSVb/KoWlBCCQACOAvP9qg/nHSsbBEAmZn+1NUKsWxZopx7fdByXnCtaiUk7DkABSot4ydJCC1p4iCo3ubzPGrDjilyBomTAMxB51E9kW6ruKkQnZIiLRx4786BlHYbRqtXMTZJjg+iW1DvAb2KQOSdO6bR707ZVjHnANIQ0BBJULH/AEgGfePpWjeDdStWpoBKQAlYO54gRNO8A/CYjbc23+9Yi7+qY7frBhlatACnCo3EREA/5NaYHDFnw6iRMgTJA+1Om3JrR0gTwp1XE6iIEh8LkXGwNomgXMtSFpUgwRNpseFxRWIw4g6d+t6T4fEud/osCYFzc0tmKkAxirYJEZnCucIA9TFTvsOGCSVG09aNRMX3r0gUdRdxVmrh0wGVnmExIvyPTgL0EsvrZAU3oVeYsI3EdTt6U9xCrb7VFhkFQlR9qwrZhBqHEr+FwSFIQHEhUC4BJEzq9RPOpsyzIIKUgKngACel42FOEshHhQkASSY5kyTUqcOOAgms00KE3WLsxMwFrPjTCQdztzHX/PSp2HQg3g7RAil+apU2V6grTBVMiI3gD05caTt5rLiQDdwWESZJHDoJ96R4hDcR4x6hctnehSoBNaYvCgmFWHQxf/FS4Fnuxf4jxFS4rBBQkfFwkTVBFiT8GVHOV6VKStvW3yidXE7bUccEHC2oKUiOABAMja4mB6U3weDKTC1Sfrxpipq2woFS9zDbJ2gDBQjwk35waNaAPGpW2eYFQYxE/CnxDjtTLiZmLxIbBK7JG5396Q5pnuGUgpUUqVumASQeFEZliVpGlZRoIIWJkgEEfaqhl+G1EzcgWPM/4tUmfNR0iej02BCpdu3qlxwbpWgHWRbaB9q9phk+GAaTEEETPnWVy4rF2fnJmbec9dzFwYBLneELS86gKtIjUANr2tJ96a5ooqUCeCQL+U/WlacKVYNLfH/qLqd+GqTseU2pzim5KpB3O88LfTamZWsX7f4jsCi/v2yodr1kYeeZqm5BhNbyRyvV17Yoli3P5Uj7HMjWT6VuN9OFj3uV6eI/xwhSEzaR+oFWzJ1/10A/u1UvHrhcztB9jNWweB1C+Eg+h/tQ4BSGT5+alrxb4SZNKcFh0KXCTIBkJtsT04C1NsZhEvIKTN+RiluGypWG8YVqEGATcqJFztawrct2CRaxOJgqkA7yy4fDp0SDsD+xSLHvumdJ0EG1xcb3kWtxrVzNXVICEgyra3z8qXtKaSooeeWpQ3Tx9ovT2yKwFbRCqwJJjLDJxClXUSLqK7AQdkgTJ5zFS9oMQ423KUSsiwmh8JjVd0SlBF1BCSReLAnlNqOQ4SmFEX9vSa4AETCaO8rmMbKCQtYLxF0AA229QT++VbxjoSVqbs8BJSDIJGxHtwgbVY+0WTIK+/CytaUkJSFQJIi+x47g9OdKOzmR4jEoSkpLaNR7xxSdKymZATueJHiPEnpU7J5qlSHy3CcPnry2WdCPE4sNkmwQDbUeMTFqYJdxCiUpbWSSYMWT9It86teGwrTICG9KQPDuOFE6udNKWeYjWOwiZthLICnBKjvEkTyFNsLigpO0VuuIoNR03Am/CjC0Yom4cs2oPDpAJ8+Uf5ogOCKEdfkkJuQJPQbXrpghyedROkXpWjMCgf1VITJsAqTz8thRDjiHEyCPME/pWKbmlSItx2O7skgFXQCoMM6XbqbHAg6eRkdaZtNJIkEGh8wzJLUAIJBG+1Y+kC2O0NSTsBNswzYtgGJk38vvRGWYgup1QfWgncuViCg2S2IJ1AEm4NhTfCYUonxEyZ8hyrvNqvtMOnT7ZqrByZKj5cKx5BgBJiKIUedC4l5KTvvcDjR3W8DmStJqYUoU8TtR2EJO9cTc6qhOIwqViFJBHWgG8hYS4HENhKgCkEcAd6ZTUDi9Fojj+xQV3hBjwJGGSDcg8rRUkkHgRQbi+8IOs6RwSRfoT9qjOoLGkmDaN/WaK5lRj/LpJnjU6U0I2ojeKmS9XETJIsAXoVKxNzM0uzfN221BLiykq+GBb39RVazd/EMOB1Ils31AzH+6Z/SLmltk08C41MJaMu0eEShwLOy5EbSeHp9qrGCxCk4jSANJsT14Vd2nRiGgXAJif7iaqGYYcNPhLYEnhvvUnUJfnHBl/SPscZlqyzErZSUbjUVC2wMEj3n3rKZZVgiGx3nxbm9ZRp076RI2yLc5tna/5nKm8S0FJJxqnEovOoqkmfS3nzq+Zm1LjwgWdk+Skgj61RMZmDzeRoKgnUt6Wi2gI0pCgU+ECNwbxyq/Y9ZGMLZ/9ZpJH+9IMfoR/wAqoyj8va6HwBhY2og+w/WVLtRggrDrAFxVR7GmFkeVdMxzJMpOxEGucYbD9xiig2vA9dqjBIVl/WeotERjneGIIMWII+lPMsAfwiFz4kf0l+adjvxEGtM3wpcYJG6b+h/vS7sdmiWcQWnLNPwkk7JX+FX0qjp2s165LmXax2l4yPFlSOqfCZ6f2j3qQ49P4iOKbjb0+1Jswd/knD3tkKIGrgDw9xR+EcbfTqhKhFlCDQ5BkVgBJtKneSYPMdI0paJJ4ggTwFp4CBH+KQZ428lSnyGwQkgWBUNr3jajcU6UHSm6gCqRxFiY4z9jRmGy/vmrG6hACoIMyeYOxg+VADlyHSO0ecaJ5+xiHs72jQVrbbVr0gqANiok336xU6e0JUjWogyvQEpkkqv4REybUbh+xpw6SWgncgqIEqk3M7jlFHtYRtotqKCtTYOm8JSo/iIG5ubnmarCMNuBJXbGSa3izJsA44S4Ge6CVgwoK8ZVuFBR5RVoVmZbnWBbgPmKW4PtChLmnZZvBHufnUGaL7wzvBkefCsFKLU7wSdTU3EYIzVuQkSCQTBtfjty50Sl+eNKez7fehbiggEHQYAB34dJufSmqWAKIXVzMhANCT/zSdC5+IC14E1Wm8Q4+txbSobQooClWK1AXgTYC1+sUbmhIB0kTcwfKqHka8Uphbal6Vd6SlUGC3PEAbG99zeuyMCu/adiU8y2ZNmxIIMyk6TNpIsT70ZiXAAYCtpOnc1XcCofzAKSFWslU7CxPmCB6GrDmWVl9KFhwJi4MSCD6j3paMSnlhMoD2ZW8YyvFLKEaktpE95AjVaAZ3FybdL1Jh+yxSslCtKPCFrA4gRAjnBq5NoKGW2zB0g3HHrUWGWQFBsAmRx+w670WlRzOOViKEBw+EKPhWVAc7TNFHGoMDSVHVFhPn6ipsZl6nEXXoJI+EngfKjMvwqGUBCQLfsmtCkEgbQNQqzI14jSBsDwBtPlz8q1azCZkAdSYiiNKNRVA1bT9K10IUNgrpwkc/KjHtMDaRLxPrSTPMyCNJC9N7g8enlxp7/JmZNaqypBMrAPmBQZFZhSmoSMoO8VZYh5ROogDhYifMfWnrCCLVslIBtUprQukVMZrM0JG1C4jAhUk8Qd+M1G8wdeqTwopCyK4LfMw+yKMJkxam/hothZ8qZgzUD6ABPHh51vlQTrJO8GxDhiRJPLnQAxTyJKkgiZF4IHLl86Z4RC0TrWFHhCdMDlEmlfaAFxHhUAQZvx+3nSMrNoLDYx2JAW0yLEpaxaNLoAI+EH5GlYww0/y6lAKT8JmQRH99vKvGsuKrOHSr5V63lhQsSJFeT+MavNz8jPRXBjXYNAXl4lIDBtEQtJ3TwFqsWSYBhMKV4nD+JV/Y0dh8uRcqANqYrSAhKYiNhtA4Vfgx5H87V7L3kubOCNK7e6auOXrKCexISYJvWVbqEkoysZ1hh/0LDJIue6i073H0o/+IC1IfbUknUlIUmN7G/0qLtEknK8Eki6lYcRv+Xqa97bMF3NMI0FRq1A/wDiZ+RNKzLqcgf8v/MZiaqJ9R+sYqeDraXmzZYvH4VfiH6EdCKp3arLVKAdAMp3sNvSiclzP+VdWy9PcrVpV/8AbUCfEPIz6E9KfY3DgEjcESCLgg7EEcCKW66hqEuxPpNfdRR2VxCVgBRsZChPA/bekXa3Izh3FIPwm6TzB/fyol3Dqwzs/gURcVdhhW8ww3dKjvUDwHmPy0ODz+TuOP4hZjoOvt3/AJiDs7mLeZ4VWAxJAfSgpQo/+onhB/Mn6edVnLsXicrdDGIAKCTChMH32MXj9aXZxgHcO7+JDjZkEWIIvP786uuVZ9h82a/lcXpRiQISo2DsbQeCuntV61lWjz9/OTMvhmx6Jjl95rFNBbZGoe/9jW2R4vuyG1gTB0mLKO4PhiNiDNUXG5ZicucJTqUgHbiB1HEdRTvL8+axSUgEhXJJ48xNRtrxtr7/AF/uGACum/L9J0LGqeU3pSEJJ4fOar2MaU3Oozp+LcSaAxGNxjbcIWFNjjJlI/1AyfblVbfUvFkD+YJUm50kgDnw/Wmt1Ktubik6NiLBFR7i8uBWHVOIB0jQkTPHVqOwkRaolPqbTKULcdV4QECUoBMSogbxxO00nzfMiylOmFoSlKZsZj4ibCeF440JgM7US0UlUKWAd4ggkk8uVJLszWBtDGGl3jHtXnC8L/RTYCZIMSreQfOpst7R62m1SoBYsVqsOEW6ikWOwi8W+oPeBKFWAMlaL9LTtJ5+tHZ9ljgaStIhqBa0aUnh7EVzJ2H6+71ThpoBptm+JddeLTJExcyZCoE3mAIvU2FcccfQFBTSG0aiLQRISkKE8ADB8+taYHBMLZDi1lLjhnWg2Skn4YBgmxkmm2HwPifWXEFC0gNAAkpGlN1qMX1A2uAJ5xRaaBIqDY4kyezrbjnfalkkR4VkDTyinzaFJbIAgTa3IGwpNlYdRKlPoIM6gEmE8oM07w+fIQIUjVedU29+FqdjZSPMak7hr23keHxCki41E2A6njFb4ZperUZHyqHA5ohZKkkkBccLcSPmKMwuO1p/YolIIG8AgiZmOOKAdpE+UgTE86qGbYrFMoQ44IU6dG86VKmE78hvtNO+0fadptaNaNMmAd+QFJO0fajvE6mQlWg+KTGlInax6/Ogy6Te/ujsStttzE+T5m+oNd08lS5KVtzcnjY8hV9w2YBkS74VHcW3rmmF7VguJCmW5SSpKgNNwOYiZEi9jTXDZ808sLKHCSgpI1KAvaDG/Ok2Us1H5MJY8S/DtCyRJWB516c1bP4hfauYZt2ZeLhDAluygNUlM3iSZ3o/LMA6h1tLmo2Inf8AxReMVoGCelXTqBnS8O+CJqZTwNLiz4AByqBoqQRsR5iqLkVRi85AJIMdKTY7EuJPhuJ+VTHNkuLLQEKSbj9KIVgklPi2rD5uIYGk7yLL80BtItR6cwbNgtM+Yqu47JQpMMnu73j8v0pNiMj7opUFhUiCIiOvTY7fWkZMpx8i5VjwY3/NRlpxeLSs6QuAN4MbdTQOLd0gFCQbEb8+M+9AZZhlAwCd5Mnen6MlDgkkz12qFuqObbGN4/SmE7naBIfTHjIUfK01DjsygAJE0xHZshUhU0Th8iCTKr1EemzE0VhjLhG93MyXUUyr0nhW2bZm2ygrcUEgc6Wdou1DWFTpT41mwSOJ68h1rneaY515QceIJ4JHwo8uZ6162GseMCTeEcjajsJ5nGOVinS6XFIGyUgkQkbTHG5PrWUCsGa8o9TeuPC12nSu1C4wWAB/+th+u2mRc+Y3oXMXyvtBhkn8Jcj0bUa07dPBOGy9I4vtHaLSOED9KNeanPWV/wCl3SeZ06SPYk+lNP8AuX/2P0kKj/TPu/eIe3HixuKSlNmw0VEcO8SYnzKT7jnUHZXtOhGnC4khLezTmwbP5Vf6CbzwJ5G1jy1CXMwzXvBIUwyCIsdPeCRc8NJ865ZmyASrTJSFlM8lJ3B63B9RQpQavZHYyStHtOq5pl4MpUI9fmOB9DS7AOLw7gv/ALTw8jVS7Ldue6CcNi5LQsh0CVM8hH4kdOHDkbxisMkpCgUrQsSlaTqSocwa7LgKnWJQuS/K0d53kzeYtTZGISP/AC6GuLZ/kzjLhSpJStJ2224jrXTstzJbKglWopGyxunz4kfOneZ4bD49sJehK48DqdvI9On6U1XGTcbN9f7iReI0d1+n9TmvZz+IspGHzEFaBZLoErR/u5j50N2zyRTSRjcE4lbRuVIMg/7hwPnQvbDsi7h1wtJ/0uJ2I+oqs4HMsRhFHQogGxSbpWORBqgEP7/bC8MDdeD8JY8k/iKpIAcBkcZq3YHOMPiYUWwFcVoVB9gCDfy41x3MyhZ1to7sn4kgynzTxHlUGExq2zKVEdKHJ0auPJtFrlKGmnX877NPOgnDq1p4JTYz1BP3FQ5DkjyNRfSW0tpKuHxdY22/Wqtkn8QHW1AL8SeN4PoRHzro+T9tsLiAEOEEH8K/3FRnHkxCiNo45C49f1m2TYVt9KHV6W1KBSpMwBe077gA877GtcXkWJcSWioJRBG6j1tb61ZcJh8MVa29KSSFGIIkbdKZoYlWomeRB29BFaqKSCflENlrYDb2zn+FZXhGiXmSdKdIcTHdwNoH4THCOdKsPj1LYLq21EEkpSghI06tKZJ5xMbmxromYNjQpK21LBBBtYz865lj+zWIWVBjW0k2SgEmwsN5IgRx4UGQoPLcZhGuzI86zpQZKWUkg2AEiJBMq4zA/SjchzXvmW9cnwwtRnfZVtvb6UGrD4hvUO4VBVYXIgWTJ8qjyXs/inFCVKbbSvUUQBqBMqieJvfh61iaNP7xhSXjJ8kS2glBICjOkn9etO8KtJOkTIHKpMKEhI+JII4wTHG451BmmdNIBUm4tAFyeHtVFqouxINDseLintvliXWN4KSCk8ZmqCMM4EqCk3JnUJETuD0q+Yp9L5Gkq0C5BFp5UBmC0aQEk2399rc683N1XnpeJ6PTroUA8yqYLIgRJBAOx58DBrdWQONpOidPMT5inqseUqgtpH5f3PnbpTXD4wqRCReOVLbqHU3exjyWHb4ys5RnTzKiF6oNifnJFXHJs9Q8opCSYG5FAoytbvCDMXBk+Q5AcafZXlLSZLZhYsR9x9aqwZcj9tpL1Phge32Q9wEpsOFq51mjWOQ5450TPhPAcJroiEuXBiOYMV4rDIUkBQKvOqjqcbbSJHCHcXKThMStt9LqtlpAM8gABPtVhfzcQNB2jfj96aHBtRGgRWwQ3+UUrwsoFBhGHKrEErEzbjhlZT4D+Hj/AJqXGYAuIShCVJvvxpuX0DgKHczIA3UBQthX87XMGRrtRMyjJe7JKzqP6U2EchVexXadloSpYHUmkOM7YvPpIwrdtu9XZA6zxjkK1NCisY+/fDOPJkNtLtjM0aaSStQAHM1SM67XO4lJRhZQ3sXlWH/Dmf3eqziEJnU+4rFLmbylseQHxRTBph3EJ8I2IAsBA6DaB9aFmPHP0lCYFXcxWtlCJglSzuo3KufkKgcY0DUq3IH9/OnGLbawoMkLWeG8HqarzhdxKvCPMmyU/vlWV3JlSJqgOJxh1bD5VlOmsiZA8Q1n8xJHsLWrK38RhG1H7/WN8Jpbu1oS67gMMPCtLrShqAIgAK9TbbrWPZg4ntCxhlKC0pC1zEG7Tl9+G3AX2qDtbilHNMrFtmz6nV9q9xd+06OjK/8A2VUNvmfrPDPFeybZNnyHMwx7SEkuLAE6ZADYJM3G8/8A61X8ZgYy7GugSW8WVxEW7tAUPkb8+dTdgWpzzG3NkqMA2JIIuONifenrrQOW5uD+Zw+vcg0ulUrXqH7GGWNn3/1OSPYYOIDrd0E+oPFJ5Hp6iRU3Z3tTiMCohJ1tKMrZX8J4SOKVR+IchuLVXMrzNbB1Igg2UlV0rHJQ+u44VZe0mBQh0pTMV6LDw20ncGbiyeKN+Z0bJc3w2NTLCyHOLC47wf7eC09U35gURDrZlsjqCCQfMfWuHqlJCkkggyCDBB5ium/w37Qv4xxbGIUFhDZUHCP6losTsodVAnrU+bpQfMsYubTs0urWdEp7t5AKCLpVdI8jwqtZ92RadlWHUJN9Con04Gmzu01EpsJEjlP6V5xzsnO9fGVKgvy7fScrzTJFtkykikjjPSu5ltLyAHEgykfSqD2kyhpBVpBEVbg63VzMyYA23eURbNY0taLpJHrRi0CtNAr0Q9yJuno2NoXgO077X4lehq1Zb/Ep1MS4fUVSC2KwNjlSnwYm7fCaPEGxIPvnZ8q/iolQAXB51Y8P26wi9wK+dVYVNaXTspQ9aSelv0W+IuYVrcr8DPp7Ddp8GdikelFHNMMoEBYE8iK+Wk5u8nZwnziiWO0+IH4h7H70J6TLVbEfCJ1Yr5M+mO8w5EFzVw3HlyqJ3LcI5fVBPHifPnXBcvz19QJKqOTnr9vHUrdORsVErTG1aladqw+QMA/90kcjFEf9Fwt9z61yBrO3onXRCM7ekjXU/h41PoCGUyn886m52fwauERyIozDYPDtiBfziuSo7QPj8X6/et3s/fFtXDrzPWmqwG4URTYXOxadccxjY2Me1Bu45oGdYmuOY7P34Pj2NVnHdqMQCYUPn96oxjLk9ECA+BU9Iz6AdzxkT4ppbie0zXMVwI9p8So/GB5D71MjFur+J1fvH6UbdPmHJAnYlxv6Nzs+I7YtJElQA60hx38Rm/wKnyv/AHqk4DK23FSqSbXJnc9aeuZUy3sgGBN/XlFBoFbkn5fzHeEFM2xHbJ90w0laj0BH63+VaLXiVgF99LP+kHUqPLYUr/n1mQCEi9kiKny9kLUNUm9ZpQcCM01D2+4SQoILqvzukqv0TtTfCsYjEEDSVAbSNIA6U87PZIzoK9Mm+/lQfaTPnm/6belAj8Ig0DptbHaajWaUfGEN5QxhxrxLgKt9M3/flSzH9olOS3hkFKeY39TsKX5Phw/qcdUpRB4m33407aZSBAEDkLc+XlUeXqQh0qJfj6YHzMbifDZNJ1Okq/0g29TuabtNTCEC3AAW9BWYZrU6EEnSSBQGcZisFSEwlIkW4xa53PltU9NlNkyqgDpWHutspMLcAVxtNZXNsZmLms+Ksq4f481zJzkANWflP//Z",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Aliche"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Mussarela e aliche.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Bacon"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Mussarela e bacon.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>
        </View>

        <View style={styleCardapio.cardRow}>
          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Bolonhesa"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Carne moída, ovo e mussarela.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>

          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Brócolis C/ catupiry"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Brócolis, catupiry e bacon.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>
        </View>

        <View style={styleCardapio.cardsAlign}>
          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://casbri.com.br/wp-content/uploads/2019/07/alhofrito_57e575f2d901c.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Catupiry"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Cayupiry e bacon.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://eu.ooni.com/cdn/shop/articles/pepperoni-pizza.jpg?crop=center&height=800&v=1587043733&width=800",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Champignon"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Champignon, mussarela e bacon.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>

          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWaGD5ipO5-S6j1KPluu9nQeBMv-9cv7DIozP1F5vZQ&s",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Crocante"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Presunto, mussarela e batata palha.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Escarola"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Escarola refogada, mussarela, cebola e bacon.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>
        </View>

        <View style={styleCardapio.cardRow}>
          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Frangão"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Frango, mussarela, milho e bacon.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>

          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Frango ao creme"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Frango, creme de leite, ervilha e bacon.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>
        </View>

        <View style={styleCardapio.cardRow}>
          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Frango"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Frango e Catupiry.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>

          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Jardineira"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Atum, cebola, milho, ervilha e mussarela.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>
        </View>

        <View style={styleCardapio.cardsAlign}>
          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://casbri.com.br/wp-content/uploads/2019/07/alhofrito_57e575f2d901c.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Alho e óleo"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Mussarela e alho frito.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://www.redelevepizza.com.br/assets/imagens/pizzas/006/americana-assada.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Americana"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Milho, mussarela, cebola e bacon.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>

          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "data:image/jpeg;base64,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",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Atum 1"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Mussarela, atum ralado e cebola.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Atum 2"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Atum sólido, mussarela e cebola.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>
        </View>

        <View style={styleCardapio.cardRow}>
          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Baiana"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Calabresa, mussarela, ovos e pimenta.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>

          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Bauru"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Presunto, tomate e mussarela.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>
        </View>

        <View style={styleCardapio.cardsAlign}>
          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://casbri.com.br/wp-content/uploads/2019/07/alhofrito_57e575f2d901c.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Brócolis"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Mussarela, bacon e Brócolis.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://eu.ooni.com/cdn/shop/articles/pepperoni-pizza.jpg?crop=center&height=800&v=1587043733&width=800",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Calabresa"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Calabresa, cebola e mussarela.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>

          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWaGD5ipO5-S6j1KPluu9nQeBMv-9cv7DIozP1F5vZQ&s",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Do Chefe"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Batata cozida, catupiry e bacon.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Marguerita"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Mussarela, tomate e Manjericão.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>
        </View>

        <View style={styleCardapio.cardRow}>
          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Milho"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Milho com catupiry ou mussarela.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>

          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Mussarela"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Mussarela e tomate.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>
        </View>

        <View style={styleCardapio.cardRow}>
          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Romana"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Calabresa e catupiry.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>

          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Toscana"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Calabresa e mussarela.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>
        </View>

        <View style={styleCardapio.cardsAlign}>
          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://casbri.com.br/wp-content/uploads/2019/07/alhofrito_57e575f2d901c.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Alho e óleo"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Mussarela e alho frito.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://www.redelevepizza.com.br/assets/imagens/pizzas/006/americana-assada.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Americana"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Milho, mussarela, cebola e bacon.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>

          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "data:image/jpeg;base64,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",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Atum 1"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Mussarela, atum ralado e cebola.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Atum 2"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Atum sólido, mussarela e cebola.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>
        </View>

        <View style={styleCardapio.cardRow}>
          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Baiana"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Calabresa, mussarela, ovos e pimenta.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>

          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Bauru"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Presunto, tomate e mussarela.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>
        </View>

        <View style={styleCardapio.cardsAlign}>
          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://casbri.com.br/wp-content/uploads/2019/07/alhofrito_57e575f2d901c.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Brócolis"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Mussarela, bacon e Brócolis.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://eu.ooni.com/cdn/shop/articles/pepperoni-pizza.jpg?crop=center&height=800&v=1587043733&width=800",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Calabresa"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Calabresa, cebola e mussarela.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>

          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWaGD5ipO5-S6j1KPluu9nQeBMv-9cv7DIozP1F5vZQ&s",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Do Chefe"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Batata cozida, catupiry e bacon.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Marguerita"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Mussarela, tomate e Manjericão.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>
        </View>

        <View style={styleCardapio.cardRow}>
          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Milho"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Milho com catupiry ou mussarela.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>

          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Mussarela"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Mussarela e tomate.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>
        </View>

        <View style={styleCardapio.cardRow}>
          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Romana"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Calabresa e catupiry.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>

          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Toscana"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Calabresa e mussarela.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>
        </View>

        <View style={styleCardapio.cardsAlign}>
          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://casbri.com.br/wp-content/uploads/2019/07/alhofrito_57e575f2d901c.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Alho e óleo"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Mussarela e alho frito.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://www.redelevepizza.com.br/assets/imagens/pizzas/006/americana-assada.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Americana"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Milho, mussarela, cebola e bacon.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>

          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "data:image/jpeg;base64,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",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Atum 1"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Mussarela, atum ralado e cebola.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Atum 2"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Atum sólido, mussarela e cebola.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>
        </View>

        <View style={styleCardapio.cardRow}>
          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Baiana"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Calabresa, mussarela, ovos e pimenta.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>

          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Bauru"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Presunto, tomate e mussarela.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>
        </View>

        <View style={styleCardapio.cardsAlign}>
          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://casbri.com.br/wp-content/uploads/2019/07/alhofrito_57e575f2d901c.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Brócolis"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Mussarela, bacon e Brócolis.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://eu.ooni.com/cdn/shop/articles/pepperoni-pizza.jpg?crop=center&height=800&v=1587043733&width=800",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Calabresa"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Calabresa, cebola e mussarela.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>

          <View style={styleCardapio.cardRow}>
            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWaGD5ipO5-S6j1KPluu9nQeBMv-9cv7DIozP1F5vZQ&s",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Do Chefe"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Batata cozida, catupiry e bacon.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>

            <Pressable>
              <Card style={styleCardapio.styleCard}>
                <Card.Cover
                  source={{
                    uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                  }}
                  style={styleCardapio.styleCover}
                />
                <Card.Title
                  title="Marguerita"
                  titleStyle={styleCardapio.cardTitle}
                />
                <Card.Content>
                  <View style={styleCardapio.iconSpace}>
                    <Text>Mussarela, tomate e Manjericão.</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
          </View>
        </View>

        <View style={styleCardapio.cardRow}>
          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Milho"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Milho com catupiry ou mussarela.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>

          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Mussarela"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Mussarela e tomate.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>
        </View>

        <View style={styleCardapio.cardRow}>
          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Romana"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Calabresa e catupiry.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>

          <Pressable>
            <Card style={styleCardapio.styleCard}>
              <Card.Cover
                source={{
                  uri: "https://files.mob-cdn.co.uk/recipes/2023/10/Garlic-Pizza-Bread.jpg",
                }}
                style={styleCardapio.styleCover}
              />
              <Card.Title
                title="Toscana"
                titleStyle={styleCardapio.cardTitle}
              />
              <Card.Content>
                <View style={styleCardapio.iconSpace}>
                  <Text>Calabresa e mussarela.</Text>
                </View>
              </Card.Content>
            </Card>
          </Pressable>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default TelaCardapio;
