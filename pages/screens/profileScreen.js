import { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Button, Image, Text, Dimensions } from "react-native";
import * as SecureStore from "expo-secure-store";

import { AuthContext, signOut } from "../../utils/authContext";

import avatar_1 from "../../assets/images/avatar_1.png";
import avatar_2 from "../../assets/images/avatar_2.png";
import avatar_3 from "../../assets/images/avatar_3.png";
import avatar_4 from "../../assets/images/avatar_4.png";
import avatar_5 from "../../assets/images/avatar_5.png";
import avatar_6 from "../../assets/images/avatar_6.png";
import avatar_7 from "../../assets/images/avatar_7.png";
import avatar_8 from "../../assets/images/avatar_8.png";

const { width, height } = Dimensions.get("screen");
const images = [
  avatar_1,
  avatar_2,
  avatar_3,
  avatar_4,
  avatar_5,
  avatar_6,
  avatar_7,
  avatar_8
];

export default function ProfileScreen({ navigation }) {
  const { setLoginStatus } = useContext(AuthContext);
  const [profile_pic, setProfilePic] = useState(0);

  useEffect(() => {
    let controller = new AbortController();

    try {
      SecureStore.getItemAsync("profile_pic").then(profile_pic => {
        setProfilePic(parseInt(profile_pic));
      });
    } catch (e) {
      console.log(e);
    }

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <View style={styles.ProfileScreen}>
      <Image source={images[profile_pic]} style={styles.avatar} />
      <Text> Frank Yang </Text>
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
          setLoginStatus(false);
        }}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  ProfileScreen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "top",
  },
  avatar: {
    // circle avatar
    width: 0.2 * width,
    height: 0.2 * width,
    borderRadius: 0.1 * width,
    overflow: "hidden",
  }
});
