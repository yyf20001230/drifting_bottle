import { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";

import * as SecureStore from "expo-secure-store";

import { db, auth } from "../utils/firebase";
import { AuthContext } from "../utils/authContext";

export const LoginPage = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setLoginStatus } = useContext(AuthContext);

  useEffect(() => {
    
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoginStatus(true);
        SecureStore.setItemAsync('loginStatus', JSON.stringify(user))
        navigation.navigate("MainPage");
      }
    });
    return unsubscribe;
  })

  const handleRegister = () => {
    // auth.createUserWithEmailAndPassword(email, password).then((userCredentials) => {
    //   const randomImage = images[Math.floor(Math.random() * images.length)];
    //   db.collection('userAccounts').doc(userCredentials.user.uid).set({
    //     joinTime: new Date(),
    //     avatar: randomImage,
    //     listenerLevel: 1,
    //     listenerProgress: 1,
    //     listenerRating: 4.5,
    //     nickName: "You",
    //     speakingEngagement: 0,
    //     speakerRating: 5,
    //   });
    //   const user = userCredentials.user;
    //   console.log("Registered as ", user.email);
    // })
    // .catch((error) => {
    //   auth.signOut();
    //   alert(error.message);
    // });
    navigation.navigate("Register");
  };

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password).then((userCredentials) => {
      const user = userCredentials.user;
      console.log("Logged in as ", user.email);

    })
    .catch((error) => {
      alert(error.message);
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handleRegister()}
          style={styles.button}
        >
          <Text style={styles.buttonOnlineText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text>This App is about you, and helping others</Text>
        <TextInput
          placeholder="email"
          style={styles.input}
          onChangeText={e => setEmail(e)}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          style={styles.input}
          onChangeText={e => setPassword(e)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handleLogin()}
          style={styles.button}
        >
          <Text style={styles.buttonOnlineText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    height: 40,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 10
  },
  buttonContainer: {
    paddingBottom: 50
  }
});