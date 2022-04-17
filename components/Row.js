import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Row = (props) => {
  return (
    <View style={styles.container}>
        {props.children}
    </View>
  )
}

export default Row

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})