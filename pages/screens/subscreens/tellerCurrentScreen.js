import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ImageBackground
} from "react-native";

import teller from "../../../assets/images/teller.png";
import teller_opened from "../../../assets/images/teller_opened.png";

const { width, height } = Dimensions.get("screen");

export default function TellerCurrentScreen() {
  const [currentStories, setCurrentStories] = useState(false);

  return (
    <View style={styles.TellerScreen}>
      <TouchableOpacity onPress={() => {
        setCurrentStories(!currentStories);
        console.log(currentStories);
      }}>
        <ImageBackground source={currentStories ? teller : teller_opened} 
        style={currentStories ? styles.images : styles.images_opened}>
          {!currentStories ? <TextInput placeholder="Enter your text"/> : null}
        </ImageBackground>
      </TouchableOpacity>
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
    resizeMode: "contain"
  },
  images_opened:{
    width: 0.9 * width,
    height: 0.5 * height,
    resizeMode: "contain"
  }
});
