import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from '../components/GlobalText';

export function AddTransaction({ navigation } : any) {
    return (
        <SafeAreaView>
            <Text style={{ fontSize: 20, padding: 20, color: 'white' }}>Nova transação</Text>
        </SafeAreaView>
    )
}