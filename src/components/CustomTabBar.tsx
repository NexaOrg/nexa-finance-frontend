import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { BlurView } from 'expo-blur';


export default function CustomTabBar({ state, navigation }: any) {
    return (
        <View style={{
            flexDirection: 'row',
            padding: 12,
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 25,
            marginHorizontal: 20,
            borderRadius: 50,
            gap: 5,
            position: 'absolute',
            bottom: 0
        }}>
            <BlurView
            intensity={20}
            tint="dark"
            style={{
                flex: 1,
                height: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 20,
                borderRadius: 50,
                overflow: 'hidden',
                backgroundColor: 'rgba(33, 59, 77, 0.8)',
            }}>
                {state.routes.map((route: any, index: any) => (
                    <TouchableOpacity
                        key={route.key}
                        onPress={() => navigation.navigate(route.name)}>
                        <Text style={{ color: 'white' }}>{route.name}</Text>
                    </TouchableOpacity>
                ))}
            </BlurView>

            <TouchableOpacity
                onPress={() => navigation.navigate('AddTransaction')}
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: '#F39F03',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text style={{ color: 'white', fontSize: 40}}>+</Text>
            </TouchableOpacity>

        </View>
    );
}