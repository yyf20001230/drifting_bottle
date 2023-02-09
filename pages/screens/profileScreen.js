import { useContext } from "react";
import { StyleSheet, View, Button, Text, Dimensions } from "react-native";
import { auth } from "../../utils/firebase";

import { AuthContext } from "../../utils/authContext";
import { SecureStore } from "expo-secure-store";

const { width, height } = Dimensions.get("screen");

export default function ProfileScreen({ navigation }) {
  const { setLoginStatus } = useContext(AuthContext);

  const handleSignOut = () => {
    auth.signOut().then(() => {
      console.log("Sign Out");
      setLoginStatus(false);
      SecureStore.deleteItemAsync('loginStatus');
    });   
  };

  return (
    <View style={styles.ProfileScreen}>
      <Text> Frank Yang </Text>
      <Button
        title="Sign Out"
        onPress={() => {
          handleSignOut();
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
