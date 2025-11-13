import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text } from 'react-native';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export function MainTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <CustomTabBar {...props} />}>
            <Tab.Screen name='Home' component={() => <><Text>Início</Text></>} />
            <Tab.Screen name='Wallet' component={() => <><Text>Carteira</Text></>} />
            <Tab.Screen name='Categories' component={() => <><Text>Categorias</Text></>} />
            <Tab.Screen name='Profile' component={() => <><Text>Perfil</Text></>} />
        </Tab.Navigator>
    )
}