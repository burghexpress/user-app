import { useEffect } from "react";
import { useFonts } from "expo-font";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/use-color-scheme";
import * as SplashScreen from "expo-splash-screen";



SplashScreen.preventAutoHideAsync();



export const unstable_settings = {
  anchor: "(tabs)",
};



export default function RootLayout () {

  const [loaded, error] = useFonts({
    "Atelia": require("../assets/fonts/atelia/Atelia.otf"),
    "Metropolis-Thin": require("../assets/fonts/metropolis/Metropolis-Thin.otf"),
    "Metropolis-Regular": require("../assets/fonts/metropolis/Metropolis-Regular.otf"),
    "Metropolis-Medium": require("../assets/fonts/metropolis/Metropolis-Medium.otf"),
    "Metropolis-SemiBold": require("../assets/fonts/metropolis/Metropolis-SemiBold.otf"),
    "Metropolis-Bold": require("../assets/fonts/metropolis/Metropolis-Bold.otf")
  });


  const colorScheme = useColorScheme();


  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);


  if (!loaded && !error) {
    return null;
  }


  return (
    
    <ThemeProvider
      value={
        colorScheme === "dark" ?
          DarkTheme
        :
          DefaultTheme
      }
    >

      <Stack>

        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="modal"
          options={{
            presentation: "modal",
            title: "Modal"
          }}
        />

      </Stack>

      <StatusBar style="auto" />

    </ThemeProvider>

  );

}
