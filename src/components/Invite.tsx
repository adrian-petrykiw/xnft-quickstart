import { Text, Pressable, StyleSheet, Image, View } from "react-native";
import * as Linking from "expo-linking";
import tw from "twrnc";
import {
    useFonts,
    Montserrat_800ExtraBold,
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
    Montserrat_400Regular,
    Montserrat_300Light,
    Montserrat_200ExtraLight,
    Montserrat_100Thin,
    Inter_900Black,
  } from "@expo-google-fonts/dev";

type Props = {
  currentwallet: string;
  tournamentname: string;
  invited_nfts: string;
  tournamentlink: string;
};

export function Invite({ currentwallet, tournamentname, invited_nfts, tournamentlink }: Props) {
  return (
    <Pressable onPress={() => Linking.openURL("https://invite.r3x.tech/")} style={styles.container}>
        <Text style={tw`font-extrabold text-center text-24px text-white`}>
          {tournamentname}
        </Text>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Text style={tw`mt-6 font-extrabold text-center text-14px text-white`}>
          INVITE CREATOR
        </Text>
        <Text style={styles.item}>{currentwallet}</Text>
        <Text style={tw`mt-2 font-extrabold text-center text-14px text-white`}>
          GUESTLIST
        </Text>
        <Text style={styles.item}>{invited_nfts}</Text>
        <Text style={tw`mt-2 font-extrabold text-center text-14px text-white`}>
          TOURNAMENT LINK
        </Text>
        <Text style={styles.item}>{tournamentlink}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10,
      marginTop: 0,
    },
    item: {
      padding: 10,
      fontSize: 14,
      height: 44,
      marginTop: 0,
      marginBottom: 0,
      backgroundColor: "#16181F",
      color: "white",
      fontFamily: Montserrat_800ExtraBold,
      display: "flex",
      justifyContent: "center",
    },
  });
