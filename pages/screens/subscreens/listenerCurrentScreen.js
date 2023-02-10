import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";

import listener from '../../../assets/images/listener.png';

const { width, height } = Dimensions.get('screen');

export default function ListenerCurrentScreen() {
  return (
    <View style={styles.ListenerScreen}>
      <Image source={listener} style={styles.images} />
      <Text>Start a new story</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    ListenerScreen: {
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
