import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function Dashboard({ navigation }: any) {

    const [isVisible, setIsVisible] = useState(false);

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
                    flex: 4,
                    backgroundColor: '#0d1928',
                    height: 250,
                    borderBottomLeftRadius: 35,
                    borderBottomRightRadius: 35,
                    paddingTop: 50,
                    paddingHorizontal: 20,
                    paddingBottom: 20
                }}>
                    <Text style={{ color: '#ffffff', fontSize: 18 }}>Gasto mensal</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ color: '#ffffffff', fontSize: 18, textAlignVertical: 'bottom' }}>R$</Text>
                            {isVisible ? (<Text style={{ color: '#ffffff', fontSize: 35, lineHeight: 35 }}>507,32</Text>) : (<Text style={{ color: '#ffffff', fontSize: 35, lineHeight: 35 }}>•••••••</Text>)}
                        </View>

                        <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                            {isVisible ? (<Icon name="eye-off-outline" size={24} color="#fff" />) : (<Icon name="eye-outline" size={24} color="#fff" />)}
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <View>
                                <Text style={{ color: '#ffffff70', fontSize: 13, textAlignVertical: 'bottom' }}>Entradas (mês)</Text>
                                <Text style={{ color: '#ffffff', fontSize: 20 }}>R$ 2.507,32</Text>
                            </View>

                            <View>
                                <Text style={{ color: '#ffffff70', fontSize: 13, textAlignVertical: 'bottom' }}>Entradas (mês)</Text>
                                <Text style={{ color: '#ffffff', fontSize: 20 }}>R$ 2.507,32</Text>
                            </View>
                        </View>
                    </View>


                </View>

                <View style={{
                    flex: 7,
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