import * as Linking from "expo-linking";
import { atom, useRecoilState } from "recoil";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  Button,
  ActivityIndicator,
  Animated,
} from "react-native";
import tw from "twrnc";
import { Section } from "../components/Section";
import { Screen } from "../components/Screen";
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

const testAtom = atom<"native" | "bright">({
  key: "testAtom",
  default: "native",
});

function LearnMoreLink({ url }: { url: string }) {
  return <Text onPress={() => Linking.openURL(url)}>Learn more</Text>;
}

export function AchievementsScreen() {
  const [future, setFuture] = useRecoilState(testAtom);

  return (
    <Screen style={{ backgroundColor: "#000000" }}>
      <ScrollView>
        <Text
          style={tw`mb-0 mt-5 font-extrabold size-24 text-center text-36px text-white`}
        >
          ACHIEVEMENTS{" "}
        </Text>
        <Text
          style={tw`mb-0 mt-5 font-normal size-24 text-center text-18px text-white`}
        >
          COMING SOON{" "}
        </Text>
      </ScrollView>
    </Screen>
  );
}
