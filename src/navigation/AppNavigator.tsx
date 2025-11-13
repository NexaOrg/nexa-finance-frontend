import React from 'react';
import { MainTabs } from './MainTabs';
import { AuthStack } from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddTransaction } from '../screens/AddTransaction';
import { useAuth } from '../contexts/AuthContext';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
    const { userLogged }: any = useAuth();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!userLogged ? (
                <Stack.Screen name='AuthStack' component={AuthStack} />
            ) : (
                <>
                    <Stack.Screen name='MainTabs' component={MainTabs} />
                    <Stack.Screen name='AddTransaction' component={AddTransaction} />
                </>
            )}
        </Stack.Navigator>
    )
}