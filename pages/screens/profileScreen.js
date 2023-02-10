import { useState, useContext, useEffect } from "react";
import { StyleSheet, View, Button, Text, Dimensions, Image } from "react-native";
import { auth, db } from "../../utils/firebase";

import { AuthContext } from "../../utils/authContext";
import * as SecureStore from "expo-secure-store";
import LoadingScreen from "./loadingScreen";

const { width, height } = Dimensions.get("screen");

export default function ProfileScreen({ navigation }) {
  const [profile, setProfile] = useState({});
  const [avatar, setAvatar] = useState('../../assets/avatars/1.png');

  // useful command for styling: navigation.setOptions({ title: "Profile" });
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // retrieve the user's profile
        db
          .collection("userAccounts")
          .doc(user.uid)
          .get()
          .then(doc => {
            if (doc.exists) {
              setProfile(doc.data());
              console.log("Document data:", doc.data());
            } else {
              console.log("No such document!");
            }
          })
          .catch(error => {
            console.log("Error getting document:", error);
          });
      }
    });
    return unsubscribe;
  }, []);
  const { setLoginStatus } = useContext(AuthContext);

  const handleSignOut = () => {
    auth.signOut().then(() => {
      console.log("Sign Out");
      setLoginStatus(false);
      SecureStore.deleteItemAsync("loginStatus");
    });
  };

  if (profile.nickName) {
    return (
      <View style={styles.ProfileScreen}>
        <Text>{profile.nickName}</Text>
        <Text>Listener Level: {profile.listenerLevel}</Text>
        <Text>Listener Rating: {profile.listenerRating}</Text>
        <Text>Speaker Engagement: {profile.speakingEngagement}</Text>
        <Text>Speaker Rating: {profile.speakerRating}</Text>
        <Image style={styles.avatar} source = {{uri:profile.avatar}} />

        <Button
          title="Sign Out"
          onPress={() => {
            handleSignOut();
          }}
        />
      </View>
    );
  } else {
    return (
      <LoadingScreen/>
    );
  }
}

const styles = StyleSheet.create({
  ProfileScreen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "top"
  },
  avatar: {
    // circle avatar
    width: 0.2 * width,
    height: 0.2 * width,
    borderRadius: 0.1 * width,
    overflow: "hidden"
  }
});
