import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";

const RootNavigation = () => {

  return (
    <NavigationContainer>
         <StatusBar style="auto" />
      <StackNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});