import { StyleSheet, Text, View, KeyboardAvoidingView, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import Seperator from '../../../components/Seperator'

const SignupScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4D03F', padding: 20 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <KeyboardAvoidingView>
          <View style={styles.container}>
            <View style={{ alignItems: 'center', marginBottom: 60 }}>
              <Image style={styles.logo} source={require('../../../assets/logo.png')} />
            </View>

            <TextInput
              placeholder='Name'
              style={styles.input}
            // onChangeText={setEmail()}
            />
            <Seperator />

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

            <Seperator />

            <TextInput
              placeholder='Confirm Password'
              textContentType='password'
              style={styles.input}
            />


            <Seperator />
            <View
              style={{
                width: '100%'
              }}
            >


              <Button
                onPress={() => navigation.navigate('Login')}
                color="#E74C3C"
                title='Sign up'
              />


              <Seperator />

              <Button
                color="#2E86C1"
                title='Sign in'
                onPress={() => navigation.navigate('Login')}

              />


            </View>

          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignupScreen

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
