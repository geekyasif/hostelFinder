import { StyleSheet, Text, View, KeyboardAvoidingView, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, Button, FlatList } from 'react-native'
import React from 'react'
import Tag from '../../components/Tag'
import Card from '../../components/Card'

const HomeScreen = ({ navigation }) => {

  const Tags = [
    {
      'id': 1,
      'name': 'Hostel'
    },
    {
      'id': 2,
      'name': 'Mess'
    },
    {
      'id': 3,
      'name': 'Partner'
    },
    {
      'id': 4,
      'name': 'Resturant'
    },
    {
      'id': 5,
      'name': 'Apartment'
    },

    {
      'id': 6,
      'name': 'Flat'
    },

  ]


  const Hostels = [
    {
      'id': 1,
      'img': '../../assets/logo.png',
      'name': 'Ms Boys Hostel',
      'address': 'Integral University Lucknow',
      'availability': '2 Room Available',
      'phone': '123456789',
      'email': 'mdasif08737@gmail.com',
      'details': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      'price': '2000'
    },

    {
      'id': 9,
      'img': '../../assets/logo.png',
      'name': 'Marhaba Resturant and Mess',
      'address': 'Integral University Lucknow',
      'availability': 'Lunch and Dinner Available',
      'phone': '123456789',
      'email': 'mdasif08737@gmail.com',
      'details': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      'price': '2000'
    },


    {
      'id': 2,
      'img': '../../assets/logo.png',
      'name': 'Sunil Boys Hostel & Mess',
      'address': 'Integral University Lucknow',
      'phone': '123456789',
      'availability': '2 Room Available',
      'email': 'mdasif08737@gmail.com',
      'details': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      'price': '2000'
    },
    {
      'id': 3,
      'img': '../../assets/logo.png',
      'name': 'Integral Girls Hostel',
      'address': 'Integral University Lucknow',
      'availability': '2 Room Available',
      'phone': '123456789',
      'email': 'mdasif08737@gmail.com',
      'details': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      'price': '2000'
    },
    {
      'id': 4,
      'img': '../../assets/logo.png',
      'name': 'Infinity Hostel',
      'address': 'Integral University Lucknow',
      'availability': '2 Room Available',
      'phone': '123456789',
      'email': 'mdasif08737@gmail.com',
      'details': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      'price': '6000'
    },
    {
      'id': 5,
      'img': '../../assets/logo.png',
      'name': 'Marvel Hostel',
      'address': 'Integral University Lucknow',
      'availability': '2 Room Available',
      'phone': '123456789',
      'email': 'mdasif08737@gmail.com',
      'details': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      'price': '10,000'
    },

    {
      'id': 6,
      'img': '../../assets/logo.png',
      'name': 'Oyo Rooms',
      'address': 'Integral University Lucknow',
      'availability': '2 Room Available',
      'phone': '123456789',
      'email': 'mdasif08737@gmail.com',
      'details': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      'price': '4000'
    },

  ]



  return (
    <SafeAreaView >
      <ScrollView>
        <View>
          {/* <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Tags}
            renderItem={({ item }) => <Tag name={item.name} />}
            keyExtractor={item => item.id}

          /> */}
          <View style={styles.container}>

            <FlatList
              showsHorizontalScrollIndicator={false}
              data={Hostels}
              renderItem={({ item }) =>

                <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                  <Card item={item} />
                </TouchableOpacity>

              }
              keyExtractor={item => item.id}

            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({


})