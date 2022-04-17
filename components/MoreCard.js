import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Row from './Row'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faLocationPin} from "@fortawesome/free-solid-svg-icons";

const MoreCard = ({ item }) => {
    const { img, name, address, price, availability } = item
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/hostelPic.jpg')} />
            <View style={{ flex: 1, padding: 8 , display:'flex', justifyContent: 'space-between'}}>
                <View>
                <Text style={{ fontWeight: 'bold', marginBottom: 10 }} numberOfLines={2} >{name}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesomeIcon icon={faLocationPin} size={12} />
                    <Text style={{fontSize: 10, marginLeft: 5}} numberOfLines={1}>{address}</Text>
                </View>
            </View>
        </View>
    )
}

export default MoreCard

const styles = StyleSheet.create({

    container: {
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: 'gray',
        marginRight: 10,
        width: 150,
        height: 180,
    },
    img: {
        width: "100%",
        height: 100,
        resizeMode: 'cover',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    }

})