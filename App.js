import { useState, useEffect } from "react";

import { LoginPage } from "./pages/loginPage";
import { MainPage } from "./pages/mainPage";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SecureStore } from "expo-secure-store";

import { AuthContext } from "./utils/authContext";

const Stack = createNativeStackNavigator();

export default function App() {

  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
      try{
        const loginStatus = SecureStore.getItemAsync('loginStatus');
        if (loginStatus === 'true') {
          setLoginStatus(true);
        }
      } catch (e) {
        console.log(e);
      }
  }, [])

  return (
    <AuthContext.Provider value={{ setLoginStatus }}>
      <NavigationContainer>
        <Stack.Navigator>
          {loginStatus ?
            <>
              <Stack.Screen
                name="Login"
                component={LoginPage}
                options={options.topBar}
              />
              <Stack.Screen
                name="MainPage"
                component={MainPage}
                options={options.topBar}
              />
            </>
            :
            <>
              <Stack.Screen
                name="Login"
                component={LoginPage}
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

