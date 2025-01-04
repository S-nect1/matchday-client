import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Theme } from './src/styles/theme';
import AlarmButton from 'src/components/@common/icons/AlarmButton';
import MainLogo from 'src/components/@common/icons/MainLogo';
// import Input from './src/components/@common/Input';

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
        {/* <Input /> */}
        <Text>아이콘 테스트</Text>
        <AlarmButton size={24} />
        <MainLogo size={24} />
      </SafeAreaView>
    </ThemeProvider>
  );
}
