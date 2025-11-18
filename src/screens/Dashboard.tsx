import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, View, Image } from 'react-native';
import { Text } from '../components/GlobalText';
import { PieChart } from 'react-native-gifted-charts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function Dashboard({ navigation }: any) {
  const [isVisible, setIsVisible] = useState(true);

    const easeOutCubic = (t: any) => 1 - Math.pow(1 - t, 3);

    const easeOutBack = (t: any) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    };


  const [dataAnimated, setDataAnimated] = useState([
    { value: 0, color: '#F39F03' },
    { value: 100, color: '#ffffff' }
  ]);
  
  const [percentText, setPercentText] = useState(0);
  

  useEffect(() => {

    const FINAL_VALUE = 70;
    const DURATION = 1500;
    const OVERSHOOT = 1.08;
  
    const start = Date.now() + 200;
  
    const animate = () => {
      const now = Date.now();
      const elapsed = now - start;
      const t = Math.min(elapsed / DURATION, 1);
  
      const eased = easeOutCubic(t);
  
      const overshootApplied = t < 1 ? eased : easeOutBack(1);

      const animatedValue = overshootApplied * FINAL_VALUE * OVERSHOOT;

      const clamped = Math.min(animatedValue, FINAL_VALUE);

      setDataAnimated([
        { value: clamped, color: '#F39F03' },
        { value: 100 - clamped, color: '#ffffff' }
      ]);

      setPercentText(Math.floor((clamped / FINAL_VALUE) * 70));
  
      if (t < 1) requestAnimationFrame(animate);
    };
  
    requestAnimationFrame(animate);
  }, []);
  

  return (
    <View style={{ flex: 1, width: '100%', backgroundColor: '#ffffff'}}>
        <View style={{ width: '100%', height: 100, flexDirection: 'row', paddingLeft: 20, paddingTop: 60, backgroundColor: '#0D1928' }}>
            <View style={{ width: 32, height: 26, marginRight: 10}}>
                <Image style={{ width: '100%', height: '100%'}} source={require('../assets/images/logo.png')}/>
            </View>
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
                        paddingBottom: 20,
                        paddingTop: 10,
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
                    data={dataAnimated}
                    radius={90}
                    innerRadius={60}
                    innerCircleColor="#213b4d"
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
                        {percentText > 0 ? percentText : 0}%
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
                    borderRadius: 15,
                    padding: 20
                }}>
                <Text
                    style={{
                        color: '#0D1928',
                        fontSize: 20,
                        fontFamily: 'Montserrat_400Regular',
                        paddingBottom: 10,
                    }}>
                Atividades
                </Text>

                <Text
                    style={{
                        color: '#0D1928',
                        fontSize: 20,
                        fontFamily: 'Montserrat_400Regular',
                        paddingBottom: 10,
                        paddingTop: 10,
                    }}>
                16/10
                </Text>

                <View style={{ flexDirection: 'row', paddingLeft: 10, paddingBottom: 15 }}>
                    <View style={{ flexDirection: 'row', flex: 1}}>
                        <View style={{ width: 35, height: 35, backgroundColor: '#213B4D', borderRadius: '100%' }}></View>

                        <View style={{ flexDirection: 'column', paddingLeft: 8}}>
                            <Text style={{ fontSize: 18 }}>Saída no McDonalds</Text>
                            <Text style={{ fontSize: 14 }}>16:00</Text>
                        </View>
                    </View>

                    <Text style={{ fontSize: 18 }}>R$ 45,00</Text>
                </View>

                <Text
                    style={{
                        color: '#0D1928',
                        fontSize: 20,
                        fontFamily: 'Montserrat_400Regular',
                        paddingBottom: 10,
                        paddingTop: 10,
                    }}>
                15/10
                </Text>

                <View style={{ flexDirection: 'row', paddingLeft: 10, paddingBottom: 15 }}>
                    <View style={{ flexDirection: 'row', flex: 1}}>
                        <View style={{ width: 35, height: 35, backgroundColor: '#213B4D', borderRadius: '100%' }}></View>

                        <View style={{ flexDirection: 'column', paddingLeft: 8}}>
                            <Text style={{ fontSize: 18 }}>Saída no McDonalds</Text>
                            <Text style={{ fontSize: 14 }}>16:00</Text>
                        </View>
                    </View>

                    <Text style={{ fontSize: 18 }}>R$ 45,00</Text>
                </View>

                <View style={{ flexDirection: 'row', paddingLeft: 10, paddingBottom: 15 }}>
                    <View style={{ flexDirection: 'row', flex: 1}}>
                        <View style={{ width: 35, height: 35, backgroundColor: '#213B4D', borderRadius: '100%' }}></View>

                        <View style={{ flexDirection: 'column', paddingLeft: 8}}>
                            <Text style={{ fontSize: 18 }}>Saída no McDonalds</Text>
                            <Text style={{ fontSize: 14 }}>16:00</Text>
                        </View>
                    </View>

                    <Text style={{ fontSize: 18 }}>R$ 45,00</Text>
                </View>

                <View style={{ flexDirection: 'row', paddingLeft: 10, paddingBottom: 15 }}>
                    <View style={{ flexDirection: 'row', flex: 1}}>
                        <View style={{ width: 35, height: 35, backgroundColor: '#213B4D', borderRadius: '100%' }}></View>

                        <View style={{ flexDirection: 'column', paddingLeft: 8}}>
                            <Text style={{ fontSize: 18 }}>Saída no McDonalds</Text>
                            <Text style={{ fontSize: 14 }}>16:00</Text>
                        </View>
                    </View>

                    <Text style={{ fontSize: 18 }}>R$ 45,00</Text>
                </View>

                <Text
                    style={{
                        color: '#0D1928',
                        fontSize: 20,
                        fontFamily: 'Montserrat_400Regular',
                        paddingBottom: 10,
                        paddingTop: 10,
                    }}>
                14/10
                </Text>

                <View style={{ flexDirection: 'row', paddingLeft: 10, paddingBottom: 15 }}>
                    <View style={{ flexDirection: 'row', flex: 1}}>
                        <View style={{ width: 35, height: 35, backgroundColor: '#213B4D', borderRadius: '100%' }}></View>

                        <View style={{ flexDirection: 'column', paddingLeft: 8}}>
                            <Text style={{ fontSize: 18 }}>Saída no McDonalds</Text>
                            <Text style={{ fontSize: 14 }}>16:00</Text>
                        </View>
                    </View>

                    <Text style={{ fontSize: 18 }}>R$ 45,00</Text>
                </View>

                <Text
                    style={{
                        color: '#0D1928',
                        fontSize: 20,
                        fontFamily: 'Montserrat_400Regular',
                        paddingBottom: 10,
                        paddingTop: 10,
                    }}>
                13/10
                </Text>

                <View style={{ flexDirection: 'row', paddingLeft: 10, paddingBottom: 15 }}>
                    <View style={{ flexDirection: 'row', flex: 1}}>
                        <View style={{ width: 35, height: 35, backgroundColor: '#213B4D', borderRadius: '100%' }}></View>

                        <View style={{ flexDirection: 'column', paddingLeft: 8}}>
                            <Text style={{ fontSize: 18 }}>Saída no McDonalds</Text>
                            <Text style={{ fontSize: 14 }}>16:00</Text>
                        </View>
                    </View>

                    <Text style={{ fontSize: 18 }}>R$ 45,00</Text>
                </View>

                <View style={{ flexDirection: 'row', paddingLeft: 10, paddingBottom: 15 }}>
                    <View style={{ flexDirection: 'row', flex: 1}}>
                        <View style={{ width: 35, height: 35, backgroundColor: '#213B4D', borderRadius: '100%' }}></View>

                        <View style={{ flexDirection: 'column', paddingLeft: 8}}>
                            <Text style={{ fontSize: 18 }}>Saída no McDonalds</Text>
                            <Text style={{ fontSize: 14 }}>16:00</Text>
                        </View>
                    </View>

                    <Text style={{ fontSize: 18 }}>R$ 45,00</Text>
                </View>

                <View style={{ flexDirection: 'row', paddingLeft: 10, paddingBottom: 15 }}>
                    <View style={{ flexDirection: 'row', flex: 1}}>
                        <View style={{ width: 35, height: 35, backgroundColor: '#213B4D', borderRadius: '100%' }}></View>

                        <View style={{ flexDirection: 'column', paddingLeft: 8}}>
                            <Text style={{ fontSize: 18 }}>Saída no McDonalds</Text>
                            <Text style={{ fontSize: 14 }}>16:00</Text>
                        </View>
                    </View>

                    <Text style={{ fontSize: 18 }}>R$ 45,00</Text>
                </View>

            </View>
        </ScrollView>
    </View>
  );
}
