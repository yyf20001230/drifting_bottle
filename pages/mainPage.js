import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonIcon from "react-native-vector-icons/Ionicons";

import ListenerScreen from "./screens/listenerScreen";
import TellerScreen from "./screens/tellerScreen";
import ProfileScreen from "./screens/profileScreen";

const Tab = createBottomTabNavigator();

export const MainPage = ({ route, navigation }) => {

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="listener"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "listener") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "teller") {
              iconName = focused ? "list" : "list-outline";
            } else if (route.name === "profile") {
              iconName = focused ? "settings" : "settings-outline";
            }

            return <IonIcon name={iconName} size={size} color={color} />;
          }
        })}
      >
        <Tab.Screen name="listener" component={ListenerScreen} />
        <Tab.Screen name="teller" component={TellerScreen} />
        <Tab.Screen name="profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  HomePage: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
