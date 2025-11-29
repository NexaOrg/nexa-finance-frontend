import React from 'react';
import { LogBox } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import { AppNavigator } from './src/navigation/AppNavigator';
import { AuthProvider } from './src/contexts/AuthContext';
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

export default function App() {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#0D1928'
    },
  };

  const [] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  LogBox.ignoreAllLogs(true);

  return (
    <NavigationContainer theme={MyTheme} onReady={() => BootSplash.hide({ fade: true })}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}