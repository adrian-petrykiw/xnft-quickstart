import { registerRootComponent } from "expo";
import { RecoilRoot } from "recoil";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts, Montserrat_800ExtraBold, Inter_900Black } from "@expo-google-fonts/dev";

import { InvitesScreen } from "./screens/InvitesScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { AchievementsScreen } from "./screens/AchievementsScreen";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#000000",
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: Montserrat_800ExtraBold
        },
      }}
    >
      <Tab.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="INVITES"
        component={InvitesScreen}
        options={{
          headerShown: false,
          tabBarLabel: "My Invites",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message-plus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ACHIEVEMENTS"
        component={AchievementsScreen}
        options={{
          tabBarLabel: "Achievements",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-star" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Montserrat_800ExtraBold
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", height: "100%", backgroundColor: "#111827" }}>
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
