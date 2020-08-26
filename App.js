import "react-native-gesture-handler";
import React, { useMemo, useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// Auth/Root Stack
import RootStackScreen from "./screens/RootStackScreen.js";
//  Main Stack
import MainStackScreen from "./screens/MainStackScreen.js";
// Context
import { AuthContext } from "./components/context.js";
// Local Storage
import AsyncStorage from "@react-native-community/async-storage";
// Constants

const authSetup = false;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => ({
    signIn: () => {
      setUserToken("fgkj");
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken("fgkj");
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@habit_hunter_user");
      console.log(jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#24ab89",
        }}
      >
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? <MainStackScreen /> : <RootStackScreen />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  backImage: {
    flex: 1,
    resizeMode: "repeat",
    justifyContent: "center",
  },
});
