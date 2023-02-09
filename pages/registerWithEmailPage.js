import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";

import { auth } from "../utils/firebase";

export const RegisterWithEmail = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    auth.createUserWithEmailAndPassword(email, password);
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
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
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handleRegister()}
          style={styles.button}
        >
          <Text style={styles.buttonOnlineText}>Register</Text>
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
