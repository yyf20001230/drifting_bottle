import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TellerCurrentScreen from './subscreens/tellerCurrentScreen';
import TellerPastScreen from './subscreens/tellerPastScreen';
import teller from '../../assets/images/teller.png';

const Tab = createMaterialTopTabNavigator();
const { width, height } = Dimensions.get('screen');

export default function TellerScreen({ navigation }) {
  return (
    <View style={styles.TellerScreen}>
      <Image source={teller} style={styles.images}/>
      <Text>Teller Screen</Text>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarLabel: ({ focused }) => {
            let styling = focused ? styles.focused : styles.not_focused;
            
            return <Text style={styling}>{route.name}</Text>;
        }})}>
        <Tab.Screen name="Current" component={TellerCurrentScreen} />
        <Tab.Screen name="Past" component={TellerPastScreen} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
    TellerScreen: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    images: {
        width: 0.63 * width,
        height: 0.15 * height,
        resizeMode: 'contain'
    },
    focused: {
        color: '#343434',
        fontWeight: 'bold',
        fontSize: 20
    },
    not_focused: {
        color: '#898989',
        fontSize: 20
    }
});