import { StyleSheet, View, Button } from "react-native";
import { useContext } from "react";

import { AuthContext, signIn, signInWithGoogle } from "../utils/authContext";

export const LoginPage = ({ route, navigation }) => {
  const { setLoginStatus } = useContext(AuthContext);

  return (
    <View style={styles.LoginPage}>
      <Button
        title="Google"
        onPress={() => {
          signInWithGoogle();
          setLoginStatus(true);
        }}
      />
      <Button
        title="Apple"
        onPress={() => {
          signIn();
          setLoginStatus(true);
        }}
      />
      <Button
        title="Email/Password"
        onPress={() => {
          signIn();
          setLoginStatus(true);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  LoginPage: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
