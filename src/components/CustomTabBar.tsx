import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { BlurView } from 'expo-blur';


export default function CustomTabBar({ state, navigation }: any) {
    
    const isFocused = (index: number) => state.index === index;

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
            bottom: 0,
            zIndex: 1,
        }}>
            <BlurView
            intensity={20}
            tint="dark"
            style={{
                flex: 1,
                height: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 5,
                borderRadius: 50,
                paddingVertical: 5,
                paddingHorizontal: 8,
                overflow: 'hidden',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={1} style={{ flex: 1 }}>
                    <View style={{ backgroundColor: isFocused(0) ? '#213B4D' : 'transparent', borderRadius: 50, alignItems: 'center', justifyContent: 'center', padding: 12}}>
                        <Image 
                            style={{ height: '100%', width: 26, opacity: isFocused(0) ? 0 : 1 }} 
                            source={require('../assets/icons/home-gray.png')} 
                        />
                        <Image 
                            style={{ height: '100%', width: 26, position: 'absolute', opacity: isFocused(0) ? 1 : 0 }} 
                            source={require('../assets/icons/home-white.png')} 
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity disabled onPress={() => navigation.navigate('Wallet')} activeOpacity={1} style={{ flex: 1 }}>
                    <View style={{ backgroundColor: isFocused(1) ? '#213B4D' : 'transparent', borderRadius: 50, alignItems: 'center', justifyContent: 'center', padding: 12 }}>
                        <Image 
                            style={{ height: '100%', width: 26, opacity: isFocused(1) ? 0 : 1 }} 
                            source={require('../assets/icons/wallet-gray.png')} 
                        />
                        <Image 
                            style={{ height: '100%', width: 26, position: 'absolute', opacity: isFocused(1) ? 1 : 0 }} 
                            source={require('../assets/icons/wallet-white.png')} 
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Categories')} activeOpacity={1} style={{ flex: 1 }}>
                    <View style={{ backgroundColor: isFocused(2) ? '#213B4D' : 'transparent', borderRadius: 50, alignItems: 'center', justifyContent: 'center', padding: 9 }}>
                        <Image 
                            style={{ height: '100%', width: 26, paddingTop: 5, opacity: isFocused(2) ? 0 : 1 }} 
                            source={require('../assets/icons/tag-gray.png')} 
                        />
                        <Image 
                            style={{ height: '100%', width: 26, paddingTop: 5, position: 'absolute', opacity: isFocused(2) ? 1 : 0 }} 
                            source={require('../assets/icons/tag-white.png')} 
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Profile')} activeOpacity={1} style={{ flex: 1 }}>
                    <View style={{ backgroundColor: isFocused(3) ? '#213B4D' : 'transparent', borderRadius: 50, alignItems: 'center', justifyContent: 'center', padding: 12 }}>
                        <Image 
                            style={{ height: '100%', width: 26, opacity: isFocused(3) ? 0 : 1 }} 
                            source={require('../assets/icons/avatar-gray.png')} 
                        />
                        <Image 
                            style={{ height: '100%', width: 26, position: 'absolute', opacity: isFocused(3) ? 1 : 0 }} 
                            source={require('../assets/icons/avatar-white.png')} 
                        />
                    </View>
                </TouchableOpacity>
            </BlurView>

            <TouchableOpacity
                onPress={() => navigation.navigate('AddTransaction')}
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    padding: 19,
                    backgroundColor: '#F39F03',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Image style={{ width: '100%', height: '100%'}} source={require('../assets/icons/plus.png')} />
            </TouchableOpacity>

        </View>
    );
}