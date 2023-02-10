import { useState } from "react";
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity } from "react-native";

import listener from '../../../assets/images/listener.png';

const { width, height } = Dimensions.get('screen');

export default function ListenerCurrentScreen() {

  const [currentStories, setCurrentStories] = useState([]);

  return (
    <View style={styles.ListenerScreen}>
      <TouchableOpacity onPress={() => setCurrentStories}>
        <Image source={listener} style={styles.images} />
      </TouchableOpacity>
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
