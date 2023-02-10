import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";


const { width, height } = Dimensions.get('screen');

export default function ListenerPastScreen() {
  return (
    <View style={styles.TellerScreen}>
      <Text>Start a new story</Text>
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
