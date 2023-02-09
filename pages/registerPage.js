import { StyleSheet, View, Button } from "react-native";
import { useContext } from "react";

import { AuthContext, signIn } from "../utils/authContext";

export const RegisterPage = ({ route, navigation }) => {
  const { setLoginStatus } = useContext(AuthContext);

  return (
    <View style={styles.RegisterPage}>
      <Button
        title="Google"
        onPress={() => {
          signIn();
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
          navigation.navigate("RegisterWithEmail");
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
  RegisterPage: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
