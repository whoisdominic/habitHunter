import 'react-native-gesture-handler';
import * as React from 'react';
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

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        inactiveColor="#ebedf1"
        barStyle={{
          backgroundColor: '#3f51b5',
          height: 100,
          flex: 0,
          borderTopEndRadius: 0,
          borderTopLeftRadius: 150,
          justifyContent: 'center',
          paddingHorizontal: 75,
          paddingVertical: 17.5,
        }}
        initialRouteName="Habits"
        activeColor="#FFFF"
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
    </NavigationContainer>
  );
}
