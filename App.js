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
  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem("@habit_hunter_user");
    } catch (e) {
      console.log(e);
    }

    console.log("Done.");
  };

  const authContext = useMemo(() => ({
    signOut: () => {
      removeToken();
      setUserToken(null);
      setIsLoading(false);
    },
    signIn: (props) => {
      setUserToken(props);
    },
  }));

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@habit_hunter_user");
      console.log("top token", jsonValue);
      if (jsonValue === null) {
        setUserToken(null);
      }
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log("error in getData", e);
      // error reading value
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setUserToken(getData());
    }, 1500);
  }, []);

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
