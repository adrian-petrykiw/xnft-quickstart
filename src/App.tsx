import { registerRootComponent } from "expo";
import { RecoilRoot } from "recoil";
import { ActivityIndicator, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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

import { HomeScreen } from "./screens/HomeScreen";
import { CreateScreen } from "./screens/CreateScreen";
import { InvitesScreen } from "./screens/InvitesScreen";
import { AchievementsScreen } from "./screens/AchievementsScreen";


const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#FFFFFF",
        tabBarActiveBackgroundColor: "#000000",
        tabBarInactiveBackgroundColor: "#000000",
        tabBarStyle: { borderTopWidth: 0 },

        headerTitleStyle: {
          fontWeight: "bold",
          fontFamily: Montserrat_800ExtraBold,
        },
      }}
    >
      <Tab.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "HOME",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="CREATE"
        component={CreateScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'CREATE',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="palette"
              color={color}
              size={size}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="INVITES"
        component={InvitesScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'INVITES',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="message-plus"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ACHIEVEMENTS"
        component={AchievementsScreen}
        options={{
          headerShown: false,
          tabBarLabel: "ACHIEVEMENTS",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="progress-star"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          backgroundColor: "#111827",
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <RecoilRoot>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default registerRootComponent(App);
