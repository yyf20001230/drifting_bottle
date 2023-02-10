import { useState, useEffect } from "react";

import { LoginPage } from "./pages/loginPage";
import { RegisterPage } from "./pages/registerPage";
import { MainPage } from "./pages/mainPage";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SecureStore from "expo-secure-store";

import { AuthContext } from "./utils/authContext";

const Stack = createNativeStackNavigator();

export default function App() {

  const [loginStatus, setLoginStatus] = useState(false);

  // retrieve the login status if the device is logged in
  useEffect(() => {

    let controller = new AbortController()

    try{
      // if the secure store can get the loginStatus item, then set the loginStatus to true
      SecureStore.getItemAsync('loginStatus').then((user) => {
        const userObj = JSON.parse(user);
        console.log("Signed in as:" + userObj.email);
        setLoginStatus(true);
      })
      
    } catch (e) {
      console.log(e);
    }

    return () => {
      controller.abort()
    }

  }, [])

  return (
    <AuthContext.Provider value={{ setLoginStatus }}>
      <NavigationContainer>
        <Stack.Navigator>
          {loginStatus ?
              <Stack.Screen
                name="MainPage"
                component={MainPage}
                options={{gestureEnabled: false, headerBackVisible: false, headerShown: false}}
              />
            :
            <>
              <Stack.Screen
                name="Login"
                component={LoginPage}
                options={options.topBar}
              />
              <Stack.Screen
                name="Register"
                component={RegisterPage}
                options={options.topBar}
              />
            </>}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

const options = {
  topBar: {
    headerShown: false
  },
  topBarAnimation: {
    headerShown: false,
    animation: 'none'
  }
}

