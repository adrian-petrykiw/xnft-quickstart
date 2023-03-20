import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
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
  style?: StyleProp<ViewStyle>;
  children: JSX.Element | JSX.Element[] | null;
};
export function Screen({ style, children }: Props) {
  return <View style={[styles.screen, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    fontFamily: Montserrat_800ExtraBold
  },
});
