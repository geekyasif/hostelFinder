import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Tag = ({name}) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View style={{ borderRadius: 20, borderWidth: 0.5, borderColor: "gray", padding: 8, margin: 5, backgroundColor: 'white' }}>
                <Text>{name}</Text>
            </View>
        </View>
    )
}

export default Tag

const styles = StyleSheet.create({})