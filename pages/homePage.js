import { StyleSheet, View, Button, Text } from "react-native";

export const HomePage = ({ route, navigation }) => {
  return (
    <View style={styles.HomePage}>
      <Text>This App is about helping you, and helping others</Text>
      <Button
        title="Sign Up"
        onPress={() => {
          navigation.navigate("Register");
          console.log("Register");
        }}
      />
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("Login");
          console.log("Login");
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
  HomePage: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
