import React from 'react';
import { View, Image } from 'react-native';
import { Text } from '../components/GlobalText';

export function Profile() {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ width: '100%', height: 100, flexDirection: 'row', paddingLeft: 20, paddingTop: 60, backgroundColor: '#0D1928' }}>
                <View style={{ width: 32, height: 26, marginRight: 10}}>
                    <Image style={{ width: '100%', height: '100%'}} source={require('../assets/images/logo.png')}/>
                </View>
            </View>

            <Text style={{ fontSize: 20, padding: 20 }}>Página de perfil</Text>
        </View>
    )
}