import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text } from 'react-native';
import CustomTabBar from '../components/CustomTabBar';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export function MainTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <CustomTabBar {...props} />}>
            <Tab.Screen name='Home' component={() => <SafeAreaView><Text>Início</Text></SafeAreaView>} />
            <Tab.Screen name='Wallet' component={() => <SafeAreaView><Text>Carteira</Text></SafeAreaView>} />
            <Tab.Screen name='Categories' component={() => <SafeAreaView><Text>Categorias</Text></SafeAreaView>} />
            <Tab.Screen name='Profile' component={() => <SafeAreaView><Text>Perfil</Text></SafeAreaView>} />
        </Tab.Navigator>
    )
}