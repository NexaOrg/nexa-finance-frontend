import React from 'react';
import { Routes } from './src/routes/index'; 
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';

export default function App() {
  return (
    <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
      <Routes />
    </NavigationContainer>
  );
}