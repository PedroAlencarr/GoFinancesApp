import React from "react";
import { ThemeProvider } from "styled-components";

import { Dashboard } from "@/screens/Dashboard";
import { Register } from "@/screens/Register";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import theme from "@/global/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  // if (!fontsLoaded) { return <AppLoading /> }

  return (
    <ThemeProvider theme={theme}>
      {/* <Dashboard /> */}
      <Register />
    </ThemeProvider>
  );
}
