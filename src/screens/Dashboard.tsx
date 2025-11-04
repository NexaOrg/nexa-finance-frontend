import React from 'react';
import { View, Text } from 'react-native';

export function Dashboard({ navigation }: any) {

    return (
        <View style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            backgroundColor: '#0d1928',
            //backgroundColor: '#213B4D',
        }}>

            <View style={{
                flex: 1,
                backgroundColor: '#213b4d',
                height: 250,
            }}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#0d1928',
                    height: 250,
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                }}>
                </View>

                <View style={{
                    flex: 1,
                    height: 250,
                }}>
                </View>
            </View>

            <View style={{
                flex: 1,
                backgroundColor: '#ffffff',
                height: 250,
            }}>
            </View>
        </View>
    )
}