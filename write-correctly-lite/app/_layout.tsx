import { SplashScreen, Stack, useRouter } from "expo-router";
import {
  useFonts,
  Nunito_500Medium,
  Nunito_800ExtraBold,
  Nunito_900Black,
} from "@expo-google-fonts/nunito";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createContext, useEffect, useState } from "react";
import { Platform, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

SplashScreen.preventAutoHideAsync();

export const ThemeContext = createContext();

export default function RootLayout() {
  const [theme, setTheme] = useState("CLASS_1");
  const router = useRouter();
  let [fontsLoaded] = useFonts({
    Nunito_500Medium,
    Nunito_800ExtraBold,
    Nunito_900Black,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <GestureHandlerRootView>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="classes"
            options={{
              presentation: "modal",
              headerTitle: "",
              headerShadowVisible: true,
              headerStyle: { backgroundColor: "cyan" },
              headerRight: () => {
                return Platform.OS === "android" ? (
                  <></>
                ) : (
                  <TouchableOpacity
                    style={{ width: 40, height: 40 }}
                    onPress={() => router.back()}
                  >
                    <Ionicons name="close" size={34} color="black" />
                  </TouchableOpacity>
                );
              },
            }}
          />
          <Stack.Screen
            name="statistics"
            options={{
              presentation: "modal",
              headerTitle: "",
              headerShadowVisible: true,
              headerStyle: { backgroundColor: "cyan" },
              headerRight: () => {
                return Platform.OS === "android" ? (
                  <></>
                ) : (
                  <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="close" size={34} color="black" />
                  </TouchableOpacity>
                );
              },
            }}
          />
          <Stack.Screen
            name="forSales"
            options={{
              presentation: "modal",
              headerTitle: "",
              headerShadowVisible: true,
              headerStyle: { backgroundColor: "cyan" },
              headerRight: () => {
                return Platform.OS === "android" ? (
                  <></>
                ) : (
                  <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="close" size={34} color="black" />
                  </TouchableOpacity>
                );
              },
            }}
          />
        </Stack>
      </GestureHandlerRootView>
    </ThemeContext.Provider>
  );
}
