import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import { Routes } from "./src/routes";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import {
  RobotoCondensed_700Bold,
  RobotoCondensed_700Bold_Italic,
} from "@expo-google-fonts/roboto-condensed";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold_Italic,
  });

  if (!fontLoaded) {
    return;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <Routes />
    </ThemeProvider>
  );
}
