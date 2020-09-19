import "react-native-gesture-handler";
import React, { useMemo, useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// Auth/Root Stack
import RootStackScreen from "./screens/RootStackScreen.js";
//  Main Stack
import MainStackScreen from "./screens/MainStackScreen.js";
// Context
import { AuthContext } from "./components/authContext.js";
// Local Storage
import AsyncStorage from "@react-native-community/async-storage";

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
    }, 1200);
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#212121",
        }}
      >
        <ActivityIndicator size="large" color="white" />
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
