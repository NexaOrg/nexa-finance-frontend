import React from 'react';
import { LogBox } from 'react-native';
import { Routes } from './src/routes/index';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

export default function App() {
  const [] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  LogBox.ignoreAllLogs(true);

  return (
    <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
      <Routes />
    </NavigationContainer>
  );
}