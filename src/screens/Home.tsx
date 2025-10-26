import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, Image, View, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Home() {

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
        <View style={{flexDirection: 'column', flex:1, width: '100%', paddingHorizontal: 30}}>
          <View style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 130, height: 130}} source={require('@/assets/images/icon.png')}/>
          </View>

          <TextInput style={styles.input}
                      placeholder='Email'
                      placeholderTextColor="#9E9E9E"
                      autoCapitalize='none'
                      autoCorrect={false}
                      keyboardType='email-address'/>

          <TextInput style={styles.input}
                      placeholder='Senha'
                      placeholderTextColor="#9E9E9E"
                      autoCapitalize='none'
                      autoCorrect={false}/>

          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Text style={{color: '#9E9E9E', textAlign: 'right', fontSize: 15, padding: 8}} onPress={() => console.log('Esqueceu a senha de novo?')}>Esqueci minha senha</Text>
          </View>

          <View style={{flex: 1, justifyContent: 'flex-end', gap: 10}}>
            <TouchableOpacity style={{
                          width: '100%',
                          height: 45,
                          backgroundColor: '#F39F03',
                          paddingInline: 10,
                          borderRadius: 10,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                <Text style={{color: 'white', fontSize: 18, fontWeight: 700}}>Entrar</Text>
              </TouchableOpacity>

              <Text style={{textAlign: 'center', color: '#9E9E9E'}}>Criar uma conta</Text>
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
    paddingInline: 15,
    borderRadius: 13,
    color: 'white',
    fontSize: 18,
    marginVertical: 5
  },
  inputError: {
    borderColor: '#ff3b30',
  },
});