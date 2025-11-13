import React from 'react';
import { MainTabs } from './MainTabs';
import { AuthStack } from './AuthStack';

export function AppNavigator() {
    const userLogged = true;

    return userLogged ? <MainTabs /> : <AuthStack />
}