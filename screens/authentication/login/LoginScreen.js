import { StyleSheet, Text, TextInput, View, Image, SafeAreaView, ScrollView, Button, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import LoginBtn from '../../../components/LoginBtn'
import Seperator from '../../../components/Seperator'

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#F4D03F', padding: 20}}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <KeyboardAvoidingView >
                    <View style={styles.container}>
                        <View style={{ alignItems: 'center', marginBottom: 60 }}>
                            <Image style={styles.logo} source={require('../../../assets/logo.png')} />
                        </View>

                        <TextInput
                            placeholder='Email'
                            textContentType='emailAddress'
                            style={styles.input}
                            // onChangeText={setEmail()}
                        />
                        <Seperator />
                        <TextInput
                            placeholder='Password'
                            textContentType='password'
                            style={styles.input}
                        />


                        <TouchableOpacity
                            onPress={() => navigation.navigate('ForgotPassword') }
                            style={{
                                alignItems: 'flex-end',
                                marginTop: 5,
                                marginBottom: 3,
                            }}
                        >
                        <Text style={{ fontSize: 12, color: "gray" }} >Forgot Password</Text>
                        </TouchableOpacity>

                        <Seperator />
                        <View
                            style={{
                                width: '100%'
                            }}
                        >
                            <Button
                                color="#2E86C1"
                                title='Sign in'
                                onPress={ () => navigation.navigate('Home')}

                            />
                            <Seperator />
                            <Button
                                onPress={ () => navigation.navigate('Signup')}
                                color="#E74C3C"
                                title='Sign up' 
                            />
                        </View>

                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({

    logo: {
        width: 100,
        height: 100,
    },
    input: {
        padding: 8,
        width: '100%',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: "#F2F3F4"
    }

});
