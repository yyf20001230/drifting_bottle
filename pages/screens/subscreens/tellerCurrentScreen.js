import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";

import teller from '../../../assets/images/teller.png';

const { width, height } = Dimensions.get('screen');

export default function TellerCurrentScreen() {
  return (
    <View style={styles.TellerScreen}>
      <Image source={teller} style={styles.images} />
      <Text>Teller Screen</Text>
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
        width: 0.5 * width,
        height: 0.2 * height,
        resizeMode: 'contain'
    },
});
