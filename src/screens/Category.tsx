import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Image, FlatList, Keyboard, TouchableOpacity, ScrollView, Modal, TouchableWithoutFeedback, StyleSheet, Dimensions, Animated, TextInput, Platform } from 'react-native';
import { Text } from '../components/GlobalText';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export function Category() {
    const [modalVisible, setModalVisible] = useState(false);

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    
    const slideAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

    useEffect(() => {
        const keyboardShowEvent = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
        const keyboardHideEvent = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

        const showSubscription = Keyboard.addListener(keyboardShowEvent, () => {
            setKeyboardVisible(true);
        });
        const hideSubscription = Keyboard.addListener(keyboardHideEvent, () => {
            setKeyboardVisible(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    const openSheet = () => {
        setModalVisible(true);
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const closeSheet = () => {
        Keyboard.dismiss();
        Animated.timing(slideAnim, {
            toValue: SCREEN_HEIGHT,
            duration: 250,
            useNativeDriver: true,
        }).start(() => {
            setModalVisible(false);
            setKeyboardVisible(false);
        });
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
        <View style={{ backgroundColor: '#0D1928', flex: 1, position: 'relative' }}>
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

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeSheet}>
                <TouchableWithoutFeedback onPress={closeSheet}>
                    <View style={styles.modalOverlay}>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <Animated.View style={[
                                styles.modalContent,
                                { 
                                    transform: [{ translateY: slideAnim }],
                                    height: isKeyboardVisible ? '65%' : '45%' 
                                }
                            ]}> 
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 20, marginBottom: 30, color: 'white', fontFamily: 'Montserrat_500Medium' }}>Nova Categoria</Text>
                                    
                                    <Text style={{ fontSize: 15, color: 'white' }}>Título</Text>
                                    <TextInput style={styles.input}
                                                placeholder='Alimentação'
                                                placeholderTextColor="#9E9E9E"
                                                autoCapitalize='none'
                                                autoCorrect={false} />
                                    
                                    <Text style={{ fontSize: 15, color: 'white' }}>Orçamento</Text>
                                    <View style={styles.inputContainer}>
                                        <Text style={styles.prefix}>R$</Text>

                                        <TextInput 
                                            style={styles.textInput}
                                            placeholder='1.000,00'
                                            placeholderTextColor="#9E9E9E"
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            keyboardType='numeric' 
                                        />
                                    </View>
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
                                    marginBottom: 25
                                }}
                                    onPress={openSheet}>
                                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Montserrat_500Medium', textAlign: 'center', flex: 1 }}>Salvar</Text>
                                </TouchableOpacity>
                            </Animated.View>
                        </TouchableWithoutFeedback>

                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    btnNovaCategoria: {
        width: '100%',
        height: 45,
        backgroundColor: '#F39F03',
        paddingInline: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100 
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'flex-end'
    },
    modalContent: {
        backgroundColor: '#0D1928',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        minHeight: '45%', 
        width: '100%',
    },
    input: {
        width: '100%',
        height: 45,
        backgroundColor: '#152C3C',
        paddingHorizontal: 20,
        borderRadius: 13,
        color: 'white',
        fontSize: 16,
        marginVertical: 5,
        marginBottom: 15,
        fontFamily: 'Montserrat_400Regular'
      },
    inputContainer: {
        width: '100%',
        height: 45,
        backgroundColor: '#152C3C',
        borderRadius: 13,
        paddingHorizontal: 20,
        marginVertical: 5,
        marginBottom: 15,
        
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    prefix: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Montserrat_400Regular',
        marginRight: 8,
        fontWeight: 'bold'
    },
    textInput: {
        flex: 1,
        height: '100%',
        color: 'white',
        fontSize: 16,
        fontFamily: 'Montserrat_400Regular',
    }
});