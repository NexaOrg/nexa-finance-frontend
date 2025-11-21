import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import CustomTabBar from '../components/CustomTabBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dashboard } from '../screens/Dashboard';

const Tab = createBottomTabNavigator();

export function MainTabs() {
    return (
        <Tab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: 'transparent',
                elevation: 0,
                borderTopWidth: 0
            },
            tabBarShowLabel: false,
        }} 
        tabBar={(props) => <CustomTabBar {...props} />}>
            <Tab.Screen name='Home' component={() => <Dashboard />} />
            <Tab.Screen name='Wallet' component={() => <SafeAreaView><Text>Carteira</Text></SafeAreaView>} />
            <Tab.Screen name='Categories' component={() => <SafeAreaView><Text>Categorias</Text></SafeAreaView>} />
            <Tab.Screen name='Profile' component={() => <SafeAreaView><Text>Perfil</Text></SafeAreaView>} />
        </Tab.Navigator>
    )
}