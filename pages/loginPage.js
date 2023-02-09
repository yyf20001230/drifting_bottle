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

const images = [
  'https://firebasestorage.googleapis.com/v0/b/driftingbottle-776e8.appspot.com/o/avatar_1.png?alt=media&token=e97cc9fe-56c2-4650-8fbe-45218c602478',
  'https://firebasestorage.googleapis.com/v0/b/driftingbottle-776e8.appspot.com/o/avatar_2.png?alt=media&token=2fc80d3a-38a1-42d2-a8e4-8f0d7fd60400',
  'https://firebasestorage.googleapis.com/v0/b/driftingbottle-776e8.appspot.com/o/avatar_3.png?alt=media&token=8491debd-8401-4bb1-9b9e-6a5f763a17f9',
  'https://firebasestorage.googleapis.com/v0/b/driftingbottle-776e8.appspot.com/o/avatar_4.png?alt=media&token=d86ee87f-3b9f-47b7-8943-4f0ef2c655e2',
  'https://firebasestorage.googleapis.com/v0/b/driftingbottle-776e8.appspot.com/o/avatar_5.png?alt=media&token=ebd1476f-8376-4b84-a2e9-14d7b1240818',
  'https://firebasestorage.googleapis.com/v0/b/driftingbottle-776e8.appspot.com/o/avatar_6.png?alt=media&token=ed90b14d-e577-4e97-b98d-c7afb479e12d',
  'https://firebasestorage.googleapis.com/v0/b/driftingbottle-776e8.appspot.com/o/avatar_7.png?alt=media&token=2bba7f87-5e40-44be-ac69-66141d638752',
  'https://firebasestorage.googleapis.com/v0/b/driftingbottle-776e8.appspot.com/o/avatar_8.png?alt=media&token=8aa4b3ed-d759-4628-998c-fe8911a7b204',
];

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
    auth.createUserWithEmailAndPassword(email, password).then((userCredentials) => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      db.collection('userAccounts').doc(userCredentials.user.uid).set({
        joinTime: new Date(),
        avatar: randomImage,
        listenerLevel: 1,
        listenerProgress: 1,
        listenerRating: 4.5,
        nickName: "You",
        speakingEngagement: 0,
        speakerRating: 5,
      });
      const user = userCredentials.user;
      console.log("Registered as ", user.email);
    })
    .catch((error) => {
      auth.signOut();
      alert(error.message);
    });
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
          onChangeText={e => setPassword(e)}ß
        />
        <Text>By registering, I agree to the terms and conditions</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handleRegister()}
          style={styles.button}
        >
          <Text style={styles.buttonOnlineText}>Register</Text>
        </TouchableOpacity>
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
  }
});