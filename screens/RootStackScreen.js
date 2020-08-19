import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
// Screens
import SplashScreen from './rootScreens/SplashScreen';
import SignInScreen from './rootScreens/SignInScreen';
import SignUpScreen from './rootScreens/SignUpScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
