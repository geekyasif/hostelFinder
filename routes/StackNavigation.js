import { StyleSheet, Text, View  ,Button} from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/home/HomeScreen"
import SignupScreen from "../screens/authentication/singup/SignupScreen";
import LoginScreen from "../screens/authentication/login/LoginScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import BottomNavigation from '../routes/BottomNavigation'
import ForgotPasswordScreen from "../screens/authentication/forgotPassword/ForgotPasswordScreen";
import Details from "../components/Details";


const Stack = createNativeStackNavigator();


const StackNavigation = () => {

    const globalScreenOptions = {
        headerStyle: {
            backgroundColor: '#F4D03F',
        },
        headerTintColor: '#fff',
       
      }


    const [isLoggedIn, setIsLoggedIn] = useState(true)

    return (
        <Stack.Navigator   screenOptions={globalScreenOptions}  initialRouteName="Login">

            {
                !isLoggedIn ?
                    <>
                        <Stack.Screen
                            options={{
                                headerShown: false,

                            }}
                            name="Login" component={LoginScreen}
                        />

                        <Stack.Screen
                            options={{
                                headerShown: false,
                            }}
                            name="Signup" component={SignupScreen}
                        />

                        <Stack.Screen
                            options={{
                                headerShown: false,
                            }}
                            name="ForgotPassword" component={ForgotPasswordScreen}
                        />

                    </>
                    :
                    <>
                        <Stack.Screen
                            options={{
                                headerShown: false,
                            }}
                            name="Hosteler"
                            component={BottomNavigation}
                        />
                        <Stack.Screen
                           
                            name="Home" component={HomeScreen}
                        />

                        <Stack.Screen
                           
                            name="Details" component={Details}
                        />


                        <Stack.Screen
                           
                            name="Profile" component={ProfileScreen}
                        />
                    </>

            }

        </Stack.Navigator>
    );
};

export default StackNavigation;
const styles = StyleSheet.create({});






