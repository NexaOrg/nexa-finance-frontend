import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { AddTransaction } from '../screens/AddTransaction';

const Stack = createNativeStackNavigator();

export function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#0D1928' } }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name='AddTransaction' component={AddTransaction} />
        </Stack.Navigator>
    )
}