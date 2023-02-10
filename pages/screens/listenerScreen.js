import React from 'react';
import { StyleSheet, Text, Dimensions } from "react-native";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ListenerCurrentScreen from './subscreens/listenerCurrentScreen';
import ListenerPastScreen from './subscreens/listenerPastScreen';

import listener from '../../assets/images/listener.png';

const { width, height } = Dimensions.get('screen');
const Tab = createMaterialTopTabNavigator();

export default function ListenerScreen({ navigation }) {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarLabel: ({ focused }) => {
          let styling = focused ? styles.focused : styles.not_focused;
          
          return <Text style={styling}>{route.name}</Text>;
      }})}>
      <Tab.Screen name="Current" component={ListenerCurrentScreen} />
      <Tab.Screen name="Past" component={ListenerPastScreen} />
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