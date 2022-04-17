import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Avatar, Button, Input } from '@ui-kitten/components';

const Card = ({ item }) => {
    const { img, name, address, price, availability } = item
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View styles={styles.image}>
                    <Image style={styles.img} source={require('../assets/hostelPic1.jpeg')} />
                </View>
                <View style={styles.cardDetailsSection}>
                    <Text numberOfLines={1} style={styles.title} >{name}</Text>
                    <Text style={styles.address}>{address}</Text>
                    <Text style={styles.room}>{availability}</Text>
                </View>

                {/* <View style={styles.cardBtnSection}>
                    <Button size='tiny'>
                        Book
                    </Button>
                    <Text style={styles.price}>{price}</Text>
                </View> */}
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,

    },

    image: {
        width: 100,
        height: 100,
        backgroundColor: 'gray',
    },

    img: {
        width: 120,
        height: 100,
        resizeMode: 'cover',
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
    },

    cardDetailsSection: {
        marginLeft: 10,
        marginTop: 0,
        paddingTop: 0,
    },


    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 3,

    },

    address: {
        marginBottom: 10,
    },

    price: {
        marginTop: 10
    }
})