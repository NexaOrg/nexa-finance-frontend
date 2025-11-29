import React, { useMemo, useRef } from 'react';
import { View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from '../components/GlobalText';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';


export function Category() {

    const snapPoints = useMemo(() => ['40%', '80%'], []);
    const bottomSheetRef = useRef<BottomSheet>(null);

    const openSheet = () => {
        bottomSheetRef.current?.expand();
    };

    const icons: { [key: string]: any } = {
        store: require('../assets/icons/store-front.png'),
        food: require('../assets/icons/restaurant.png')
    };

    const categories = [
        {
            name: 'Roupa',
            quantity: 5,
            icon: 'store',
            value: 1542.00
        },
        {
            name: 'Comida',
            quantity: 17,
            icon: 'food',
            value: 2920.42
        },
    ];

    return (
        <View style={{ backgroundColor: '#0D1928', flex: 1 }}>
            <View style={{ width: '100%', height: 100, flexDirection: 'row', paddingLeft: 20, paddingTop: 60, backgroundColor: '#0D1928' }}>
                <View style={{ width: 32, height: 26, marginRight: 10}}>
                    <Image style={{ width: '100%', height: '100%'}} source={require('../assets/images/logo.png')}/>
                </View>
            </View>

            <Text style={{ fontSize: 20, padding: 20, color: 'white' }}>Minhas Categorias</Text>
            
            <ScrollView style={{ flex: 1, width: '100%', backgroundColor: '#0D1928', paddingHorizontal: 20 }}>
                <View style={{ flexGrow: 0, paddingBottom: 20 }}>
                    <FlatList scrollEnabled={false} renderItem={({item}) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#213b4d', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 15, marginBottom: 10 }}>
                            <View style={{ width: 28, height: 28, marginRight: 10 }}>
                                <Image style={{ width: '100%', height: '100%', objectFit: 'cover'}} source={icons[item.icon]}/>
                            </View>

                            <View style={{ flexDirection: 'column', flex: 1}}>
                                <Text style={{ color: 'white', fontFamily: 'Montserrat_500Medium', fontSize: 18 }}>{item.name}</Text>
                                <Text style={{ color: 'white' }}>{item.quantity < 10 && item.quantity > 0 ? 0 : null}{item.quantity}</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: 'white', alignSelf: 'flex-end', fontSize: 14}}>R$</Text>
                                <Text style={{ color: 'white', fontFamily: 'Montserrat_500Medium', fontSize: 18 }}>
                                    {Number(item.value).toLocaleString('pt-BR', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                </Text>
                            </View>
                        </View>
                    )} data={categories}/>
                </View>

                <TouchableOpacity style={{
                    width: '100%',
                    height: 45,
                    backgroundColor: '#F39F03',
                    paddingInline: 10,
                    borderRadius: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                    onPress={openSheet}>
                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Montserrat_500Medium', textAlign: 'center', flex: 1 }}>Nova Categoria</Text>
                </TouchableOpacity>
            </ScrollView>

            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                snapPoints={snapPoints}
                enablePanDownToClose>
                <BottomSheetScrollView style={{ padding: 20 }}>
                    <Text>Conteúdo…</Text>
                </BottomSheetScrollView>
            </BottomSheet>
        </View>
    )
}