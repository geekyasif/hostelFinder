import { StyleSheet, Text, View, KeyboardAvoidingView, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, } from 'react-native'
import React from 'react'
import Seperator from '../../components/Seperator'
import { Avatar, Button, Input } from '@ui-kitten/components';

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <KeyboardAvoidingView>
          <View style={styles.container}>
            <View style={styles.profileContainer}>
              <Avatar style={styles.profile} size='giant' source={require('../../assets/user.png')} />
            </View>

            <View style={styles.inputContainer}>


              <Seperator />
              <Input
                status='warning'
                placeholder='Mohammad Asif'
                textContentType='password'
                style={styles.input}
              />


              <Seperator />
              <Input

                status='warning'
                placeholder='+91 123456789'
                textContentType='password'
                style={styles.input}
              />



              <Seperator />
              <Input

                status='warning'
                placeholder='mdasif08737@gmail.com'
                textContentType='password'
                style={styles.input}
              />


              <Seperator />
              <Input

                status='warning'
                placeholder='Integral University Lucknow'
                textContentType='password'
                style={styles.input}
              />

              <Seperator />

              <Button style={styles.button}
                appearance='outline' status='warning'

                size='small'>
                Save
              </Button>

              <Seperator />

              <Button style={styles.button}
                appearance='outline' status='danger'

                size='small'>
                Change Password
              </Button>




            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({

  container: {
    padding: 10
  },
  input: {
    // padding: 8,
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#F2F3F4",
    backgroundColor: 'white'
  },

  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  profile: {
    resizeMode: "center",
    width: 100,
    height: 200,
  },
})