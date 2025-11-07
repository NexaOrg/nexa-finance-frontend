import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Text } from '../components/GlobalText';
import { PieChart } from 'react-native-gifted-charts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function Dashboard({ navigation }: any) {
  const [isVisible, setIsVisible] = useState(true);

  const pieData = [
    { value: 70, color: '#F39F03' },
    { value: 30, color: '#ffffff' },
  ];

  return (
    <View style={{ flex: 1, width: '100%', backgroundColor: '#ffffff'}}>
        <View style={{ width: '100%', height: 120, backgroundColor: '#0D1928' }}>
            <Text style={{ color: 'white', paddingLeft: 15, paddingTop: 70, fontSize: 25 }}>Olá, Bruno</Text>
        </View>

        <ScrollView
            style={{ flex: 1, width: '100%', backgroundColor: '#0D1928' }}
            showsVerticalScrollIndicator={false}
            bounces={true}>
                
            <View style={{
                        backgroundColor: '#0d1928',
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15,
                        paddingHorizontal: 20,
                        paddingBottom: 20
                    }}>
                <Text style={{ color: '#ffffff', fontSize: 18 }}>Gasto mensal</Text>

                <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: 5,
                    }}>
                    
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <Text
                            weight="light"
                            style={{
                                color: '#ffffff',
                                fontSize: 18,
                                textAlignVertical: 'bottom',
                                marginBottom: 5,
                            }}>
                            R$
                        </Text>
                        
                        {isVisible ? (
                            <Text
                                weight="light"
                                style={{
                                    color: '#ffffff',
                                    fontSize: 40,
                                    lineHeight: 40,
                                }}>
                            507,32
                            </Text>
                        ) : (
                            <Text
                                style={{
                                    color: '#ffffff',
                                    fontSize: 40,
                                    lineHeight: 40,
                                }}>
                            •••••••
                            </Text>
                        )}
                    </View>

                    <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                        {isVisible ? (
                            <Icon name="eye-off-outline" size={24} color="#fff" />
                        ) : (
                            <Icon name="eye-outline" size={24} color="#fff" />
                        )}
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'flex-end', marginTop: 20 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                        }}>

                        <View>
                            <Text
                                weight="light"
                                style={{
                                    color: '#ffffff70',
                                    fontSize: 13,
                                    textAlignVertical: 'bottom',
                                }}>
                            Entradas (mês)
                            </Text>

                            <Text
                                weight="light"
                                style={{
                                    color: '#ffffff',
                                    fontSize: 20,
                                }}>
                            R$ 2.507,32
                            </Text>
                        </View>

                        <View>
                            <Text
                                weight="light"
                                style={{
                                    color: '#ffffff70',
                                    fontSize: 13,
                                    textAlignVertical: 'bottom',
                                }}>
                            Saídas (mês)
                            </Text>
                            
                            <Text
                                weight="light"
                                style={{
                                    color: '#ffffff',
                                    fontSize: 20,
                                }}>
                            R$ 2.000,00
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View
                style={{
                    paddingVertical: 20,
                    paddingHorizontal: 30,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#213b4d',
                    borderRadius: 15,
                    gap: 50,
                    marginTop: 10,
                }}>
                <PieChart
                    donut
                    radius={90}
                    innerRadius={60}
                    innerCircleColor="#213b4d"
                    data={pieData}
                    centerLabelComponent={() => (
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                fontSize: 32,
                                color: '#ffffff',
                                lineHeight: 30,
                            }}>
                        70%
                        </Text>
                        <Text style={{ fontSize: 14, color: '#ffffff80' }}>
                        Novembro
                        </Text>
                    </View>
                )}/>

                <View>
                    <Text 
                        style={{
                            fontSize: 35,
                            color: '#ffffff',
                            textAlign: 'center',
                        }}>
                    Limite
                    </Text>
                    <Text
                        style={{
                            fontSize: 20,
                            color: '#ffffff80',
                            textAlign: 'center',
                        }}>
                    R$ 2.000,00
                    </Text>
                </View>
            </View>

            <View
                style={{
                    backgroundColor: '#ffffff',
                    height: 700,
                    marginTop: 10,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                }}
            />
        </ScrollView>
    </View>
  );
}
