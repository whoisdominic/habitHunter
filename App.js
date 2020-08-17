import 'react-native-gesture-handler';
import * as React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// Screens
import HomeScreen from './screens/HomeScreen.js';
import BuddiesScreen from './screens/BuddiesScreen.js';
import AccountScreen from './screens/AccountScreen.js';
// Images
import BackImg from './assets/images/appbackgroundfill.png';
// Constants
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ImageBackground source={BackImg} style={styles.backImage}>
        <Tab.Navigator
          activeColor="#FFF"
          barStyle={{
            height: 80,
            flex: 0,
            borderTopLeftRadius: 1000,
            borderTopRightRadius: 1000,
            justifyContent: 'center',
            paddingHorizontal: 75,
            paddingTop: 15,
            backgroundColor: '#24ab89',
          }}
        >
          <Tab.Screen
            name="Habits"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Habits',
              tabBarAccessibilityLabel: 'Habits',
              tabBarIcon: ({ color }) => (
                <Entypo name="compass" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Buddies"
            component={BuddiesScreen}
            options={{
              tabBarLabel: 'Buddies',
              tabBarAccessibilityLabel: 'buddies',
              tabBarIcon: ({ color }) => (
                <AntDesign name="aliwangwang-o1" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
              tabBarLabel: 'Account',
              tabBarAccessibilityLabel: 'account',
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="user-circle" size={24} color="black" />
              ),
            }}
          />
        </Tab.Navigator>
      </ImageBackground>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backImage: {
    flex: 1,
    resizeMode: 'repeat',
    justifyContent: 'center',
  },
});
