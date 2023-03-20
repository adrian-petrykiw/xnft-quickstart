import * as Linking from "expo-linking";
import { atom, useRecoilState } from "recoil";
import {
  Text,
  FlatList,
  ScrollView,
  Image,
  Button,
  ActivityIndicator,
  Animated,
  StyleSheet,
  Pressable,
} from "react-native";
import { usePublicKey, View } from "react-xnft";
import tw from "twrnc";
import { Section } from "../components/Section";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
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
// import { supabase } from "../supabaseClient";

import { createClient } from "@supabase/supabase-js";
import { Invite } from "../components/Invite";

const testAtom = atom<"native" | "bright">({
  key: "testAtom",
  default: "native",
});

// type Invite = {
//   currentwallet: string;
//   tournamentname: string;
//   tournamentlink: string;
//   invited_nfts: Array<String>;
//   updated_at: string;
// };

export function InvitesScreen() {
  const supabaseURL = "https://abvmcweefwsqdapnvmte.supabase.co";
  const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFidm1jd2VlZndzcWRhcG52bXRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMzOTI0MTAsImV4cCI6MTk4ODk2ODQxMH0.5z-0gEi5Qa7Lp1fcd_eEyL9x_n4nm0VpNqcwtMhxNII";
  const supabase = createClient(supabaseURL, supabaseAnonKey);

  const [currentInvites, setCurrentInvites] = useState();
  // const [currentInvites, setCurrentInvites] = useState<Invite[]>([]);
  const [isLoading, setLoading] = useState(true);

  const getInvites = async () => {
    try {
      setLoading(true);
      const currentwallet = usePublicKey();
      if (currentwallet !== null) {
        let { data: invites, error } = await supabase
          .from("invites")
          .select("*")
          .eq("currentwallet", currentwallet);
        if (error) {
          throw error;
        }
        console.log("passsed");
        if (invites != null) {
          console.log("this is invites: " + invites);
        } else {
          console.log("if didnt run");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInvites();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
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

  return (
    <Screen style={{ backgroundColor: "#000000" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#7860FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 0,
            elevation: 3,
            marginHorizontal: 60,
            marginVertical: 20,
            width: 300,
          }}
          onPress={() => Linking.openURL("https://invite.r3x.tech/")}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 21,
              fontWeight: "bold",
              letterSpacing: 0.25,
              color: "white",
              fontFamily: Montserrat_800ExtraBold,
            }}
          >
            CREATE INVITE
          </Text>
        </Pressable>
      </div>
      <ScrollView>
        <Text
          style={tw`mb-0 mt-5 font-extrabold size-24 text-center text-36px text-white`}
        >
          MY INVITES{" "}
        </Text>
        <View style={styles.container}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={[
                {
                  currentwallet: "nSn3g3QeE5qn8kSs233zfXaPhpX1BrPwZscZyeiX8rW",
                  tournamentname: "Star Wars",
                  invited_nfts:
                    "[EFd3WV11WGPzw6FVGimGMnmkRFvqpvLTaABPJpZpRmun]",
                  tournamentlink: "https://play.r3x.tech/",
                },
              ]}
              // keyExtractor={({id}) => id}
              renderItem={({ item }) => (
                <View style={tw`bg-[#16181F] p-5 mr-60 ml-60 text-center`}>
                  <Invite
                    currentwallet={item.currentwallet}
                    tournamentname={item.tournamentname}
                    invited_nfts={item.invited_nfts}
                    tournamentlink={item.tournamentlink}
                  />
                </View>
              )}
            />
          )}
        </View>
        {/* <View>
          <List style={{ padding: "0rem 0rem 0rem 0.5rem" }}>
            <ListItem
              key={"Create Invite"}
              onClick={() => navigate("/")}
              style={{ padding: "1rem 0rem 0rem 0rem" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <CreateIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"CREATE INVITE"}
                  primaryTypographyProps={{
                    fontFamily: "Montserrat",
                    fontWeight: "800",
                    fontSize: "14px",
                    letterSpacing: "1px",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              key={"My Invites"}
              onClick={() => navigate("/myinvites")}
              style={{ padding: "0.5rem 0rem 0rem 0rem" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"MY INVITES"}
                  primaryTypographyProps={{
                    fontFamily: "Montserrat",
                    fontWeight: "800",
                    fontSize: "14px",
                    letterSpacing: "1px",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              key={"Help"}
              onClick={() => {
                window.location.href = `https://www.r3x.tech/contact`;
              }}
              style={{ padding: "0.5rem 0rem 0rem 0rem" }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <QuestionMarkIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"HELP"}
                  primaryTypographyProps={{
                    fontFamily: "Montserrat",
                    fontWeight: "800",
                    fontSize: "14px",
                    letterSpacing: "1px",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </View> */}
      </ScrollView>
    </Screen>
  );
}
