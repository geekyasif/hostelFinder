import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import React from "react";
import { Button } from "@ui-kitten/components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBed,
  faCoffee,
  faEnvelope,
  faIndianRupeeSign,
  faLocation,
  faLocationPin,
  faMailBulk,
  faMailForward,
  faMap,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Seperator from "./Seperator";

import Icon from "react-native-vector-icons/FontAwesome";
import Row from "./Row";
import MoreCard from "./MoreCard";

const Details = ({ route, navigation }) => {
  const { name, address, price, details, email, phone, availability } =
    route.params;




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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>

        <ScrollView style={{marginBottom: 50}}>
          <View>
            <Image style={styles.img} source={require("../assets/hostel.jpeg")} />
          </View>


          <View
            style={{
              padding: 10,
            }}
          >


            <View style={styles.rowContainer}>
              <View>
                <Text style={styles.title}> {name} </Text>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesomeIcon icon={faLocationPin} size={12} style={{ marginRight: 5 }} />
                  <Text>{address} </Text>
                </View>
              </View>
              <View>
                <FontAwesomeIcon icon={faPhone} />
                <Seperator />
                <FontAwesomeIcon icon={faEnvelope} />
              </View>
            </View>



            <View style={styles.borderContainer}>
              <View style={styles.rowContainer}>
                <Row>
                  <FontAwesomeIcon icon={faBed} size={15} style={{ marginRight: 8 }} />
                  <Text>{availability}</Text>
                </Row>
                <Row>
                  <FontAwesomeIcon icon={faIndianRupeeSign} size={13} />
                  <Text> {price}</Text>
                </Row>
              </View>
            </View>


            <View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                Details
              </Text>
              <Text> {details} </Text>
             
            </View>
              

            {/* More Hostels    */}
            <View style={{marginTop: 10, borderTopWidth: 0.5, borderTopColor: 'gray'}}>
              <Text style={{marginBottom: 10, marginTop: 5,fontSize: 18, fontWeight: 'bold'}} >More Hostels</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={Hostels}
              renderItem={({ item }) =>
                <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                  <MoreCard item={item} />
                </TouchableOpacity>
              }
              keyExtractor={item => item.id}

            />
            </View>
            

          </View>



        </ScrollView>

        <View style={{
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          padding: 10
        }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Button>Book Now</Button>
           
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  borderContainer: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderTopColor: "gray",
    borderBottomColor: "gray",
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  img: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});




















