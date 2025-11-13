import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export default function CustomTabBar({ state, navigation }: any) {
    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: '#0D1928',
            padding: 12,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25
        }}>

            {/* Renderiza as 3 tabs normais */}
            <View style={{ flexDirection: 'row', gap: 20 }}>
                {state.routes.map((route: any, index: any) => (
                    <TouchableOpacity
                        key={route.key}
                        onPress={() => navigation.navigate(route.name)}
                    >
                        {/* Aqui você coloca ícones depois */}
                    </TouchableOpacity>
                ))}
            </View>

            {/* Botão "+" isolado */}
            <TouchableOpacity
                onPress={() => navigation.navigate('AddTransaction')}
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: '#F39F03',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {/* Ícone do + */}
            </TouchableOpacity>

        </View>
    );
}