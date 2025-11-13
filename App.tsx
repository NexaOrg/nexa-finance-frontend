import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import { AppNavigator } from './src/navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
      <AppNavigator />
    </NavigationContainer>
  );
}