import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TellerCurrentScreen from './subscreens/tellerCurrentScreen';
import TellerPastScreen from './subscreens/tellerPastScreen';

const Tab = createMaterialTopTabNavigator();
const { width } = Dimensions.get('screen');

export default function TellerScreen({ navigation }) {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarLabel: ({ focused }) => {
          let styling = focused ? styles.focused : styles.not_focused;
          
          return <Text style={styling}>{route.name}</Text>;
      }})}>
      <Tab.Screen name="Current" component={TellerCurrentScreen} />
      <Tab.Screen name="Past" component={TellerPastScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    focused: {
        fontWeight: 'bold',
        width: 0.5 * width,
    },
    not_focused: {
    }
});