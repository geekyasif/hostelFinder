import React, { useState } from "react";
import { Pressable,StyleSheet  } from "react-native";

// navigation import
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {  Button} from '@ui-kitten/components';

// icons
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// tab navigations screens
import HomeScreen from "../screens/home/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {

  const [role, setRole] = useState('mess')
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({

        // headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Profile") {
            iconName = "person";
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#F1C40F",
        tabBarInactiveTintColor: "gray",
        
      })}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerTitle: "Hosteler",
          headerStyle: {
            backgroundColor: '#F4D03F',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerTitle: "Hosterler",
          headerStyle: {
            backgroundColor: '#F4D03F',
          },
          headerTitleStyle: {
            fontWeight: 'bold',

          },
          headerRight: () => (
            role == 'student' ? <></> : 
              role == 'hostel' ? <Button style={styles.btn}  size='tiny'
                onPress={() => alert('This is a button!')}
               >Add Hostel</Button> : <></>
                ? <Button style={styles.btn} size='tiny'
                  onPress={() => alert('This is a button!')}
                  >Add Mess</Button>
                : <></>
          ),

        }}
        name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;


const styles = StyleSheet.create({
    btn :{
      display: 'flex',
      marginRight:10,
      // marginTop: 5,
      justifyContent: 'center',
      alignItems: 'center'
    }
})