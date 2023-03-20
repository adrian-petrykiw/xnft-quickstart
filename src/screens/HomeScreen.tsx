import { Pressable, Image, Text } from "react-native";
import { View } from "react-xnft";

import * as Linking from "expo-linking";

import tw from "twrnc";

import { Screen } from "../components/Screen";
import { Section } from "../components/Section";
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

export function HomeScreen() {
  const features = [
    "INVITES",
    "ACHIEVEMENTS",
    "NFT ASSET TRANSLATOR",
    "NFT ASSET CONVERTER",
  ];

  return (
    <Screen style={{backgroundColor:"#000000"}}>
      <View style={{display: 'flex', justifyContent: 'center'}}>
      <Image
          source={require("../../assets/rex.png")}
          style={{ width: 200, height: 200, display: 'flex', justifyContent: 'center'}}
        />
      </View>
      <View style={{display: 'flex', justifyContent: 'center'}}>
      <Text style={tw`text-36px mb-10 font-extrabold text-center text-white`}>
        WELCOME TO REX!
      </Text>
      </View>
      <View style={{ display: "grid", justifyContent: "center" }}>
        <Text style={tw`mb-3 font-extrabold text-start text-16px text-white`}>
          What is REX?{" "}
        </Text>
        <Text style={tw`text-16px mb-5 font-normal text-start text-16px text-white`}>
          A gaming interoperability protocol that enables you to create and play
          with your game assets anywhere anytime
        </Text>
        <Text style={tw`mb-3 font-extrabold text-start text-16px text-white`}>
          How can I get started?{" "}
        </Text>
        <Pressable
          style={{
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 0,
            elevation: 3,
            marginTop: 3
          }}
          onPress={() => Linking.openURL("https://www.r3x.tech/#learnmore")}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 21,
              fontWeight: "bold",
              letterSpacing: 0.25,
              color: "black",
            }}
          >
            LEARN HOW
          </Text>
        </Pressable>
      </View>
      {/* <FlatList
        data={features}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={tw`text-center mb-2 font-semibold style-italic`}> {item}</Text>}
      /> */}
    </Screen>
  );
}
