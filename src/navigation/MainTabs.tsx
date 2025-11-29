import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text } from 'react-native';
import CustomTabBar from '../components/CustomTabBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dashboard } from '../screens/Dashboard';
import { Profile } from '../screens/Profile';
import { Category } from '../screens/Category';

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
            <Tab.Screen name='Categories' component={() => <Category />} />
            <Tab.Screen name='Profile' component={() => <Profile />} />
        </Tab.Navigator>
    )
}