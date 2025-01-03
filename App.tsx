import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Theme } from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    'pretendard-variable': require('./assets/fonts/PretendardVariable.ttf'),
    'commutersans-semibold': require('./assets/fonts/Fontspring-DEMO-commuterssans-semibold.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={Theme}>
      <SafeAreaView>
        <StatusBar style="auto" />
      </SafeAreaView>
    </ThemeProvider>
  );
}
