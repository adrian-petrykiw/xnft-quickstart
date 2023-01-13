import { Pressable, Text } from "react-native";
import { View } from "react-xnft";

import * as Linking from "expo-linking";

import tw from "twrnc";

import { Screen } from "../components/Screen";

export function HomeScreen() {
  const features = [
    "INVITES",
    "ACHIEVEMENTS",
    "NFT ASSET TRANSLATOR",
    "NFT ASSET CONVERTER",
  ];

  return (
    <Screen style={{backgroundColor:"#000000"}}>
      <Text style={tw`text-24px mb-10 mt-10 font-extrabold text-center text-white`}>
        WELCOME TO REX!
      </Text>
      <View style={{ display: "grid", justifyContent: "center" }}>
        <Text style={tw`mb-3 font-extrabold size-24 text-start text-16px text-white`}>
          What is REX?{" "}
        </Text>
        <Text style={tw`text-16px mb-5 font-normal size-24 text-start text-16px text-white`}>
          A gaming interoperability protocol that enables you to create and play
          with your game assets anywhere anytime
        </Text>
        <Text style={tw`text-16px mb-3 font-extrabold size-24 text-start text-16px text-white`}>
          How can I get started?{" "}
        </Text>
        <Pressable
          style={{
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
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
