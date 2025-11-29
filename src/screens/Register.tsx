import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Image, View, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import { Text } from '../components/GlobalText';
import { env } from '../../env';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

export function Register({ navigation }: any) {

    const url = `${env.API_URL}/user`

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        try {
            await axios.post(url, {
                name,
                username: `${name.toLowerCase()}${email.split('@')[0]}`,
                email,
                password,
            });

            navigation.goBack()
        } catch (error: any) {
            console.log('Server Error: ', error.message);
        }
    };

    return (
        <SafeAreaView style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            backgroundColor: '#0D1928',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flexDirection: 'column', flex: 1, width: '100%', paddingHorizontal: 30 }}>
                    <View style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ width: 130, height: 130 }} source={require('@/assets/images/icon.png')} />
                    </View>

                    <TextInput style={styles.input}
                        placeholder='Nome'
                        placeholderTextColor="#9E9E9E"
                        autoCapitalize='words'
                        autoCorrect={false}
                        onChangeText={setName} />

                    <TextInput style={styles.input}
                        placeholder='Email'
                        placeholderTextColor="#9E9E9E"
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='email-address'
                        onChangeText={setEmail} />

                    <TextInput style={styles.input}
                        placeholder='Senha'
                        placeholderTextColor="#9E9E9E"
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={setPassword}
                        secureTextEntry={true} />

                    <TextInput style={styles.input}
                        placeholder='Confirmar senha'
                        placeholderTextColor="#9E9E9E"
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={true} />

                    <View style={{ flex: 1, justifyContent: 'flex-end', gap: 10, paddingBottom: 15 }}>
                        <TouchableOpacity style={{
                            width: '100%',
                            height: 45,
                            backgroundColor: '#F39F03',
                            paddingInline: 10,
                            borderRadius: 10,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                            onPress={handleRegister}>
                            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Montserrat_500Medium' }}>Registrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={{ textAlign: 'center', color: '#9E9E9E', fontSize: 15 }}>Já tenho conta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#152C3C',
        paddingHorizontal: 20,
        borderRadius: 13,
        color: 'white',
        fontSize: 18,
        marginVertical: 5,
        fontFamily: 'Montserrat_400Regular'
    },
});